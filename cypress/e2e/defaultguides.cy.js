import 'cypress-xpath';
describe('Default Guides', () => {

  it('should log in and perform actions on the Master Composition page', () => {

    Cypress.on('uncaught:exception', () => false);

    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login');

    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    cy.get('#password').type('Ka@shu3011');

    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/div[2]/form/button').click();

    cy.wait(3000);

    // Click on the dropdown
      cy.get('.select-dealership').click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(4000);

    // Scroll to the bottom of the page again
    cy.scrollTo('bottom');

    // Click on Dealer Settings
    cy.xpath('//span[contains(text(),"Global Settings")]', { timeout: 10000 })
    .click({force : true});

     cy.wait(3000);

    // Click on Default Guides
    cy.xpath('//a[@href="/defaultcomposition"]//span[contains(text(),"Default Guides")]').click({force:true});
    cy.wait(3000);

  cy.get('[id="New Ready"]')
  .click({ force: true });

  
  cy.get('[id="Used Ready"]')
  .click({ force: true });

  cy.get('[id="Preliminary"]')
  .click({ force: true });


  })
})