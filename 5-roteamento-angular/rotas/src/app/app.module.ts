import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/index/home.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PortifolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
