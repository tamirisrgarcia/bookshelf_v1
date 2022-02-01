/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaginaUsuarioService } from './pagina-usuario.service';

describe('Service: PaginaUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginaUsuarioService]
    });
  });

  it('should ...', inject([PaginaUsuarioService], (service: PaginaUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
