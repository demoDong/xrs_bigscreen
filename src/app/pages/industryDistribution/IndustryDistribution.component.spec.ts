import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryDistributionComponent } from './IndustryDistribution.component';

describe('IndustryDistributuonComponent', () => {
  let component: IndustryDistributionComponent;
  let fixture: ComponentFixture<IndustryDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
