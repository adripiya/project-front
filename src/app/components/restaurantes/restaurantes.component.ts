import { Component, Input } from '@angular/core';
import { PromotoresService } from 'src/app/core/providers/promotores/promotores.service';
import { RestaurantesService } from 'src/app/core/providers/restaurantes/restaurantes.service';
import { Promotor } from 'src/app/interfaces/promotor.model';
import { Restaurante } from 'src/app/interfaces/restaurante.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent {
  @Input() minTab?: any;
  public response: Array<Restaurante> = [];
  public responseShort: Array<Restaurante> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public displayedColumns: string[] = ['id', 'calle', 'numero', 'promotorId', 'descripcion'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private restaurantesService: RestaurantesService) { }
  


  ngOnInit(): void {
    if(this.minTab) {
      this.restaurantesService.getRestaurantes().subscribe((response: any) => {
        console.log(response);
        this.responseShort = response;
        this.responseShort.length = 3;
      })
    } else {
      this.restaurantesService.getRestaurantes().subscribe((response: any) => {
        this.response = response;
      })

    }
    
  }

  public addRestaurante(): void {
    
  }
}
