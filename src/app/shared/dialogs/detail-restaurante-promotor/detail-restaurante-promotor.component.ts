import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';

@Component({
  selector: 'app-detail-restaurante-promotor',
  templateUrl: './detail-restaurante-promotor.component.html',
  styleUrls: ['./detail-restaurante-promotor.component.scss']
})
export class DetailRestaurantePromotorComponent {


  public direcciones: any;
  public codigoPostal: any;
  public ciudad: any;
  public isAddingDetails: boolean = false;

  constructor(public dialogRef: MatDialogRef<DetailRestaurantePromotorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  cerrar() {
    this.dialogRef.close();
  }
}
