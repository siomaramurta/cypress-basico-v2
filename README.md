# Exercícios do Curso de Testes Automatizados com Cypress - Básico V2

Este repositório contém os exercícios práticos propostos durante o curso de Testes Automatizados com Cypress. Os exercícios cobrem uma variedade de cenários comuns de teste usando o framework Cypress.

## Pré-requisitos

1. git - versão 2.41.0

2. Node.js - versão v16.16.0

3. npm - versão v8.11.0

4. Google Chrome - versão 119.0.6045.106 (Versão oficial) 64 bits

5. Cypress - versão 9.5.1

6. Visual Studio Code - versão 1.83.1


## Instalação

1. Execute npm install (ou "npm i" - versão abreviada) para instalar as dependências de desenvolvimento

## Instruções para Executar os Testes

Para executar os testes, siga as etapas abaixo:

1. Clone este repositório em sua máquina local

2. É possível executar os testes simulando uma página web ou um dispositivo móvel

> Página Web: utilize `npm test` (ou `npm t`) para o modo headless ou `npm run cy:open` para o modo interativo

> Dispositivo móvel: utilize `npm run test:mobile` para o modo headless ou `npm run cy:open:mobile` para o modo interativo


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

30. **Escrever a documentação do projeto**

31. **Adicionar uma pipeline de integração contínua**


## Contribuições

Este repositório contém a resolução dos exercícios do curso de acordo com o que fui absorvendo. 

Se você encontrar algum problema ou tiver sugestões de melhorias nos exercícios, fique à vontade para enviar solicitações de pull.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev/).

