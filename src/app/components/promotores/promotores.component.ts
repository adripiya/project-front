import { Component, Input, OnInit } from '@angular/core';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { Promotor } from 'src/app/interfaces/promotor.model';

@Component({
  selector: 'app-promotores',
  templateUrl: './promotores.component.html',
  styleUrls: ['./promotores.component.scss']
})

export class PromotoresComponent implements OnInit {
  @Input() minTab?: any;
  public response: Array<Promotor> = [];
  public responseShort: Array<Promotor> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public displayedColumns: string[] = ['id', 'nombre', 'ubicacion', 'maxInvitados', 'minInvitados', 'telefono'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private promotoresService: PromotoresService) { }
  


  ngOnInit(): void {
    if(this.minTab) {
      this.promotoresService.getPromotores().subscribe((response: any) => {
        this.responseShort = response;
        this.responseShort.length = 3;
      })
    } else {
      this.promotoresService.getPromotores().subscribe((response: any) => {
        this.response = response;
      })

    }
    
  }



}
