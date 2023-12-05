import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';
import { PeopleService } from 'src/app/core/providers/people/people.service';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { RestaurantesService } from 'src/app/core/providers/restaurantes/restaurantes.service';
import { UsuariosService } from 'src/app/core/providers/usuarios/usuarios.service';
import { CreateUsuarioComponent } from 'src/app/shared/dialogs/create-usuario/create-usuario.component';
import { DetailUsuarioComponent } from 'src/app/shared/dialogs/detail-usuario/detail-usuario.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @Input() minTab?: any;

  public usuarios: any;
  public postal_code_id: any;
  public ciudad_id: any;
  public direccion_id: any;
  public person_id: any;
  public promotor_id: any;



  public displayedColumns: string[] = ['id', 'email', 'role', 'created_at', 'updated_at', 'options'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private usuariosService: UsuariosService, private promotoresService: PromotoresService,private direccionService: DireccionService,
    private peopleService: PeopleService,
    public dialog: MatDialog) { }
  


  ngOnInit(): void {
    this.getUsuarios(); 
  }

  public addUsuario(id?: any): void {
    let dialogRef!: any;
    if (id) {
      const send = this.usuarios.find((event: any) =>
        event.id === id
      )
      dialogRef = this.dialog.open(CreateUsuarioComponent, { data: send });
    } else {
      dialogRef = this.dialog.open(CreateUsuarioComponent);
    }
    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      if (result) {
        
        if (id) {
          const send = this.usuarios.find((event: any) =>
        event.id === id
      )
          if(send.person_id === null) {
            this.controlCodigoPostal(result, send);
          } else {
          const newCar: any = {
            'email': result.value.email,
            'password': result.value.password,
          }
          this.usuariosService.putUsuario(newCar, id).subscribe((result: any) => {
            this.getUsuarios();
          })
        }
        } else {
          const newCar: any = {
            'role': result.value.role,
            'email': result.value.email,
            'password': result.value.password,
          }
          this.usuariosService.postUsuario(newCar).subscribe((result: any) => {
            this.getUsuarios();
          })
        }

      }

    });
  }

  public controlCodigoPostal(form: any, user: any): void {
    this.direccionService.getCodigoPostal().subscribe((postalCodes: any) => {
      postalCodes.forEach((PC: any) => {
        if(PC.postal_code === form.value.postal_code) {
            this.postal_code_id = PC.id
        }
      });
      if(!this.postal_code_id) {
        const send = {
          'postal_code': form.value.postal_code,
        }
        this.direccionService.postCodigoPostal(send).subscribe((data: any) => {
          this.postal_code_id = data.data.id;
        })      
      }
      this.controlCity(form, user);
    })

  }

  public controlCity(form: any, user: any): void {
    this.direccionService.getCiudades().subscribe((ciudades: any) => {
      ciudades.forEach((ciudad: any) => {
        if(ciudad.city.toLowerCase() === form.value.city.toLowerCase()) {
            this.ciudad_id = ciudad.id
        }
      });
      if(!this.ciudad_id) {
        const send = {
          'city': form.value.city
        }
        this.direccionService.postCiudades(send).subscribe((data: any) => {
          this.ciudad_id = data.data.id;
        })      
      }
      this.controlDireccion(form, user);
    })

  }

  public controlDireccion(form: any, user: any): void {
    const send = {
      'street': form.value.street,
      'number': form.value.number,
      'floor': form.value.floor,
      'postal_code_id': this.postal_code_id,
      'city_id': this.ciudad_id,
    }
    this.direccionService.postDireccion(send).subscribe((data: any) => {
      this.direccion_id = data.data.id;
      this.controlPeople(form, user);
    })
  }

  public controlPeople(form: any, user: any): void {
    const send: any = {
      'name': form.value.name,
      'lastName': form.value.lastName,
      'nif': form.value.nif,
      'direction_id': this.direccion_id,
    }
    this.peopleService.postPeople(send).subscribe((data: any) => {
      this.person_id = data.data.id;
      this.controlUser(form, user);
    })
  }

  public controlUser(form: any, user: any): void {
    const newCar: any = {
      'email': form.value.email,
      'password': form.value.password,
      "role": user.role,
      "person_id": this.person_id,
    }
    this.usuariosService.putUsuario(newCar, user.id).subscribe((result: any) => {
      this.getUsuarios();
    })
  }


  public viewUsuario(id: any): void {
    const send = this.usuarios.find((usuario: any) =>
      usuario.id === id
    )
    const dialogRef = this.dialog.open(DetailUsuarioComponent, { data: send });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe((result: any) => {
      this.usuarios = result;
      if(this.minTab && this.usuarios.length > 3) {
        this.usuarios.length = 3;
      }
    })
  }

  public deleteUsuario(id: any): void {
    this.usuariosService.deleteUsuario(id).subscribe((result: any) => {
      this.getUsuarios();
    });
  }
}
