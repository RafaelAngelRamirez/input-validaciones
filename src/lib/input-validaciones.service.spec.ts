import { TestBed } from '@angular/core/testing';

import { InputValidacionesService } from './input-validaciones.service';

describe('InputValidacionesService', () => {
  let service: InputValidacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputValidacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
