import { TestBed } from '@angular/core/testing';

import { SuccessfullyOrderService } from './successfully-order.service';

describe('SuccessfullyOrderService', () => {
  let service: SuccessfullyOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessfullyOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
