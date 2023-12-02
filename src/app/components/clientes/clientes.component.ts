import { Component, Input } from '@angular/core';
import { ClientesService } from 'src/app/core/providers/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  @Input() minTab?: any;
  public response: Array<any> = [];
  public responseShort: Array<any> = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public length: number = 0;
  public displayedColumns: string[] = ['id', 'nombre', 'dni', 'telefono', 'correo', 'domicilio'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private clientesService: ClientesService) { }
  


  ngOnInit(): void {
    if(this.minTab) {
      this.clientesService.getClients().subscribe((response: any) => {
        this.responseShort = response;
        this.responseShort.length = 3;
      })
    } else {
      this.clientesService.getClients().subscribe((response: any) => {
        this.response = response;
      })

    }
    
  }
}
