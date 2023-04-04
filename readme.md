Aplicações Web em Node.js Conexão HTTP e Websocket
----

O objetivo deste exercício é construir aplicação web capaz de retornar conteúdos estáticos (HTML, CSS e JS) em Node.js, utilizando tanto o protocolo HTTP quanto o protocolo de conexão persistente - Websocket.

- Criar um projeto em Node.js;
- Criar uma página web (HTML, CSS e Javascript) capaz de se conectar e enviar mensagens simples de textos para servidores que suportem conexão Websocket;
- Definir um arquivo principal para a sua aplicação (index.js);
- Utilizar o framework `Express.js` para construir uma aplicação capaz de receber requisições HTTP de método GET e retornar o conteúdo estático criado no passo 2;
- Utilizar o framework `ws` para fazer que a aplicação web criada no passo anterior também seja capaz de receber conexões websocket.
- A conexão Websocket deverá ser capaz de receber mensagens de texto contendo operações matemáticas simples (adição, subtração, multiplicação e divisão) e retornar o resultado das mesmas para o cliente;

Operações:

a) 1 + 1

b) -123 + 123123

c) 8 * 0

d) 1239123 * 12313

e) 123 / -12

f) 313123 / 0

Faça os tratamentos necessários em seu código para evitar problemas em tempo de execução!