import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UnsplashService } from 'src/app/core/providers/unsplash.service';
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public id: string = 'coche';
  public response: any;



  public inputKey: FormControl = new FormControl;

  private _unsubscribe: Subject<void> = new Subject;
  constructor() { }



  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }
}
