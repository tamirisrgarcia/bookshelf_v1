import { TestBed } from '@angular/core/testing';

import { BrasilEMundoService } from './brasil-emundo.service';

describe('BrasilEMundoService', () => {
  let service: BrasilEMundoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrasilEMundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
