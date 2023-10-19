import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-conteudo',
  templateUrl: './card-conteudo.component.html',
  styleUrls: ['./card-conteudo.component.css']
})
export class CardConteudoComponent {
  constructor(private dadosDaRota: ActivatedRoute) {

    // Recuperando dados usando o params
    this.dadosDaRota.params.subscribe(
      response => console.log(response)
    )

    // Recuperando dados usando QueryParams
    this.dadosDaRota.queryParams.subscribe(
      res => console.log(res)
    )
  }

}
