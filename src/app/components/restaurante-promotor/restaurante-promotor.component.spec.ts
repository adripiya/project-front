import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantePromotorComponent } from './restaurante-promotor.component';

describe('RestaurantePromotorComponent', () => {
  let component: RestaurantePromotorComponent;
  let fixture: ComponentFixture<RestaurantePromotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantePromotorComponent]
    });
    fixture = TestBed.createComponent(RestaurantePromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
