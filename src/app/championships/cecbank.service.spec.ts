import { TestBed } from '@angular/core/testing';

import { CecbankService } from './cecbank.service';

describe('CecbankService', () => {
  let service: CecbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CecbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
