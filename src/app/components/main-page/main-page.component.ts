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

  public length = 0;
  public lowValue: number = 0;
  public itemsP: number = 10;
  public pageSize: number = 10;
  public page: number = 0;

  public inputKey: FormControl = new FormControl;

  private _unsubscribe: Subject<void> = new Subject;
  constructor(
    private unsplashService: UnsplashService) { }


  public callServicePage(page?: number): void {
    if(!page) {
        this.length = 0;
      }
    this.unsplashService.getListImgPages(this.inputKey.value, page? page : this.page).subscribe((ans: any) => {
      this.response = ans.results;
      if(!page) {
        this.length = ans.total_pages;
      }
    })
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.itemsP = this.lowValue + event.pageSize;
    this.callServicePage(event.pageIndex);
    return event;
  }

  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }
}
