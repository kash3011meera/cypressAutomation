import 'cypress-xpath';

describe('File Manager', () => {
    it('should interact with file manager page', () => {
      // Visit the application URL
      cy.visit('https://dev-autoport.dealerimagepro.com/insta360');

      cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    
      // Enter password
      cy.get('#password').type('Ka@shu3011');
  
      // Click login button
      cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
      cy.wait(1000);

       Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })

      // Click on Promo Billboard page
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/a/i').click();
  
      // Wait for the page to load and interact with dropdown
      cy.wait(4000); // Cypress handles waiting differently than Selenium
  
      cy.get('.select-dealership').click();
  
      // Type into search bar and select an option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      
      // Wait for any AJAX requests or animations
      cy.wait(4000);

        cy.get('a.nav-link')
        .contains('Add Billboard')
        .click()

        cy.get('a.nav-link')
        .contains('History')
         .click()
    });
});