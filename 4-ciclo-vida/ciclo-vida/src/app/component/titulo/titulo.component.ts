import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})

export class TituloComponent implements OnInit, OnChanges {

  msgTitulo: string = "Salve Meu Povo 😜";
  msgParagrafo: string = "";
  @Input() msgAlternativa: string = "";

  constructor() { }
  
  ngOnInit(): void {
    // Mensagem que irá ser renderizada na tag paragrafo do nosso HTML.
    this.msgParagrafo = "OnInit usado. \nSHAZAM garaio ✌️😊 \nEu sou o nascimento do Titulo Component 😎";
    
    // Mensagem que irá aparecer no console do navegador.
    console.log(this.msgParagrafo)
  }
  
  ngOnChanges(): void {
    console.log("OnChanges usado");
  }
}
