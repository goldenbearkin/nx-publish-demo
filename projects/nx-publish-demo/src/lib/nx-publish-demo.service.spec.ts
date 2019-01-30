import { TestBed } from '@angular/core/testing';

import { NxPublishDemoService } from './nx-publish-demo.service';

describe('NxPublishDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxPublishDemoService = TestBed.get(NxPublishDemoService);
    expect(service).toBeTruthy();
  });
});
