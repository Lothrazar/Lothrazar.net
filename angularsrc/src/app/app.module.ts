import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { McmodComponent } from './components/mcmod/mcmod.component';
import { McmodsService } from './services/mcmods/mcmods.service';

@NgModule({
  declarations: [
    AppComponent,
    McmodComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [McmodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
