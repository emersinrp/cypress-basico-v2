Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Emerson')
    cy.get('#lastName').type('Rodrigues')
    cy.get('#email').type('testeemerson@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})