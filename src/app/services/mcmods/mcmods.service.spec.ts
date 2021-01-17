import { TestBed } from '@angular/core/testing';

import { McmodsService } from './mcmods.service';

describe('McmodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McmodsService = TestBed.get(McmodsService);
    expect(service).toBeTruthy();
  });
  
  it('should return values', () => {
    const service: McmodsService = TestBed.get(McmodsService);
    expect(service.getMods()).toBeTruthy();
  });
});
