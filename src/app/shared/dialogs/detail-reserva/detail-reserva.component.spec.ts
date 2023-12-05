import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReservaComponent } from './detail-reserva.component';

describe('DetailReservaComponent', () => {
  let component: DetailReservaComponent;
  let fixture: ComponentFixture<DetailReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReservaComponent]
    });
    fixture = TestBed.createComponent(DetailReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
