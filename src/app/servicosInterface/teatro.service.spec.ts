/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeatroService } from './teatro.service';

describe('Service: Teatro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeatroService]
    });
  });

  it('should ...', inject([TeatroService], (service: TeatroService) => {
    expect(service).toBeTruthy();
  }));
});
