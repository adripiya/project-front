import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { UnsplashService } from 'src/app/core/providers/unsplash.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public id: string = '7GeprSfVqLQ';
  public response: any;
  public location: any;

  private _unsubscribe: Subject<void> = new Subject;
  
  constructor(
    private _route: ActivatedRoute,
    private unsplashService: UnsplashService,) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getDetail();
    })



  }


  public getDetail(): void {
    this.unsplashService.getDetailImg(this.id).subscribe((ans: any) => {
      this.response = ans;
      if (ans?.location?.position) {
        this.location = ans?.location?.position
      }
    })
  }

  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }
}
