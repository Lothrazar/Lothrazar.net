import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecraftPageComponent } from './minecraft.component';

describe('MinecraftComponent', () => {
  let component: MinecraftPageComponent;
  let fixture: ComponentFixture<MinecraftPageComponent>;

  beforeEach(async(() => {
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
