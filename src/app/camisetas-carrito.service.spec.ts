import { TestBed } from '@angular/core/testing';

import { CamisetasCarritoService } from './camisetas-carrito.service';

describe('CamisetasCarritoService', () => {
  let service: CamisetasCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisetasCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
