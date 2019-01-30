import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxPublishDemoComponent } from './nx-publish-demo.component';

describe('NxPublishDemoComponent', () => {
  let component: NxPublishDemoComponent;
  let fixture: ComponentFixture<NxPublishDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxPublishDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxPublishDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
