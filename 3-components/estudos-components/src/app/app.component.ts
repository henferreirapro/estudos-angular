import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudos-components';

  paragrafoLabel: string = "Salve";

  textoLabel: string = "Eu sou um Exemplo de texto Dinamico hehe";
  
  // Parametros para o button.component
  buttonText: string = "Olá Amigo";
  objectButton = {
    adicionar: "ADICIONAR AO CARRINHO",
    remover: "REMOVER DO CARRINHO"
  } 
}
