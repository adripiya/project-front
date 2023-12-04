import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestauranteComponent } from './create-restaurante.component';

describe('CreateRestauranteComponent', () => {
  let component: CreateRestauranteComponent;
  let fixture: ComponentFixture<CreateRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRestauranteComponent]
    });
    fixture = TestBed.createComponent(CreateRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
