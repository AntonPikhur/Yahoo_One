import yahooPage from "../pages/yahoo.page";

describe('Yahoo test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it('Should check if yahoo logo is visible', () => {
        yahooPage.webesiteOpen();
        yahooPage.mailPage.click();
        cy.url().should('include','mail.yahoo.com')
    })
})