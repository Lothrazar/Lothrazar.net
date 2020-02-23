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

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    McmodComponent,
    IconGithubComponent,
    WidgetCurseComponent,
    WidgetGithubComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [McmodsService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
