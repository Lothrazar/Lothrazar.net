import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetCurseComponent } from './widget-curse.component';

describe('WidgetCurseComponent', () => {
  let component: WidgetCurseComponent;
  let fixture: ComponentFixture<WidgetCurseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
