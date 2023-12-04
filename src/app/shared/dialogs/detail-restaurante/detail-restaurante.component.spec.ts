import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestauranteComponent } from './detail-restaurante.component';

describe('DetailRestauranteComponent', () => {
  let component: DetailRestauranteComponent;
  let fixture: ComponentFixture<DetailRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRestauranteComponent]
    });
    fixture = TestBed.createComponent(DetailRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
