import { Component, Input } from "@angular/core";


@Component({
  selector: "meu-paragrafo",
  templateUrl: "./paragrafo.component.html",
  styleUrls: ["./paragrafo.component.css"]
})


export class MeuParagrafo {
  @Input() label: string = "";
  
}