import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent {
  @Input() nomeCard: string = "";

  @Input() tipoUsuario: string = "comum";

}
