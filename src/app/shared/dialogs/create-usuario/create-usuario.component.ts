import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss']
})
export class CreateUsuarioComponent {

  public isCreate: boolean = true
  public usuarios: any;
  public userForm: FormGroup = new FormGroup({
    role: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    public dialogRef: MatDialogRef<CreateUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    if (this.data) {
      this.isCreate = false;
      this.userForm = new FormGroup({
        role: new FormControl(''),
        email: new FormControl(this.data.email, Validators.required),
        password: new FormControl('', Validators.required),

        city: new FormControl('', Validators.required),

        postal_code: new FormControl('', Validators.required),
    
        street: new FormControl('', Validators.required),
        number: new FormControl('', Validators.required),
        floor: new FormControl('', Validators.required),
    
    
        name: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        nif: new FormControl('', Validators.required),
      });
    }

  }

  cerrar() {
    this.dialogRef.close();
  }

  crear() {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm);
    }
  }
}
