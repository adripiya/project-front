import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/providers/login/login.service';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { RestaurantesService } from 'src/app/core/providers/restaurantes/restaurantes.service';
import { UsuariosService } from 'src/app/core/providers/usuarios/usuarios.service';

@Component({
  selector: 'app-create-restaurante-promotor',
  templateUrl: './create-restaurante-promotor.component.html',
  styleUrls: ['./create-restaurante-promotor.component.scss']
})
export class CreateRestaurantePromotorComponent {


  public restaurantes: any;
  public promotores: any;
  public restaurantePromotorForm: FormGroup = new FormGroup({
    promoter_id: new FormControl('', Validators.required),
    restaurant_id: new FormControl('', Validators.required),
  });
  constructor(
    public dialogRef: MatDialogRef<CreateRestaurantePromotorComponent>, private restaurantesService: RestaurantesService, private promotoresService: PromotoresService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.restaurantesService.getRestaurantes().subscribe((restaurantes: any) => {
      this.restaurantes = restaurantes;
    })
    this.promotoresService.getPromotores().subscribe((promotores: any) => {
      this.promotores = promotores;
    })
  }

  cerrar() {
    this.dialogRef.close();
  }

  crear() {
    if(this.restaurantePromotorForm.valid){
      this.dialogRef.close(this.restaurantePromotorForm);
    }
  }
}
