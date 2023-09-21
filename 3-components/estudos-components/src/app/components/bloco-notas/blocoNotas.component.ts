import { Component } from "@angular/core";

@Component({
  selector: "meu-bloco-notas",
  templateUrl: "./blocoNotas.component.html",
  styleUrls: ["./blocoNotas.component.css"]
})

export class BlocoNotasComponent {
  placeholder: string = "texto do nosso TS";

  // Style Binding
  corFundo: string = "rgb(164, 192, 196)";
}