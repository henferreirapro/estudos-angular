import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardConteudoComponent } from './card-conteudo/card-conteudo.component';



@NgModule({
  declarations: [
    CardConteudoComponent
  ],
  exports: [
    CardConteudoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortifolioModule { }
