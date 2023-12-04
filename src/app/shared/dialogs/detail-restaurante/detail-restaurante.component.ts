import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';
import { DetailEventsComponent } from '../detail-events/detail-events.component';

@Component({
  selector: 'app-detail-restaurante',
  templateUrl: './detail-restaurante.component.html',
  styleUrls: ['./detail-restaurante.component.scss']
})
export class DetailRestauranteComponent {


  public details: FormControl = new FormControl('');


  public codigoPostal: any;
  public ciudad: any;
  public isAddingDetails: boolean = false;

  constructor(public dialogRef: MatDialogRef<DetailRestauranteComponent>, private direccionService: DireccionService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

      this.direccionService.getCodigoPostal().subscribe((codigoP: any) => {
        this.codigoPostal = codigoP;
        const newCP = this.codigoPostal.find((CP: any) =>
          CP.id === this.data.direction.postal_code_id
        )
        this.codigoPostal = newCP;
      })
      this.direccionService.getCiudades().subscribe((ciudad: any) => {
        this.ciudad = ciudad;
        const newCity = this.ciudad.find((CP: any) =>
          CP.id === this.data.direction.city_id
        )
        this.ciudad = newCity;
      })
    
  }

  cerrar() {
    this.dialogRef.close();
  }
}
