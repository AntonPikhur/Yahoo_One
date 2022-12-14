const { symbols } = require("ansi-colors");

class yahooMain {
    webesiteOpen(){
        cy.visit('https://www.yahoo.com/');
    }
    get mailPage(){
        return cy.get('#ybarMailLink');
    }
}
export default new yahooMain();