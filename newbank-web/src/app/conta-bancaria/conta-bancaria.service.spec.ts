import { TestBed } from '@angular/core/testing';

import { ContaBancariaService } from './conta-bancaria.service';

describe('ContaBancariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaBancariaService = TestBed.get(ContaBancariaService);
    expect(service).toBeTruthy();
  });
});
