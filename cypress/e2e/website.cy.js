describe('DemoQA - Text Box', () => {
  const pageUrl = 'https://demo-qa-app.azurewebsites.net/text-box'

  beforeEach(() => {
    cy.visit(pageUrl)
  })

  it('opens the Text Box page and displays all form fields', () => {
    cy.get('#userName').should('be.visible')
    cy.get('#userEmail').should('be.visible')
    cy.get('#currentAddress').should('be.visible')
    cy.get('#permanentAddress').should('be.visible')
    cy.get('#submit').should('be.visible').and('be.enabled')
  })

  it('fills the form and displays the submitted information', () => {
    const formData = {
      name: 'Test name',
      email: 'test@example.com',
      currentAddress: 'Current Address',
      permanentAddress: 'Permanent Address',
    }

    cy.get('#userName').clear().type(formData.name)
    cy.get('#userEmail').clear().type(formData.email)
    cy.get('#currentAddress').clear().type(formData.currentAddress)
    cy.get('#permanentAddress').clear().type(formData.permanentAddress)

    cy.get('#submit').click()

    cy.get('#output').should('be.visible').within(() => {
      cy.contains(formData.name).should('be.visible')
      cy.contains(formData.email).should('be.visible')
      cy.contains(formData.currentAddress).should('be.visible')
      cy.contains(formData.permanentAddress).should('be.visible')
    })
  })

  it('rejects an invalid email address', () => {
    cy.get('#userName').type('Test name')
    cy.get('#userEmail').should('have.attr', 'type', 'email').type('invalid-email')

    cy.get('#userEmail').then(($email) => {
      expect($email[0].checkValidity()).to.equal(false)
    })
  })
})
