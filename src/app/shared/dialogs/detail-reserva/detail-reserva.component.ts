import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { ReservasService } from 'src/app/core/providers/reservas/reservas.service';

@Component({
  selector: 'app-detail-reserva',
  templateUrl: './detail-reserva.component.html',
  styleUrls: ['./detail-reserva.component.scss']
})
export class DetailReservaComponent implements OnInit {


  public isAddingDetails: boolean = false;
  public promotorRestaurante: any;
  public details: FormControl = new FormControl('');
  public reservasDetail: any;
  

  constructor(public dialogRef: MatDialogRef<DetailReservaComponent>, private promotoresService: PromotoresService, private reservasService: ReservasService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.promotoresService.getPromotorRestaurante().subscribe((result: any) => {
      this.promotorRestaurante = result;
      this.promotorRestaurante = this.promotorRestaurante.find((restaurante: any) =>
            restaurante.id === this.data.restaurant_promoter_id);
            this.reservasService.getReservasDetalle().subscribe((result: any) => {
              this.reservasDetail = result.find((reservaD: any) =>
                reservaD.booking_id === this.data.id 
              )
            if (this.reservasDetail) {
              this.details = new FormControl(this.reservasDetail.details);
            }
    })

  })
}

  sendDetails() {
    if (this.details.value != '') {
      const detail: any = {
        'details': this.details.value,
        'booking_id': this.data.id
      }
      if (this.reservasDetail) {
        this.reservasService.putReservaDetalle(this.data.id, detail).subscribe((response: any) => {
          if (response) {
            this.cerrar();
          }
        })
      } else {
        this.reservasService.postReservDetalle(detail).subscribe((response: any) => {
          if (response) {
            this.cerrar();
          }
        })
      }
    }
  }


  cerrar() {
    this.dialogRef.close();
  }

}
