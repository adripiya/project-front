import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/providers/events/events.service';
import { Evento } from 'src/app/interfaces/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() minTab?: any;
  public response: Array<Evento> = [];
  public responseShort: Array<Evento> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public displayedColumns: string[] = ['id', 'status', 'fecha', 'asistentes', 'precio', 'mesas'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    if(this.minTab) {
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
}
