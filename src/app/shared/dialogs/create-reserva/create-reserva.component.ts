import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { ReservasService } from 'src/app/core/providers/reservas/reservas.service';
import { RestaurantesService } from 'src/app/core/providers/restaurantes/restaurantes.service';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.scss']
})
export class CreateReservaComponent {


  public restaurantes: any;
  public newRestaurantes: any = [];
  public restaurantesKO: any = [];
  public searched: boolean = false;
  public promotores: any;
  public promotoresRestaurante: any;
  public newPromotorRestaurante: any = [];
  public estados: any;
  public restaurante: any;
  public reservas: any;
  public reservasConflictivasVC: any;
  public restauranteSelect: any
  public reservaForm: FormGroup = new FormGroup({
    initial_date: new FormControl('', Validators.required),
    restaurant_id: new FormControl('', Validators.required),
    totalPrice: new FormControl(''),
    totalPeople: new FormControl('', Validators.required),
    state_id: new FormControl(''),
    promoter_id: new FormControl('', Validators.required),
    restaurant_promoter_id: new FormControl(''),

  });
  constructor(
    public dialogRef: MatDialogRef<CreateReservaComponent>, private restaurantesService: RestaurantesService, private promotoresService: PromotoresService, private reservasService: ReservasService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    if (this.data) {
      this.reservasService.getEstados().subscribe((result: any) => {
        this.estados = result;
      })
      this.reservaForm = new FormGroup({
        initial_date: new FormControl(this.data.initial_date),
        restaurant_id: new FormControl(''),
        totalPrice: new FormControl(this.data.totalPrice, Validators.required),
        totalPeople: new FormControl(this.data.totalPeople, Validators.required),
        state_id: new FormControl(this.data.state_id, Validators.required),
        promoter_id: new FormControl(''),
        restaurant_promoter_id: new FormControl(this.data.restaurant_promoter_id),

      });
    }
  }

  public buscar(): void {
    if (this.reservaForm.value.initial_date) {
      this.reservaForm.controls['restaurant_id'].reset();
      this.reservaForm.controls['promoter_id'].reset();
      this.reservaForm.controls['totalPeople'].reset();

      this.reservasService.getReservas().subscribe((resultReservas: any) => {
        this.reservas = resultReservas;
        this.restaurantesService.getRestaurantes().subscribe((resultRestaurantes: any) => {
          this.restaurantes = resultRestaurantes;
          this.controlBuscador();
        })
      })
    }
  }

  public controlBuscador(): void {
    this.reservasConflictivasVC = [];
    this.reservas.forEach((reserva: any) => {
      if (moment(reserva.initial_date).format('Y-MM-DD') === moment(this.reservaForm.value.initial_date).format('Y-MM-DD')) {
        this.reservasConflictivasVC.push(reserva);
      }
    });
    this.promotoresService.getPromotorRestaurante().subscribe((response: any) => {
      this.promotoresRestaurante = response;
      if (this.reservasConflictivasVC.length > 0) {
        this.newRestaurantes = [];
        this.newPromotorRestaurante = [];
        this.restaurantesKO = [];
        this.promotoresService.getPromotorRestaurante().subscribe((response: any) => {
          this.promotoresRestaurante = response;

          this.reservasConflictivasVC.forEach((reservaCVCId: any) => {
            this.promotoresRestaurante.forEach((restaurantePromotor: any) => {
              if (restaurantePromotor.id === reservaCVCId.restaurant_promoter_id) {
                this.newPromotorRestaurante.push(restaurantePromotor);
              }
            });
          });
          this.newPromotorRestaurante.forEach((restaurantePromotor: any) => {
            this.restaurantes.forEach((restaurante: any) => {
              if (restaurante.id === restaurantePromotor.restaurant_id) {
                this.restaurantesKO.push(restaurante);
              }
            });
          });

          this.restaurantes.forEach((restaurante: any) => {
            const restauranteSelect = this.restaurantesKO.filter((rest: any) => rest.id === restaurante.id);
            if (restauranteSelect.length === 0) {
              this.newRestaurantes.push(restaurante);
            }
          });

          this.searched = true;
        })
      } else {
        this.newRestaurantes = this.restaurantes;
        this.searched = true;
      }
    })
    }

  buscarPromotores(): void {
      this.restauranteSelect = this.restaurantes.find((restaurante: any) =>
        restaurante.id === this.reservaForm.value.restaurant_id);
      this.promotores = this.restauranteSelect.promoter;
    }

  cerrar() {
      this.dialogRef.close();
    }

  crear() {
      if(this.reservaForm.valid) {
      if (this.data) {
        this.dialogRef.close(this.reservaForm);
      } else {
        const restaurantePromotorSelect = this.promotoresRestaurante.find((restaurantePromotorS: any) =>
          restaurantePromotorS.restaurant_id === this.reservaForm.value.restaurant_id && restaurantePromotorS.promoter_id === this.reservaForm.value.promoter_id);

        this.restaurante = this.restaurantes.find((restaurante: any) =>
          restaurante.id === this.reservaForm.value.restaurant_id
        )
        this.reservaForm.controls['restaurant_promoter_id'].setValue(restaurantePromotorSelect.id);
        this.reservaForm.controls['restaurant_promoter_id'].updateValueAndValidity();
        this.reservaForm.controls['totalPrice'].setValue(this.restaurante.pricePerPerson * this.reservaForm.value.totalPeople);
        this.reservaForm.controls['totalPrice'].updateValueAndValidity();
        this.dialogRef.close(this.reservaForm);
      }
    }
  }
}
