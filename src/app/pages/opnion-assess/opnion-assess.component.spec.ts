import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpnionAssessComponent } from './opnion-assess.component';

describe('OpnionAssessComponent', () => {
  let component: OpnionAssessComponent;
  let fixture: ComponentFixture<OpnionAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpnionAssessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpnionAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
