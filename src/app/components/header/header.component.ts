
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/core/providers/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected show: boolean = true;
  constructor(protected loginService: LoginService,
    protected router: Router ) {}
    

    ngOnInit(): void {
    //console.log(this.router.url);
      
    }

    public click(): void {
      console.log(this.router.url);
    }

    public logOut(): void {
      this.loginService.isLogin = false;
      this.loginService.userId = '';
      this.loginService.rol = '';
      this.loginService.userName = '';
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("rol");
      this.router.navigate(['login']);
    }
}
