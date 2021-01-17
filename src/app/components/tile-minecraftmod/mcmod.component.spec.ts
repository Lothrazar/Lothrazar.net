import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { McmodComponent } from './mcmod.component';

describe('McmodComponent', () => {
  let component: McmodComponent;
  let fixture: ComponentFixture<McmodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ McmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
