
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected show: boolean = true;
  constructor(
    protected router: Router ) {}
    

    ngOnInit(): void {
    //console.log(this.router.url);
      
    }

    public click(): void {
      console.log(this.router.url);
    }
}
