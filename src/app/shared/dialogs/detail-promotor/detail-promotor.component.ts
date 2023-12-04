import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailEventsComponent } from '../detail-events/detail-events.component';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';

@Component({
  selector: 'app-detail-promotor',
  templateUrl: './detail-promotor.component.html',
  styleUrls: ['./detail-promotor.component.scss']
})
export class DetailPromotorComponent implements OnInit {

  public details: FormControl = new FormControl('');

  public direcciones: any;
  public codigoPostal: any;
  public ciudad: any;
  public isAddingDetails: boolean = false;

  constructor(public dialogRef: MatDialogRef<DetailEventsComponent>, private direccionService: DireccionService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.direccionService.getDireccion().subscribe((direcciones: any) => {
      this.direcciones = direcciones;
      const newDireccion = this.direcciones.find((direccion: any) =>
        direccion.id === this.data.person.direction_id
      )
      this.direcciones = newDireccion;
      this.direccionService.getCodigoPostal().subscribe((codigoP: any) => {
        this.codigoPostal = codigoP;
        const newCP = this.codigoPostal.find((CP: any) =>
          CP.id === this.direcciones.postal_code_id
        )
        this.codigoPostal = newCP;
      })
      this.direccionService.getCiudades().subscribe((ciudad: any) => {
        this.ciudad = ciudad;
        const newCity = this.ciudad.find((CP: any) =>
          CP.id === this.direcciones.city_id
        )
        this.ciudad = newCity;
      })
    })
    
  }

  cerrar() {
    this.dialogRef.close();
  }
}
