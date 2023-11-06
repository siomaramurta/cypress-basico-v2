# Exercícios do Curso de Testes Automatizados com Cypress - Básico

Este repositório contém os exercícios práticos propostos durante o curso de Testes Automatizados com Cypress. Os exercícios cobrem uma variedade de cenários comuns de teste usando o framework Cypress.


## Instruções para Executar os Testes

Para executar os testes, siga as etapas abaixo:

1. Clone este repositório em sua máquina local.

2. É necessário ter o Node.js e o npm instalados para executar este projeto.

> Utilizei as versões v16.16.0 e 8.11.0 do Node.js e npm, respectivamente. Sugiro que você utilize as mesmas versões ou versões posteriores.

3. Certifique-se de ter o Cypress instalado em seu ambiente de desenvolvimento.

> Utilizei a versão 9.5.1 do Cypress. Utilize a versão indicada.

4. Logo após a instalação, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez

5. Com o Test Runner aberto, delete os exemplos criados automaticamente e feche o Test Runner.

6. Atualize o arquivo cypress.json conforme indicado abaixo:

> {
  "pluginsFile": false,
  "viewportHeight": 880,
  "viewportWidth": 1280
}

7. Delete o diretório cypress/plugins/, pois ele não foi utilizado durante o curso e a resolução dos exercícios.

8. Modifique a seção de scripts do arquivo package.json, conforme abaixo:

> "scripts": {
    "cy:open": "cypress open",
    "test": "cypress run"
},

9. Abra um terminal na raiz do projeto e execute o seguinte comando para iniciar o Cypress, para abrir o Test Runner e executar os testes em modo interativo:

> npm run cy:open

10. O Cypress Test Runner será aberto. Clique em qualquer teste na lista para executá-lo.

11. Observe os resultados dos testes no painel do Cypress Test Runner.

## Pré-requisitos

1. git - versão 2.41.0

2. Node.js - versão v16.16.0

3. npm - versão v8.11.0

4. Google Chrome - versão 119.0.6045.106 (Versão oficial) 64 bits

5. Cypress - versão 9.5.1

6. Visual Studio Code - versão 1.83.1


## Instalação

1. Instale o Node.js acessando o site https://nodejs.org

2. Ao instalar o Node.js o npm é instalado também

3. Execute os comandos git --version && node --version && npm --version para verificar as versões instaladas

4. Execute npm install (ou "npm i" - versão abreviada) para instalar as dependências de desenvolvimento

5. Na raiz do projeto, execute o comando npm install cypress@9.5.1 --save-dev (ou npm i cypress@9.5.1 -D para a versão curta)

## Sobre o Curso

O curso de Testes Automatizados com Cypress - Básico é projetado para ajudar profissionais a adquirirem habilidades essenciais em testes automatizados usando o Cypress. Durante o curso aprendemos a criar testes, interagir com elementos da página, realizar verificações e lidar com situações complexas de teste. Abaixo, você encontrará uma lista dos exercícios abordados no curso:

## Lista de Exercícios

1. **Criação a estrutura básica da suíte de testes**

2. **Verificação do Título da Aplicação**

3. **Abrir o Test Runner e executar o teste em modo interativo**

4. **Mover a visita à página da aplicação em teste para um bloco `beforeEach()`**

5. **Preenchimento de Campos Obrigatórios da aplicação (Nome, Sobrenome, Email e Como podemos te ajudar?)**

6. **Verificar se a mensagem de sucesso é exibida após preenchimento de todos os campos e clique no botão `Enviar`**

7. **Sobrescrever o delay padrão pelo 0 no momento de preenchimento do campo "Como podemos te ajudar?"**

8. **Validação de E-mail Inválido**

9. **Verificação do Campo Telefone**

10. **Mensagem de Erro para Telefone Obrigatório**

11. **Preencher e limpar os campos Nome, Sobrenome, Email e Telefone**

12. **Exibir mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios**

13. **Criar um comando customizado**

14. **Alterar os execícios anteriores que usem o `cy.get()` para fazer clique, pelo comando `cy.contains()`**

15. **Selecionar um Produto por Texto**

16. **Selecionar um Produto por Valor**

17. **Selecionar um Produto por Índice**

18. **Marcar Tipo de Atendimento "Feedback"**

19. **Marcar inputs do tipo radio**

20. **Marcar todos os checkboxes e depois desmarca o último**

21. **Refazer o exercício 9 utilizando o comando `.check()`**

22. **Selecionar arquivo da Pasta Fixtures**

23. **Selecionar arquivo com Arrastar e Soltar (Drag and drop)**

24. **Selecionar arquivo usando um Alias da Fixture**

25. **Verificação da segunda página da aplicação "Política de Privacidade" com `cy.get('.some-link').should('have.attr', 'target', '_blank')`**

26. **Acessar à Página de "Política de Privacidade" com `cy.get('#link-que-abre-em-outra-aba').invoke('removeAttr', 'target')`**:

27. **Teste Independente da Página de Política de Privacidade**

28. **Simular um dispositivo com 410 pixels de largura e 860 pixels para rodar todos os testes anteriores no Cypress Runner**

29. **Simular um dispositivo com 410 pixels de largura e 860 pixels para rodar todos os testes anteriores em modo headless**

## Contribuições

Este repositório contém a resolução dos exercícios do curso de acordo com o que fui absorvendo. 

Se você encontrar algum problema ou tiver sugestões de melhorias nos exercícios, fique à vontade para enviar solicitações de pull.



