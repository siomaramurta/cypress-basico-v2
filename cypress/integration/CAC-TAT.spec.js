describe('Central de Atendimento ao Cliente TAT', function() {
  const THREE_SECONDS_IN_MS = 3000
  
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
    it('verifica o título da aplicação', function() {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Siomara')
      .should('have.value', 'Siomara')

      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Murta')
      .should('have.value', 'Murta')

      cy.get('input[id="email"]')
      .should('be.visible')
      .type('siomara.murta@gmail.com')
      .should('have.value', 'siomara.murta@gmail.com')

      cy.get('textarea[id="open-text-area"]')
      .should('be.visible')
      .type(longText, {delay: 0})
      .should('have.value', longText)

      cy.get('.button[type="submit"]').click() 

      cy.get('span[class="success"]').should('be.visible', "Mensagem enviada com sucesso.")
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Siomara')
      .should('have.value', 'Siomara')

      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Murta')
      .should('have.value', 'Murta')

      cy.get('input[id="email"]')
      .should('be.visible')
      .type('siomara.murtagmail.com')
      .should('have.value', 'siomara.murtagmail.com')

      cy.get('textarea[id="open-text-area"]')
      .should('be.visible')
      .type(longText, {delay: 0})
      .should('have.value', longText)
      cy.get('.button[type="submit"]').click() 

      cy.get('span[class="error"]').should('be.visible', "Valide os campos obrigatórios!")
    })

    it('verifica o campo telefone para que, se um valor não-numérico for digitado, seu valor continue vazio.', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Siomara')
      .should('have.value', 'Siomara')

      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Murta')
      .should('have.value', 'Murta')

      cy.get('input[id="email"]')
      .should('be.visible')
      .type('siomara.murta@gmail.com')
      .should('have.value', 'siomara.murta@gmail.com')

      cy.get('input[id="phone"]')
      .type('siomara.murta@gmail.com')
      .should('have.value', '')

      cy.get('textarea[id="open-text-area"]')
      .should('be.visible')
      .type(longText, {delay: 0})
      .should('have.value', longText)
      cy.get('.button[type="submit"]').click() 

      cy.get('span[class="success"]').should('be.visible', "Mensagem enviada com sucesso.")
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'
      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Siomara')
      .should('have.value', 'Siomara')

      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Murta')
      .should('have.value', 'Murta')

      cy.get('input[id="email"]')
      .should('be.visible')
      .type('siomara.murta@gmail.com')
      .should('have.value', 'siomara.murta@gmail.com')

      cy.get('input[id="phone-checkbox"]').click()

      cy.get('textarea[id="open-text-area"]')
      .should('be.visible')
      .type(longText, {delay: 0})
      .should('have.value', longText)

      cy.get('.button[type="submit"]').click() 

      cy.get('span[class="error"]').should('be.visible', "Valide os campos obrigatórios!")
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Siomara')
      .should('have.value', 'Siomara')
      .clear()
      .should('have.value', '')

      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Murta')
      .should('have.value', 'Murta')
      .clear()
      .should('have.value', '')

      cy.get('input[id="email"]')
      .should('be.visible')
      .type('siomara.murta@gmail.com')
      .should('have.value', 'siomara.murta@gmail.com')
      .clear()
      .should('have.value', '')

      cy.get('input[id="phone"]')
        .should('be.visible')
        .type('31999999999')
        .should('have.value', '31999999999')
        .clear()
        .should('have.value', '')

      cy.get('textarea[id="open-text-area"]')
        .should('be.visible')
        .type(longText, {delay: 0})
        .should('have.value', longText)
        .clear()
        .should('have.value', '')

      cy.get('.button[type="submit"]').click() 

      cy.get('span[class="error"]').should('be.visible', "Valide os campos obrigatórios!")
    })


    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
      cy.get('.button[type="submit"]').click() 

      cy.get('span[class="error"]').should('be.visible', "Valide os campos obrigatórios!")
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {

      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('span[class="success"]').should('be.visible', "Mensagem enviada com sucesso.")
      //ou cy.get('.success').should('be.visible')

    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('input[id="firstName"]')
      .should('be.visible')
      .type('Siomara')
      .should('have.value', 'Siomara')

      cy.get('input[id="lastName"]')
      .should('be.visible')
      .type('Murta')
      .should('have.value', 'Murta')

      cy.get('input[id="email"]')
      .should('be.visible')
      .type('siomara.murta@gmail.com')
      .should('have.value', 'siomara.murta@gmail.com')

      cy.get('textarea[id="open-text-area"]')
      .should('be.visible')
      .type(longText, {delay: 0})
      .should('have.value', longText)

      cy.contains('button', 'Enviar').click() 

      cy.get('span[class="success"]').should('be.visible', "Mensagem enviada com sucesso.")
    })

    it('seleciona um produto (YouTube) por seu texto', function () {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('select[id="product"]').select('YouTube').should('have.value', 'youtube')

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (Mentoria) por seu valor', function () {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('select[id="product"]').select('mentoria').should('have.value', 'mentoria')

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (Blog) por seu índice', function () {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('select[id="product"]').select(1).should('have.value', 'blog')

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('.success').should('be.visible')
    })

    it('marca o tipo de atendimento "Feedback"', function () {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('[type="radio"]')
        .check('feedback')
        .should('have.value', 'feedback')

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('.success').should('be.visible')
    })
  
    it('marca cada tipo de atendimento', function () {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) {
          cy.wrap($radio).check()
          cy.wrap($radio).should('be.checked')
        })
      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('.success').should('be.visible')
    })

    it('marca ambos checkboxes, depois desmarca o último', function () {
      cy.get('input[type="checkbox"]')
        .as('checkboxes')
        .check()
        .should('be.checked')
      
        cy.get('input[type="checkbox"]').last().uncheck()
          .should('not.be.checked')

        cy.get('input[type="checkbox"]').first().should('be.checked')
    })

    it('refazendo - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'
      
      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('input[id="phone-checkbox"]').check()
      .should('be.checked')

      cy.get('.button[type="submit"]').click() 

      cy.get('[class="error"]').should('be.visible')
    })

    it('seleciona um arquivo da pasta fixtures', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades no exercício em anexo. Poderiam me auxiliar, por favor? Muito obrigada!'
      
      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('input[type=file]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')
        })
    
      cy.get('.button[type="submit"]').click() 

      cy.get('.success').should('be.visible')
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades no exercício em anexo. Poderiam me auxiliar, por favor? Muito obrigada!'
      
      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('input[type=file]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
        .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
    
      cy.get('.button[type="submit"]').click() 

      cy.get('.success').should('be.visible')
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades no exercício em anexo. Poderiam me auxiliar, por favor? Muito obrigada!'
      
      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.fixture('example.json').as('sample')
      cy.get('input[type=file]')
        .should('not.have.value')
        .selectFile('@sample')
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')
        })
    
      cy.get('.button[type="submit"]').click() 

      cy.get('.success').should('be.visible')
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
      cy.get('a[href="privacy.html"]').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
      cy.get('a[href="privacy.html"]').invoke('removeAttr', 'target')
        .click()
    })

    it('testa a página da política de privacidade de forma independente - 1', function() {
      cy.get('a[href="privacy.html"]').invoke('removeAttr', 'target')
        .click()
      
      cy.contains('CAC TAT - Política de privacidade').should('be.visible')

    })

    it('envia o formuário com sucesso usando um comando customizado e para e avança o relógio do navegador', function() {

      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'

      cy.clock()

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('.success').should('be.visible')

      cy.tick(THREE_SECONDS_IN_MS)
      //or cy.tick(3000)

      cy.get('.success').should('not.be.visible')

    })

    it('refazendo parando e avançando o relógio do navegador - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
      const longText = 'Olá! Tudo bem? Estou com dificuldades para acessar o módulo X. Meu número de matrícula no curso é X0X0000XX. Poderiam me auxiliar, por favor? Muito obrigada!'
      
      cy.clock()

      cy.fillMandatoryFiledsAndSubmit('Siomara', 'Murta', 'siomara.murta@gmail.com', longText)

      cy.get('input[id="phone-checkbox"]').check()
      .should('be.checked')

      cy.get('.button[type="submit"]').click() 

      cy.get('[class="error"]').should('be.visible')

      cy.tick(THREE_SECONDS_IN_MS)

      cy.get('[class="error"]').should('not.be.visible')

    })
  })

  describe('Central de Atendimento ao Cliente TAT', function() {

    before(() => {
      cy.visit('./src/privacy.html')
    })
    it('testa a página da política de privacidade de forma independente - 2', function() {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
      })
    
})