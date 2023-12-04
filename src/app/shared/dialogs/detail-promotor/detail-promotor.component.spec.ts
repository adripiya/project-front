import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPromotorComponent } from './detail-promotor.component';

describe('DetailPromotorComponent', () => {
  let component: DetailPromotorComponent;
  let fixture: ComponentFixture<DetailPromotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPromotorComponent]
    });
    fixture = TestBed.createComponent(DetailPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
