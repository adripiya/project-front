import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';
import { RestaurantesService } from 'src/app/core/providers/restaurantes/restaurantes.service';
import { CreatePromotorComponent } from 'src/app/shared/dialogs/create-promotor/create-promotor.component';
import { CreateRestauranteComponent } from 'src/app/shared/dialogs/create-restaurante/create-restaurante.component';
import { DetailPromotorComponent } from 'src/app/shared/dialogs/detail-promotor/detail-promotor.component';
import { DetailRestauranteComponent } from 'src/app/shared/dialogs/detail-restaurante/detail-restaurante.component';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent {
  @Input() minTab?: any;
  public response: Array<any> = [];
  public responseShort: Array<any> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public restaurantes: any;
  public postal_code_id: any;
  public ciudad_id: any;
  public direccion_id: any;
  public person_id: any;

  public displayedColumns: string[] = ['id', 'nombre', 'licencia', 'maxGente', 'minGente','waiters', 'options'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private restaurantesService: RestaurantesService,private direccionService: DireccionService,
    public dialog: MatDialog) { }
  


  ngOnInit(): void {
    this.getRestaurante(); 
  }


  public addRestaurante(id?: any): void {
    let dialogRef!: any;
    if(id) {
      const send = this.restaurantes.find((restaurante: any) =>
      restaurante.id === id
    )
      dialogRef = this.dialog.open(CreateRestauranteComponent, { data: send });
    } else {
      dialogRef = this.dialog.open(CreateRestauranteComponent);
    }
    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form) {
        if(id) {
          const send = this.restaurantes.find((restaurante: any) =>
            restaurante.id === id);
          const newRestaurante: any = {
            "license": form.value.license,
            "name":form.value.name,
            "waiters": form.value.waiters,
            "minPeople": form.value.minPeople,
            "maxPeople": form.value.maxPeople,
            "pricePerPerson": form.value.pricePerPerson,
            "direction_id": send.direction_id,
          }
          this.restaurantesService.putRestaurante(newRestaurante, id).subscribe((result: any) => {
            this.getRestaurante();
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
      this.controlRestaurante(form);
    })
  }

  public controlRestaurante(form: any): void {
    const newRestaurante: any = {
      "license": form.value.license,
      "name":form.value.name,
      "waiters": form.value.waiters,
      "minPeople": form.value.minPeople,
      "maxPeople": form.value.maxPeople,
      "pricePerPerson": form.value.pricePerPerson,
      "direction_id": this.direccion_id,
    }
    this.restaurantesService.postRestaurante(newRestaurante).subscribe((data: any) => {
      this.getRestaurante();
    })
  }



  public viewRestaurante(id: any): void {
    const send = this.restaurantes.find((restaurante: any) =>
      restaurante.id === id
    )
    const dialogRef = this.dialog.open(DetailRestauranteComponent, { data: send });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public getRestaurante(): void {
    this.restaurantesService.getRestaurantes().subscribe((result: any) => {
      this.restaurantes = result;
      if(this.minTab && this.restaurantes.length > 3) {
        this.restaurantes.length = 3;
      }
    })
  }

  public deleteRestaurante(id: any): void {
    this.restaurantesService.deleteRestaurante(id).subscribe((result: any) => {
      this.getRestaurante();
    });
  }
}
