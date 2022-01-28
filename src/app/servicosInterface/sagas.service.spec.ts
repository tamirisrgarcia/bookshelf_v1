/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SagasService } from './sagas.service';

describe('Service: Sagas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SagasService]
    });
  });

  it('should ...', inject([SagasService], (service: SagasService) => {
    expect(service).toBeTruthy();
  }));
});
