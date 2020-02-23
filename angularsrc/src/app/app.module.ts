import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { McmodComponent } from './components/mcmod/mcmod.component';
import { McmodsService } from './services/mcmods/mcmods.service';
import { IconGithubComponent } from './components/icon-github/icon-github.component';
import { WidgetCurseComponent } from './components/widget-curse/widget-curse.component';
import { WidgetGithubComponent } from './components/widget-github/widget-github.component';
import { GithubService } from './services/github/github.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MinecraftComponent } from './components/minecraft/minecraft.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsthmaComponent } from './components/asthma/asthma.component';
import { MatSliderModule,
 MatButtonModule,
 MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component:HomepageComponent },
  { path: 'minecraft', component: MinecraftComponent },
  { path: 'asthma', component: AsthmaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    McmodComponent,
    IconGithubComponent,
    WidgetCurseComponent,
    WidgetGithubComponent,
    PageNotFoundComponent,
    HomepageComponent,
    MinecraftComponent,
    HeaderComponent,
    FooterComponent,
    AsthmaComponent
  ],
  imports: [
    MatSliderModule,MatButtonModule, MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes//, { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [McmodsService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
