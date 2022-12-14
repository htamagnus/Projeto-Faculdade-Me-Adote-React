# Projeto-Faculdade-Me-Adote-React
 
 
Projeto no ar: https://projeto-faculdade-me-adote-react-valg-j7lo9a055-htamagnus.vercel.app/


Projeto feito em React, para uma cadeira na faculdade. 

O desafio era implementar o front-end de uma aplicação Web, proposta em HTML, CSS e JavaScript, ou usando algum framework de desenvolvimento. Eu optei pelo uso do React, por diversas razões. O React é flexível, tem um tempo muito bom de carregamento de páginas, e principalmente pelo uso dos componentes reutilizáveis, a reutilização e combinação de componentes no código.

Utilizei SCSS para auxílio do código CSS, que adiciona funcionalidades aos CSS, sem quebrar a compatibilidade, ou seja, no final o código é compilado ou convertido para a versão padrão. Tive essa escolha também por ter uma fácil manutenção.

Para estruturar o projeto em React, segui boas práticas de criação de código. 

Dentro da pasta src, criei uma pasta chamada "Components" com todos os Componentes que utilizei na aplicação. Nessa estrutura, cada parte da página tem sua própria pasta, desse modo é fáci saber qual componente afeta o quê. A ideia é sempre tentar manter um componente pequeno, para que seja mais fácil de ler e testar, além de reutilizar e manter. Caso um componente fique muito extenso, talvez seja melhor dividir ele em dois. 
 
Todas as pastas dentro de Components seguem praticamente o mesmo padrão: 

• um arquivo JSX: possui um HTML, em que existem os imports usados nela, a chamada para o SCSS e em algumas páginas, JavaScript;

• um arquivo SCSS: possui a a estilização do componente;

• um ou mais arquivo PNG: imagem ou ícone utilizado naquele componente;




Ainda dentro da pasta src, criei a pasta Assets, onde ficam organizados os ícones padrões da página.

A pasta Assets possui alguns arquivos necessários para os componentes, pois, algumas imagens e ícones é melhor manter dentro do próprio component, para uma melhor manutenção. Geralmente, dentro do assets, ficam as imagens e ícones mais globais.



Também na pasta src, criei a pasta styles, onde se encontra:

• Variáveis CSS: as variáveis utilizadas no projeto, como tipografia e cores. Optei por essa escolha pela fácil manutenção no código, por exemplo, por existir uma variável para a cor, posso nomeá-la e apenas alterar seu hexadecimal quando quiser, em apenas um só lugar. 

• Estilos Globais CSS: onde é feito o reset do css pela importação do normalize, limpando o CSS padrão de todos os navegadores, para que não exista divergência de código quando acessado por navegadores diferentes. Há também a importação da fonte utilizada no projeto, e o CSS geral da aplicação feita. Foi feito também um ajuste na barra de rolagem, para fins estéticos.



Por fim, na pasta src, criei também a pasta pages, onde fica todas as páginas feita na aplicação web. Nesse caso, só temos uma, que é a página inicial. Mas, há a possibilidade de termos outras, como a Página de "Quero Adotar", "Quero Ajudar", "Quero Apadrinhar". No JSX da página inicial, é onde faço a chamada de todos os components que foram criados.



Na raíz da pasta src, existem dois arquivos: o App.js e o index.js. 

• App.js: serve para renderizar as nossas páginas criadas. Nesse caso, somente a página inicial, e fazer a importação dos estilos globais.

• index.js: serve para renderizar o componente principal (App.js). 


Na raíz do projeto, temos a pasta public, onde possui o HTML padrão com as principais informações da página, como por exmeplo o título e o idioma.
