Cypress.Commands.add('fillMandatoryFiledsAndSubmit', function (nome, sobrenome, email, longText) {

    cy.get('input[id="firstName"]')
    .should('be.visible')
    .type(nome)
    .should('have.value', nome)

    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type(sobrenome)
    .should('have.value', sobrenome)

    cy.get('input[id="email"]')
    .should('be.visible')
    .type(email)
    .should('have.value', email)

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .type(longText, {delay: 0})
    .should('have.value', longText)

    cy.contains('button', 'Enviar').click()
})