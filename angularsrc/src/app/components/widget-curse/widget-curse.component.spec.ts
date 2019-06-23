import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCurseComponent } from './widget-curse.component';

describe('WidgetCurseComponent', () => {
  let component: WidgetCurseComponent;
  let fixture: ComponentFixture<WidgetCurseComponent>;

  beforeEach(async(() => {
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
