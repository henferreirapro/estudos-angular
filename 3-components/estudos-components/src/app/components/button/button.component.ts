import { Component } from "@angular/core";

@Component({
  selector: "my-button",
  templateUrl: "./button.component.html",
  styleUrls: ["button.component.css"]
})

export class ButtonComponent {
  buttonText: string = "ACESSAR";
  buttonNumber: number = 2;
  buttonList: string[] = ["VENDER", "COMPRAR"];
  buttonObject = {
    label: "Adicionar ao Carrinho",
  };

}
