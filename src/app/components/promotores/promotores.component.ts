import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotores',
  templateUrl: './promotores.component.html',
  styleUrls: ['./promotores.component.scss']
})

export class PromotoresComponent implements OnInit {
  @Input() minTab?: any;

  ngOnInit(): void {
    
  }



}
