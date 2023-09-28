import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Propriedade para a mensagem que irá aparecer na tag P do component
  @Input() nomeCard: string = "";


}
