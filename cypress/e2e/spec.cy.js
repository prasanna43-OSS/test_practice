
describe('template spec', () => {
  it('Naviagate to Site', () => {
    cy.visit('https://automationexercise.com/')
  })
      it('Verify the Site - Name positive case', () => {
        cy.visit('https://automationexercise.com/')
    cy.title().should('eq',"Automation Exercise");
  })
      it('Verify the Site - Name negative case', () => {
        cy.visit('https://automationexercise.com/')
    cy.title().should('eq',"Automations Exercise");
  })

})