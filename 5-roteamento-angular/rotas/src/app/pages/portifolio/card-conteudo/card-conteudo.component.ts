import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card-conteudo',
  templateUrl: './card-conteudo.component.html',
  styleUrls: ['./card-conteudo.component.css']
})
export class CardConteudoComponent implements OnInit, OnChanges{
  constructor(
    private dadosDaRota: ActivatedRoute,
    private navegador: Router
    ) {

    // Recuperando dados usando o params
    this.dadosDaRota.params.subscribe(
      response => console.log(response)
    )

    // Recuperando dados usando QueryParams
    this.dadosDaRota.queryParams.subscribe(
      res => console.log(res)
    )

    // add a rota para recuperar as querys do filhos/children
    this.dadosDaRota.firstChild?.params.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    
    // ira forçar o retorno para a pagina inicial depois de 5s
    setInterval( () => {
      // this.navegador.navigate(["/"])
    }, 5000)
  }

  ngOnChanges(): void { 
    setInterval( () => {
      // this.navegador.navigate(["/"])
    }, 3000)
  }


}
