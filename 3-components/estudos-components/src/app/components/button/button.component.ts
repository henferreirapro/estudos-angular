import { Component, Input } from "@angular/core";

@Component({
  selector: "my-button",
  templateUrl: "./button.component.html",
  styleUrls: ["button.component.css"]
})

export class ButtonComponent {
  // add input para texto dinamico - Data Binding
  @Input() msgButton: string = "";

  // Parametros
  buttonText: string = "ACESSAR";
  buttonNumber: number = 2;
  buttonList: string[] = ["VENDER", "COMPRAR"];
  buttonObject = {
    label: "Adicionar ao Carrinho",
  };

  // Add evento
  eventoAlerta() {
    alert(this.msgButton);
  }
}
