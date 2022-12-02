import { TestBed } from '@angular/core/testing';

import { IndumentariasCarritoService } from './indumentarias-carrito.service';

describe('IndumentariasCarritoService', () => {
  let service: IndumentariasCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndumentariasCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
