import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReservasService } from 'src/app/core/providers/reservas/reservas.service';
import { CreateReservaComponent } from 'src/app/shared/dialogs/create-reserva/create-reserva.component';
import { DetailReservaComponent } from 'src/app/shared/dialogs/detail-reserva/detail-reserva.component';
import moment from 'moment';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  @Input() minTab?: any;
  public response: Array<any> = [];
  public responseShort: Array<any> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public reservas: any;
  public postal_code_id: any;
  public ciudad_id: any;
  public direccion_id: any;
  public person_id: any;

  public displayedColumns: string[] = ['id', 'initialD', 'state', 'totalPeople', 'totalPrice', 'options'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private reservasService: ReservasService,
    public dialog: MatDialog) { }



  ngOnInit(): void {
    this.getReserva();
  }


  public addRestaurante(id?: any): void {
    let dialogRef!: any;
    if (id) {
      const send = this.reservas.find((restaurante: any) =>
        restaurante.id === id
      )
      dialogRef = this.dialog.open(CreateReservaComponent, { data: send });
    } else {
      dialogRef = this.dialog.open(CreateReservaComponent);
    }
    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form) {
        if (id) {
          const send = this.reservas.find((restaurante: any) =>
            restaurante.id === id);
          const newReserva: any = {
            "initial_date": moment(form.value.initial_date).format('Y-MM-DD HH:mm:ss'),
            "end_date": moment(form.value.initial_date).format('Y-MM-DD HH:mm:ss'),
            "totalPrice": form.value.totalPrice,
            "totalPeople": form.value.totalPeople,
            "state_id": form.value.state_id,
            "user_id": send.user_id, 
            "restaurant_promoter_id": form.value.restaurant_promoter_id,
          }
          this.reservasService.putReserva(newReserva, id).subscribe((result: any) => {
            this.getReserva();
          })
        } else {
          const newReserva: any = {
            "initial_date": moment(form.value.initial_date).format('Y-MM-DD HH:mm:ss'),
            "end_date": moment(form.value.initial_date).format('Y-MM-DD HH:mm:ss'),
            "totalPrice": form.value.totalPrice,
            "totalPeople": form.value.totalPeople,
            "state_id": form.value.state_id ? form.value.state_id : 1,
            "user_id": 1, // poner id del usuario cuando se haga el login
            "restaurant_promoter_id": form.value.restaurant_promoter_id,
          }
          this.reservasService.postReserva(newReserva).subscribe((result: any) => {
            this.getReserva();
          })
        }
      }
    });
  }

  public viewRestaurante(id: any): void {
    const send = this.reservas.find((reserva: any) =>
      reserva.id === id
    )
    const dialogRef = this.dialog.open(DetailReservaComponent, { data: send });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Añadir detalle Reserva`);
    });
  }

  public getReserva(): void {
    this.reservasService.getReservas().subscribe((result: any) => {
      this.reservas = result;
      if (this.minTab && this.reservas.length > 3) {
        this.reservas.length = 3;
      }
    })
  }

  public deleteRestaurante(id: any): void {
    this.reservasService.deleteReserva(id).subscribe((result: any) => {
      this.getReserva();
    });
  }
}
