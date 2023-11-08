import { TestBed } from '@angular/core/testing';

import { PromotoresService } from './promotores.service';

describe('PromotoresService', () => {
  let service: PromotoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
