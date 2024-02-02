/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiendaService } from './Tienda.service';

describe('Service: Tienda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiendaService]
    });
  });

  it('should ...', inject([TiendaService], (service: TiendaService) => {
    expect(service).toBeTruthy();
  }));
});
