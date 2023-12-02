import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/providers/events/events.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventsComponent } from '../../shared/dialogs/create-events/create-events.component';
import { DetailEventsComponent } from '../../shared/dialogs/detail-events/detail-events.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() minTab?: any;
  public response: Array<any> = [];
  public responseShort: Array<any> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public displayedColumns: string[] = ['id', 'status', 'fecha', 'asistentes', 'precio', 'mesas'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private eventsService: EventsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.minTab) {
      this.eventsService.getEvents().subscribe((response: any) => {
        this.responseShort = response;
        this.responseShort.length = 3;
      })
    } else {
      this.eventsService.getEvents().subscribe((response: any) => {
        this.response = response;
      })
    }
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
  }

  public addEvent(): void {
    const dialogRef = this.dialog.open(CreateEventsComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public viewEvent(id: any): void {
    const send = this.response.find((event: any) =>
      event.id === id
    )
    const dialogRef = this.dialog.open(DetailEventsComponent, { data: send });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public click(): void {
    this.eventsService.getCochesDetalle().subscribe((result: any) => {
      console.log(this.response);
    })
  }
}
