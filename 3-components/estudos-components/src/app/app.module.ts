import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ButtonComponent } from './components/button/button.component';
import { MeuParagrafo } from './components/paragrafo/paragrafo.component';
import { BlocoNotasComponent } from './components/bloco-notas/blocoNotas.component'


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    MeuParagrafo,
    BlocoNotasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
