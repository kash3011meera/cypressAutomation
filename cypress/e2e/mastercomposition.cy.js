import 'cypress-xpath';
describe('Master composition', () => {

  it('should log in and perform actions on the Master Composition page', () => {

    Cypress.on('uncaught:exception', () => false);

    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login');

    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    cy.get('#password').type('Ka@shu3011');

    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/div[2]/form/button').click();

    cy.wait(3000);

    // Scroll to the bottom of the page again
    cy.scrollTo('bottom');

    // Click on Dealer Settings
    cy.xpath('//span[contains(text(),"Global Settings")]', { timeout: 10000 })
    .click({force : true});

     cy.wait(3000);

    // Click on Master Composotions
    cy.xpath('//a[@href="/mastershots"]//span[contains(text(),"Master Compositions")]').click({force:true});
    cy.wait(3000);

    
   // open dropdown
cy.get('button.dropdown-toggle')
  .first()
  .click({ force: true });

// confirm dropdown opened
cy.get('button.dropdown-toggle')
  .first()
  .click({ force: true });

cy.contains('Compositions', { timeout: 10000 })
  .should('exist');

cy.contains('div.dropdown-item a', 'Composotions')
  .click({ force: true })
cy.wait(3000);


  })

});