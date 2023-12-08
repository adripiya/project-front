
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/core/providers/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  protected show: boolean = true;
  constructor(protected loginService: LoginService,
    protected router: Router ) {}
    

    public logOut(): void {
      this.loginService.logOut().subscribe((result: any) => {
        this.loginService.isLogin = false;
        this.loginService.userId = '';
        this.loginService.rol = '';
        this.loginService.userName = '';
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("rol");
        
        this.router.navigate(['login']);
      })
    }
}
