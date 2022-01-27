/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpreendedorismoService } from './empreendedorismo.service';

describe('Service: Empreendedorismo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpreendedorismoService]
    });
  });

  it('should ...', inject([EmpreendedorismoService], (service: EmpreendedorismoService) => {
    expect(service).toBeTruthy();
  }));
});
