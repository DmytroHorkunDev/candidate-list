import { TestBed } from '@angular/core/testing';

import { CandidatesResolver } from './candidates.resolver';

describe('CandidatesResolver', () => {
  let resolver: CandidatesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CandidatesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
