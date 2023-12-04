import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromotorComponent } from './create-promotor.component';

describe('CreatePromotorComponent', () => {
  let component: CreatePromotorComponent;
  let fixture: ComponentFixture<CreatePromotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePromotorComponent]
    });
    fixture = TestBed.createComponent(CreatePromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
