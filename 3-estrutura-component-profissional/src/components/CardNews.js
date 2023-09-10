class CardNews extends HTMLElement {
  constructor() {
    super();

    // Criando a nossa sombra
    const shadow = this.attachShadow({ mode: "open" })

    // Declarando/Enviando para a Shadow
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());

  }

  // Construção do component - HTML
  build() {
    // Criando as tags
      const componentRoot = document.createElement("section");
      const cardImg = document.createElement("img");
      const cardArticle = document.createElement("article");
      const cardTitulo = document.createElement("h2");
      const cardParagrafo = document.createElement("p");
      const cardAutor = document.createElement("span");
    
    
    // Denominando os filhos de cada Tag
      componentRoot.appendChild(cardImg); // Filho do componentRoot
      componentRoot.appendChild(cardArticle); // Filho do componentRoot
      
      cardArticle.appendChild(cardTitulo); // Filho do cardArticle
      cardArticle.appendChild(cardParagrafo); // Filho do cardArticle
      cardArticle.appendChild(cardAutor)
    
    // Setando os atributos das tags
      componentRoot.setAttribute("class", "card") // Classe do componentRoot

      cardImg.src = this.getAttribute("imagem") || "src/img/img-exemplo.png";
      cardImg.alt = "Imagem de Exemplo";
      
      cardTitulo.textContent = this.getAttribute("titulo");
      cardParagrafo.textContent = this.getAttribute("paragrafo");
      cardAutor.textContent = `By ${this.getAttribute("Autor") || "Autor Anonimo"}`;
    
       
    // Retornando nosso component
      return componentRoot;
  }

  // Estilo do component - CSS
  style() {
    const style = document.createElement("style");
    style.textContent = `
    * {
      padding: 0;
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
      
    main {
      display: flex;
      flex-direction: column;
    }
    .card {
      display: flex;
      position: relative;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    
    }
    
    img {
      width: 300px;
      border-radius: 1em;
      margin: 0.8rem;
      flex-direction: column;
    }
    
    h2 {
      margin: 0.5rem 1rem;
      font-size: 1.6rem;
      font-weight: bolder;
      align-self: auto;
    }
    
    p {
      margin: .8rem;
      width: 400px;
      text-align: justify;
    }

    span {
      font-weight: bolder;
      align-items: right;
      margin: 0 0.8rem;
    }
    
    
    @media (max-width: 640px) {
      .card {
        display: flex;
        flex-direction: column;
      }
    
    
      article {
        width: 300px;
        margin: 0;
      }
      h2 {
        font-size: 1.2rem;
        margin: 0rem .3rem;    
      }
    
      p {
        width: 280px;
        margin: .625rem;
      }
    }`;

    // Retornando o estilo da pagina
    return style;
  }
}

customElements.define("card-news", CardNews);