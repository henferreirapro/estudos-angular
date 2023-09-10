class TituloProps extends HTMLElement {
  constructor() {
    super();

    // criando a sombra
    const shadow = this.attachShadow({mode: "open"});

    // Base do component
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

    // base do estilo
    const style = document.createElement("style");
    style.textContent = `
    h1{
      color: red;
    }`

    // enviando para a shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style)


  }
}

customElements.define("titulo-props", TituloProps);
