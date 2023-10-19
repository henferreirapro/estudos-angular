import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/index/home/home.component';
import { CardConteudoComponent } from './pages/portifolio/card-conteudo/card-conteudo.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full" },
  {path: "portifolio", component: CardConteudoComponent, pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
