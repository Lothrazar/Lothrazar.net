import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
// auto format in IDEA is broken now
@NgModule({
  declarations: [],
  imports: [MatSliderModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatCardModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule],
  exports: [MatSliderModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatCardModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule]
})
export class MaterialModule { }
