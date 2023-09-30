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
}
