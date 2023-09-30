<h1 align="center">Usando *ngFor</h1>

  - O "**ngFor**" funciona como um laço for em qualquer linguagem, más podemos usar ele diretamente no HTML do nosso componente.

  - Com o "**ngFor**" nós podemos passar uma lista com itens para uma tag de lista no HTML e ele irá renderizar essa lista sem a necessidade de criarmos novamente a mesma estrutura por exemplo.

  - Nós também podemos usar a reatividade no "**ngFor**", assim quando algum evento fosse executado ele poderia adicionar ou excluir itens da nossa lista que esta aparecendo na nossa view.

  - Também podemos usar o ngFor com Index da lista, assim podemos saber qual item da lista desejamos usar ou até mesmo fazer alterações.

  ___
  ___
  <h3>Criando a Nossa Lista e Add Itens a Ela :</h3>
  <img src="7-diretivas/img/2-ngfor.png">

  - Na "**linha 14**" nós criamos uma lista chamada produtos sem itens.

  - na "**linha 17**" nós adicionamos dentro do nosso "**constructor**" os itens que serão adicionados a nossa lista.

  ___
  <h3>Usando o ngFor :</h3>
  <img src="7-diretivas/img/2.1-ngfor.png">

  - Na "**linha 5**" do HTML do nosso componente nós criamos uma "**Tag ul**" e dentro dela adicionamos uma "**tag li**".

  - Na "**linha 6**" dentro da nossa "**tag li**" nós chamamos o "***ngFor**" e dentro dele nós dizemos ao ngFor que a "**let item**" vai receber os itens dentro da nossa lista produto.

  - E dessa forma cada "**item**" será exibido dentro da nossa "**tag li**".

  - Dessa forma o "**ngFor**" irá criar uma "**tag li**" e mostrará o qual é o valor da "**let item**".

  - Em outras palavras se nossa lista tivesse 10, 300 ou 2 itens o "**ngFor**" iria criar uma "**tag li**" para todos eles e "**renderizar item a item**" na nossa tela.

  ___
  <h3>CSS do nosso Componente app-lista :</h3>
  <img src="7-diretivas/img/2.2-ngfor.png">

  ___
  <h3>Adicionando o Componente app-lista no Nosso APP Component HTML :</h3>
  <img src="7-diretivas/img/2.3-ngfor.png">

  - Na "**linha 30**" nós adicionamos o nosso app-lista ao HTML do nosso app component.

  ___
  <h3>Renderização do app-lista na Nossa Aplicação :</h3>
  <img src="7-diretivas/img/2.4-ngfor.png">

  ___
  ___
  