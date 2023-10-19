import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/index/home/home.component';
import { CardConteudoComponent } from './pages/portifolio/card-conteudo/card-conteudo.component';

const routes: Routes = [
  // rota para a pagina inicial do nosso projeto
  {path: "", component: HomeComponent, pathMatch: "full" },

  // rota para a pagina de portifolios do nosso projeto
  {path: "portifolio/:id", component: CardConteudoComponent, pathMatch: "prefix"},
  
  // rota coringa caso seja digitado uma rota inexistente
  {path: "**", redirectTo: ""}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
