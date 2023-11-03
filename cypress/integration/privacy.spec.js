describe('Central de Atendimento ao Cliente TAT', function() {

    before(() => {
      cy.visit('./src/privacy.html')
    })
    it('testa a página da política de privacidade de forma independente - 2', function() {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
      })

    })