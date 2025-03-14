import { TestBed } from '@angular/core/testing';

import { TestserviseService } from './testservise.service';

describe('TestserviseService', () => {
  let service: TestserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
