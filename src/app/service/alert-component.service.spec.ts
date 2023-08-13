import { TestBed } from '@angular/core/testing';

import { AlertComponentService } from './alert-component.service';

describe('AlertComponentService', () => {
  let service: AlertComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
