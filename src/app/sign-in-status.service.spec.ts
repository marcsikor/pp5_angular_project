import { TestBed } from '@angular/core/testing';

import { SignInStatusService } from './sign-in-status.service';

describe('SignInStatusService', () => {
  let service: SignInStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
