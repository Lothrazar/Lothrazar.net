import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McmodpageComponent } from './mcmodpage.component';

describe('McmodpageComponent', () => {
  let component: McmodpageComponent;
  let fixture: ComponentFixture<McmodpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McmodpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McmodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
