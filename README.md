<h1 align="center">Render / Renderização com Angular</h1>

  - O "**Render**" é responsavel por decidicir a melhor maneira de "**acessar**" e "**entregar**" para o "**browser**" os nossos "**components**".

  - Ele envia os nossos components já prontos para que o browser apenas tenha a função de desenha-los na nossa pagina.

  - Então o "**Render**" basicamente pega nossos "**components**" junto com seus "**states**" e "**routes**" e envia ao "**browser**" para que ele tenha apenas a função de desenhar tudo na nossa pagina.

___
  <h3>Existem 3 tipos de estrategias de renderização, são elas:</h3>

  - "**100% Server**": <br>
    Que entrega para o "**browser**" o nosso "**documento**" já todo montado com seu "**HTML e CSS**", caso o usuario acesse outra rota ele entrega um novo documento já todo montado no "**beck-end**", então o servidor já nos entrega tudo montado.

  - Parte server e Parte Cliente: <br>
    Ele entrega um "**documento**" com "**algumas partes**" já montadas, más "**algumas partes**" do nosso "**documento**" podem ser "**montadas dinamicamente**" durante a execução.

  - "**100% Client**": <br>
    O nosso "**documento**" é todo "**montado dinamicamente**" do "**lado do cliente**", nada vem montado do lado do servidor, todas as partes do documento serão renderizadas pelo lado do cliente, é nessa estrategia que o Angular ou React são feitos.

  OBS: O Angular podem ter o uso da estrategia "**Parte Server e Parte Cliente**", más no geral ela usa "**100% client**".

___