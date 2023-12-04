import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurantePromotorComponent } from './create-restaurante-promotor.component';

describe('CreateRestaurantePromotorComponent', () => {
  let component: CreateRestaurantePromotorComponent;
  let fixture: ComponentFixture<CreateRestaurantePromotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRestaurantePromotorComponent]
    });
    fixture = TestBed.createComponent(CreateRestaurantePromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
