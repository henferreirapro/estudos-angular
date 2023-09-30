import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  
  // Propriedade para a mensagem que irá aparecer na tag P do component
  @Input() nomeCard: string = "";

  // Lista para o ngFor
  produtos: string[] = [];
  
  constructor() {
    this.produtos = [
      "Monitor",
      "CPU",
      "Teclado",
      "Mouse"
    ]
  }


  // Add reatividade ao nosso componente
  adicionar(){
    // .push adiciona um item ao final da lista.
    this.produtos.push("Novo Produto");
  }

  remover(){
    // .pop remove o ultimo item da lista.
    this.produtos.pop()
  }

}
