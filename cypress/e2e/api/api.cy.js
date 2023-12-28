/// <reference types="cypress" />


describe('test api', () => {
 

  it.only('should successfully retrieve get method data', () => {
    cy.request('GET', 'https://api.publicapis.org/entries')
      .then((response) => { 
        expect(response.status).to.equal(200)

        // Parse the response body as JSON
      const responseBody = response.body;

      // Find objects with Category "Authentication & Authorization"
      const authObjects = responseBody.entries.filter((entry) => entry.Category === 'Authentication & Authorization');

      // Verify the count of objects with the specified category
      expect(authObjects.length).to.be.greaterThan(0) 

      // Print found objects to console
      authObjects.forEach((obj) => {
        cy.log(JSON.stringify(obj))
      })

    })
  })
})