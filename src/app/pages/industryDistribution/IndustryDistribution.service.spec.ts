import { TestBed, inject } from '@angular/core/testing';

import { IndustryDistributionService } from './IndustryDistribution.service';

describe('IndustryDistributuonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustryDistributionService]
    });
  });

  it('should be created', inject([IndustryDistributionService], (service: IndustryDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
