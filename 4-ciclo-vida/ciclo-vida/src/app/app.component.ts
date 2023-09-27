import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclo-vida';

  isAliveContador: boolean = true;
  msgBtn: string = "Finalizar Contador";


  mudarEstado():void {
    this.isAliveContador = false;
    
  }
}