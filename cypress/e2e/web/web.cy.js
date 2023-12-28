/// <reference types="cypress" />

context('Check website', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/')
  })



  it('logged in with valid user', () => {
    cy.get('#user-name')
      .type('standard_user')

      cy.get('#password')
      .type('secret_sauce')

      // Click the login button
    cy.get('#login-button').click()

    // Assertion to verify successful login
    cy.url().should('include', '/inventory.html')

    cy.get('.select_container').click()

    cy.get('[data-test="product_sort_container"]').select('za')

    // Assertion to check sort from Z to A
    cy.get('.inventory_item_name')
      .should('have.text', 'Test.allTheThings() T-Shirt (Red)Sauce Labs OnesieSauce Labs Fleece JacketSauce Labs Bolt T-ShirtSauce Labs Bike LightSauce Labs Backpack')
      .should('be.visible'); // Optionally, you can check if the element is visible
 
  })

})
