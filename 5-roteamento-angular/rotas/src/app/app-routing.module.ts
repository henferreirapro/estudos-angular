import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/index/home/home.component';
import { CardConteudoComponent } from './pages/portifolio/card-conteudo/card-conteudo.component';

const routes: Routes = [
  // rota para a pagina inicial do nosso projeto
  {path: "", component: HomeComponent, pathMatch: "full" },

  // rota para a pagina de portifolios do nosso projeto
  {path: "portifolio", component: CardConteudoComponent,children: [
    // filhos da path portifolio
    {path: ":id", component: CardConteudoComponent},
    {path: ":id/:user", component: CardConteudoComponent}
  ]},
  
  // rota para a pagina de portifolios más com id para recuperar dados 
  {path: "portifolio/:id", component: CardConteudoComponent},
  
  // rota coringa caso seja digitado uma rota inexistente
  {path: "**", redirectTo: ""}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
