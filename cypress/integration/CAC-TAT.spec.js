/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

beforeEach(function(){
    cy.visit('./src/index.html')
})

  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preenche os campos obrigatorios e envia o formulario', function(){
    cy.get('#firstName').type('Emerson')
    cy.get('#lastName').type('Rodrigues')
    cy.get('#email').type('testeemerson@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

})
