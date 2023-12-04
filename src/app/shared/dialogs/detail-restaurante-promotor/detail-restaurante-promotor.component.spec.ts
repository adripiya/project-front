import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestaurantePromotorComponent } from './detail-restaurante-promotor.component';

describe('DetailRestaurantePromotorComponent', () => {
  let component: DetailRestaurantePromotorComponent;
  let fixture: ComponentFixture<DetailRestaurantePromotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRestaurantePromotorComponent]
    });
    fixture = TestBed.createComponent(DetailRestaurantePromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
