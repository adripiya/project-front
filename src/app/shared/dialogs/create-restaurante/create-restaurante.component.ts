import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/providers/login/login.service';
import { UsuariosService } from 'src/app/core/providers/usuarios/usuarios.service';
import { CreatePromotorComponent } from '../create-promotor/create-promotor.component';

@Component({
  selector: 'app-create-restaurante',
  templateUrl: './create-restaurante.component.html',
  styleUrls: ['./create-restaurante.component.scss']
})
export class CreateRestauranteComponent {

  public usuarios: any;
  public promotorForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),

    postal_code: new FormControl('', Validators.required),

    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    floor: new FormControl('', Validators.required),

    license: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    waiters: new FormControl('', Validators.required),
    minPeople: new FormControl('', Validators.required),
    maxPeople: new FormControl('', Validators.required),
    pricePerPerson: new FormControl('', Validators.required),

  });
  constructor(
    public dialogRef: MatDialogRef<CreateRestauranteComponent>, private usuariosService: UsuariosService, private loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    if (this.data) {
      this.promotorForm = new FormGroup({
        city: new FormControl(''),
    
        postal_code: new FormControl(''),
    
        street: new FormControl(''),
        number: new FormControl(''),
        floor: new FormControl(''),
    
        license: new FormControl(this.data.license, Validators.required),
        name: new FormControl(this.data.name, Validators.required),
        waiters: new FormControl(this.data.waiters, Validators.required),
        minPeople: new FormControl(this.data.minPeople, Validators.required),
        maxPeople: new FormControl(this.data.maxPeople, Validators.required),
        pricePerPerson: new FormControl(this.data.pricePerPerson, Validators.required),
    
      });

    }


  }

  cerrar() {
    this.dialogRef.close();
  }

  crear() {
    if (this.promotorForm.valid) {
      this.dialogRef.close(this.promotorForm);
    }
  }
}
