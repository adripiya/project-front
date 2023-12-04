import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { RestaurantesService } from 'src/app/core/providers/restaurantes/restaurantes.service';
import { CreateRestaurantePromotorComponent } from 'src/app/shared/dialogs/create-restaurante-promotor/create-restaurante-promotor.component';
import { DetailRestaurantePromotorComponent } from 'src/app/shared/dialogs/detail-restaurante-promotor/detail-restaurante-promotor.component';
import { DetailRestauranteComponent } from 'src/app/shared/dialogs/detail-restaurante/detail-restaurante.component';

@Component({
  selector: 'app-restaurante-promotor',
  templateUrl: './restaurante-promotor.component.html',
  styleUrls: ['./restaurante-promotor.component.scss']
})
export class RestaurantePromotorComponent {

  @Input() minTab?: any;
  public restaurantePromotor: any;


  public displayedColumns: string[] = ['idA', 'idR', 'nombreR', 'licenciaR', 'idP', 'emailP', 'numberP', 'options'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private promotoresService: PromotoresService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getRestaurantePromotor();
  }


  public addRestaurante(id?: any): void {

    const dialogRef = this.dialog.open(CreateRestaurantePromotorComponent);

    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form) {
        const newRestaurantePromotor: any = {
          "promoter_id": form.value.promoter_id,
          "restaurant_id": form.value.restaurant_id,
        }
        this.promotoresService.atachPromotorRestaurante(newRestaurantePromotor).subscribe((result: any) => {
          this.getRestaurantePromotor();
        })

      }
    });
  }

  public viewRestaurantePromotor(id: any): void {
    const send = this.restaurantePromotor.find((promotor: any) =>
      promotor.id === id
    )
    this.dialog.open(DetailRestaurantePromotorComponent, { data: send });

  }

  public getRestaurantePromotor(): void {
    this.promotoresService.getPromotorRestaurante().subscribe((result: any) => {
      this.restaurantePromotor = result;
      if (this.minTab && this.restaurantePromotor.length > 3) {
        this.restaurantePromotor.length = 3;
      }
    })
  }

  public deleteRestaurantePromotor(id: any): void {
    const send = this.restaurantePromotor.find((restauranteP: any) =>
      restauranteP.id === id
    )
    const delRestaurantePromotor: any = {
      "promoter_id": send.promoter_id,
      "restaurant_id": send.restaurant_id,
    }
    this.promotoresService.detachPromotorRestaurante(delRestaurantePromotor).subscribe((result: any) => {
      this.getRestaurantePromotor();
    });
  }
}
