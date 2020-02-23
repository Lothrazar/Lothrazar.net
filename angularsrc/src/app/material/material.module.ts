import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule,
 MatButtonModule,
 MatCheckboxModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
// auto format in IDEA is broken now
@NgModule({
  declarations: [],
  imports: [MatSliderModule,
                        MatButtonModule,
                        MatCheckboxModule,
                         MatCardModule,
                         MatMenuModule,
                         MatIconModule,
                         MatToolbarModule],
  exports: [MatSliderModule,
                        MatButtonModule,
                        MatCheckboxModule,
                         MatCardModule,
                         MatMenuModule,
                         MatIconModule,
                         MatToolbarModule]
})
export class MaterialModule { }
