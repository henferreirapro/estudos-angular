import { Component, 
  OnInit,
  DoCheck, 
  AfterContentInit, 
  AfterViewInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  OnDestroy} from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export default class ContadorComponent implements
  OnInit,
  DoCheck, 
  AfterContentInit, 
  AfterViewInit, 
  AfterContentChecked, 
  AfterViewChecked,
  OnDestroy {

  constructor() { }
  
  // variavel de contagem do contador
  valorContador: number = 0;
  
  // função que add valor
  adicionarValor() {
    this.valorContador += 1;
  }
  
  // função que diminui valor
  removerValor() {
    this.valorContador -= 1;
  }
  
  
  // Executado apenas quando o component é iniciado
  ngOnInit(): void {
    console.log(`OnInit iniciado - Seu componente foi criado 😎 \nO contador esta no número ${this.valorContador}.\n `)
    
  }
  
  // Executado sempre que houver uma alteração no component
  ngDoCheck(): void {
    console.log(`DoCheck invocado ✌️😜 \nContador foi alterado para o número ${this.valorContador}.\n `);
  }
  
  // Executado só uma vez, quando o conteudo da pagina é iniciado
  ngAfterContentInit(): void {
    console.log(`AfterContentInit iniciado 🙌 \nO conteudo da sua pagina foi executado com sucesso hehe 😉\n `);
  }
  
  // Executado só uma vez, depois que a view é executada
  ngAfterViewInit(): void {
    console.log(`AfterViewInit  também iniciado😘👌 \nVocê já consegui visualizar seu conteudo. \n `);
  }
  
  // Executado após alguma alteração no conteudo
  ngAfterContentChecked(): void {
    console.log(`AfterContentChecked Chamado 🤨 \nAlgum item foi alterado no nosso conteudo 🤔 \n `);
  }
  
  // Executado após alguma alteração na view
  ngAfterViewChecked(): void {
    console.log(`AfterViewChecked invocadaço 🫡 \nRelaxa AfterContent, já vi aqui que foi alterado o contador, \nagora você já pode visualizar que o contador esta no número ${this.valorContador}. \n `);
  }
  
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
  
}
