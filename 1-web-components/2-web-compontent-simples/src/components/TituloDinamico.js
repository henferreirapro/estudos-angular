class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    // Criando a Sombra
    const shadow = this.attachShadow({mode: "open"});

    // Base do component
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Henrique";

    // Estilo do component
    const style = document.createElement("style");
    style.textContent = `
    h1{
      color: green;
    }`

    // enviar para a shadow
    shadow.appendChild(componentRoot); //anexando o component
    shadow.appendChild(style); // anexando o estilo do component

  }
}

customElements.define('titulo-dinamico', TituloDinamico);