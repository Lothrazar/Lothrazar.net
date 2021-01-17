import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MinecraftPageComponent } from './minecraft.component';

describe('MinecraftComponent', () => {
  let component: MinecraftPageComponent;
  let fixture: ComponentFixture<MinecraftPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinecraftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecraftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
