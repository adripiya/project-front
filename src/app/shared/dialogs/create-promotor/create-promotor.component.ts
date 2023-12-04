import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/providers/login/login.service';
import { UsuariosService } from 'src/app/core/providers/usuarios/usuarios.service';

@Component({
  selector: 'app-create-promotor',
  templateUrl: './create-promotor.component.html',
  styleUrls: ['./create-promotor.component.scss']
})
export class CreatePromotorComponent {
  

  public usuarios: any;
  public promotorForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),

    postal_code: new FormControl('', Validators.required),

    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    floor: new FormControl('', Validators.required),


    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    nif: new FormControl('', Validators.required),

    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),

  });
  constructor(
    public dialogRef: MatDialogRef<CreatePromotorComponent>, private usuariosService: UsuariosService, private loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    if(this.data) {
      this.promotorForm = new FormGroup({
        city: new FormControl(''),
    
        postal_code: new FormControl(''),
    
        street: new FormControl(''),
        number: new FormControl(''),
        floor: new FormControl(''),
    
    
        name: new FormControl(''),
        lastName: new FormControl(''),
        nif: new FormControl(''),
    
        email: new FormControl(this.data.email, Validators.required),
        phoneNumber: new FormControl(this.data.phoneNumber, Validators.required),
      });

    }


  }

  cerrar() {
    this.dialogRef.close();
  }

  crear() {
    if(this.promotorForm.valid){
      this.dialogRef.close(this.promotorForm);
    }
  }
}
