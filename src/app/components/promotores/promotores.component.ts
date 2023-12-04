import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';
import { PeopleService } from 'src/app/core/providers/people/people.service';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { CreatePromotorComponent } from 'src/app/shared/dialogs/create-promotor/create-promotor.component';
import { DetailPromotorComponent } from 'src/app/shared/dialogs/detail-promotor/detail-promotor.component';

@Component({
  selector: 'app-promotores',
  templateUrl: './promotores.component.html',
  styleUrls: ['./promotores.component.scss']
})

export class PromotoresComponent implements OnInit {
  @Input() minTab?: any;
  public response: Array<any> = [];
  public responseShort: Array<any> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public promotores: any;
  public postal_code_id: any;
  public ciudad_id: any;
  public direccion_id: any;
  public person_id: any;
  public promotor_id: any;

  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'número', 'options'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private promotoresService: PromotoresService,private direccionService: DireccionService,
    private peopleService: PeopleService, public dialog: MatDialog) { }
  


  ngOnInit(): void {
    this.getPromotor(); 
  }


  public addPromotor(id?: any): void {
    let dialogRef!: any;
    if(id) {
      const send = this.promotores.find((promotor: any) =>
      promotor.id === id
    )
      dialogRef = this.dialog.open(CreatePromotorComponent, { data: send });
    } else {
      dialogRef = this.dialog.open(CreatePromotorComponent);
    }
    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form) {
        if(id) {
          const send = this.promotores.find((promotor: any) =>
            promotor.id === id);
          const newPromotor: any = {
            'email': form.value.email,
            'phoneNumber': form.value.phoneNumber,
            'person_id': send.person.id,
          }
          this.promotoresService.putPromotores(newPromotor, id).subscribe((result: any) => {
            this.getPromotor();
          })
        } else {
          this.controlCodigoPostal(form);
        }
      }
    });
  }


  public controlCodigoPostal(form: any): void {
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
      this.controlCity(form);
    })

  }

  public controlCity(form: any): void {
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
      this.controlDireccion(form);
    })

  }

  public controlDireccion(form: any): void {
    const send = {
      'street': form.value.street,
      'number': form.value.number,
      'floor': form.value.floor,
      'postal_code_id': this.postal_code_id,
      'city_id': this.ciudad_id,
    }
    this.direccionService.postDireccion(send).subscribe((data: any) => {
      this.direccion_id = data.data.id;
      this.controlPeople(form);
    })
  }

  public controlPeople(form: any): void {
    const send: any = {
      'name': form.value.name,
      'lastName': form.value.lastName,
      'nif': form.value.nif,
      'direction_id': this.direccion_id,
    }
    this.peopleService.postPeople(send).subscribe((data: any) => {
      this.person_id = data.data.id;
      this.controlPromotor(form);
    })
  }

  public controlPromotor(form: any): void {
    const send: any = {
      'email': form.value.email,
      'phoneNumber': form.value.phoneNumber,
      'person_id': this.person_id,
    }
    this.promotoresService.postPromotores(send).subscribe((data: any) => {
      this.promotor_id = data.data.id;
      this.getPromotor();
    })
  }



  public viewPromotor(id: any): void {
    const send = this.promotores.find((promotor: any) =>
      promotor.id === id
    )
    const dialogRef = this.dialog.open(DetailPromotorComponent, { data: send });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public getPromotor(): void {
    this.promotoresService.getPromotores().subscribe((result: any) => {
      this.promotores = result;
      if(this.minTab && this.promotores.length > 3) {
        this.promotores.length = 3;
      }
    })
  }

  public deletePromotor(id: any): void {
    this.promotoresService.deletePromotores(id).subscribe((result: any) => {
      this.getPromotor();
    });
  }
}
