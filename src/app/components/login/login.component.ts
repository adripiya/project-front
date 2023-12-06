import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { DireccionService } from 'src/app/core/providers/direccion/direccion.service';
import { LoginService } from 'src/app/core/providers/login/login.service';
import { PeopleService } from 'src/app/core/providers/people/people.service';
import { UsuariosService } from 'src/app/core/providers/usuarios/usuarios.service';
import { CreateUsuarioComponent } from 'src/app/shared/dialogs/create-usuario/create-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', Validators.required),
  });
  public usuarios: any;
  public postal_code_id: any;
  public ciudad_id: any;
  public direccion_id: any;
  public person_id: any;
  public promotor_id: any;
  public newUsuarios: any;


  constructor(private usuariosService: UsuariosService, protected loginService: LoginService, private direccionService: DireccionService,
    private peopleService: PeopleService, private router: Router,  public dialog: MatDialog) {}

  onSubmit() {
  this.loginFunction();
  }

  loginFunction(): void {
    const query : any = {
      email: this.loginForm.value['user'],
      password: this.loginForm.value['pass']
    }
    this.loginService.getLogin(query).subscribe((user: any) => {
      if(this.loginService.isLogin) {
        this.loginService.rol = user.user.role;
        this.loginService.userId = user.user.id;
        this.loginService.userName = user.user.email
        sessionStorage.setItem('rol', user.user.role);
        sessionStorage.setItem('userId', user.user.id);
        sessionStorage.setItem('userName', user.user.email);
        sessionStorage.setItem('token', user.token);
        this.router.navigate(['main']);
      }
    })
  }

  createNewAcount(): void {
    const send: any = {
      externalUser : true
    }
    const dialogRef = this.dialog.open(CreateUsuarioComponent, { data: send });

    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form) {
    const newUser: any = {
      'email': form.value.email,
      'password': form.value.password,
    }
    this.usuariosService.registerUsuario(newUser).subscribe((result: any) => {
      const query : any = {
        email: form.value.email,
        password: form.value.password
      }
      this.loginService.getLogin(query).subscribe((user: any) => {
        if(this.loginService.isLogin) {
          this.loginService.rol = user.user.role;
          this.loginService.userId = user.user.id;
          this.loginService.userName = user.user.email
          sessionStorage.setItem('rol', user.user.role);
          sessionStorage.setItem('userName', user.user.email);
          sessionStorage.setItem('userId', user.user.id);
          sessionStorage.setItem('token', user.token);
          this.controlCodigoPostal(form, user);
        }
      })
    })
  }})
  }
  
  public controlCodigoPostal(form: any, user: any): void {
    this.direccionService.getCodigoPostal().subscribe((postalCodes: any) => {
      postalCodes.forEach((PC: any) => {
        if(PC.postal_code === form.value.postal_code) {
            this.postal_code_id = PC.id
        }
      });
      if(!this.postal_code_id) {
        const send = {
          'postal_code': form.value.postal_code,
        }
        this.direccionService.postCodigoPostal(send).subscribe((data: any) => {
          this.postal_code_id = data.data.id;
        })      
      }
      this.controlCity(form, user);
    })

  }

  public controlCity(form: any, user: any): void {
    this.direccionService.getCiudades().subscribe((ciudades: any) => {
      ciudades.forEach((ciudad: any) => {
        if(ciudad.city.toLowerCase() === form.value.city.toLowerCase()) {
            this.ciudad_id = ciudad.id
        }
      });
      if(!this.ciudad_id) {
        const send = {
          'city': form.value.city
        }
        this.direccionService.postCiudades(send).subscribe((data: any) => {
          this.ciudad_id = data.data.id;
        })      
      }
      this.controlDireccion(form, user);
    })

  }

  public controlDireccion(form: any, user: any): void {
    const send = {
      'street': form.value.street,
      'number': form.value.number,
      'floor': form.value.floor,
      'postal_code_id': this.postal_code_id,
      'city_id': this.ciudad_id,
    }
    this.direccionService.postDireccion(send).subscribe((data: any) => {
      this.direccion_id = data.data.id;
      this.controlPeople(form, user);
    })
  }

  public controlPeople(form: any, user: any): void {
    const send: any = {
      'name': form.value.name,
      'lastName': form.value.lastName,
      'nif': form.value.nif,
      'direction_id': this.direccion_id,
    }
    this.peopleService.postPeople(send).subscribe((data: any) => {
      this.person_id = data.data.id;
      this.controlUser(form, user);
    })
  }

  public controlUser(form: any, user: any): void {
    const newUser: any = {
      'email': form.value.email,
      'password': form.value.password,
      "role": user.user.role,
      "person_id": this.person_id,
    }
    this.usuariosService.putUsuario(newUser, user.user.id).subscribe((result: any) => {
      this.router.navigate(['users']);
    })
  }
}
