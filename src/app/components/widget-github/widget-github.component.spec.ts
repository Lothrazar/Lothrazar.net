import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetGithubComponent } from './widget-github.component';

describe('WidgetGithubComponent', () => {
  let component: WidgetGithubComponent;
  let fixture: ComponentFixture<WidgetGithubComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
