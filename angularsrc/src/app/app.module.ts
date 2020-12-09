import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { McmodComponent } from './components/tile-minecraftmod/mcmod.component';
import { McmodsService } from './services/mcmods/mcmods.service';
import { WidgetCurseComponent } from './components/widget-curse/widget-curse.component';
import { WidgetGithubComponent } from './components/widget-github/widget-github.component';
import { GithubService } from './services/github/github.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/page-home/homepage.component';
import { MinecraftPageComponent } from './components/page-minecraft/minecraft.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { McmodpageComponent } from './components/page-minecraftmod/mcmodpage.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/minecraft?version=1.16',
    pathMatch: 'full'
  },
  { path: 'home', component:HomepageComponent },
  { path: 'minecraft', component: MinecraftPageComponent },
  // { path: 'minecraft/mod/:slug', component: McmodpageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    McmodComponent,
    WidgetCurseComponent,
    WidgetGithubComponent,
    PageNotFoundComponent,
    HomepageComponent,
    MinecraftPageComponent,
    HeaderComponent,
    FooterComponent,
    McmodpageComponent
  ],
  imports: [
    MaterialModule,
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
