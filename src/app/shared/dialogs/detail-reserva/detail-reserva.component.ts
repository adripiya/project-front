import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';

@Component({
  selector: 'app-detail-reserva',
  templateUrl: './detail-reserva.component.html',
  styleUrls: ['./detail-reserva.component.scss']
})
export class DetailReservaComponent implements OnInit {


  public vehiculosDetail: any;
  public isAddingDetails: boolean = false;
  public promotorRestaurante: any;

  constructor(public dialogRef: MatDialogRef<DetailReservaComponent>, private promotoresService: PromotoresService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.promotoresService.getPromotorRestaurante().subscribe((result: any) => {
      this.promotorRestaurante = result;
      this.promotorRestaurante = this.promotorRestaurante.find((restaurante: any) =>
            restaurante.id === this.data.restaurant_promoter_id);
            
    })

  }


  cerrar() {
    this.dialogRef.close();
  }

}
