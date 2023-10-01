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


  // Usando Index
  removerIndex(index: number){
    // splice() remove um elemento apartir da localização desse elemento.
    this.produtos.splice(index, 1) 
    
    // Aqui digo que desejo remover o item index uma vez, por isso o número 1 ao lado.
  }
}
