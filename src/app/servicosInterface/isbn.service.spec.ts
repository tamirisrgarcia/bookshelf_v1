/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsbnService } from './isbn.service';

describe('Service: Isbn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsbnService]
    });
  });

  it('should ...', inject([IsbnService], (service: IsbnService) => {
    expect(service).toBeTruthy();
  }));
});
