import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-diretivas';

  // Mensagem que irá aparecer na tag P do component
  nomeCard: string = "";
  

  // ngIf com data binding
  isAliveCard: boolean = true;


  // ngIf com ng template
  isAliveNgTemplate: boolean = true;

  // Tipo de Usuario do Switch
  tipoUsuario: string = "";

}
