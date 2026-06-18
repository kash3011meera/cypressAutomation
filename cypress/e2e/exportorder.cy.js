import 'cypress-xpath';

describe('Export Order Test', () => {
    it('should navigate and perform export order actions', () => {

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
      // Click on Dealer Settings
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/span/i', { timeout: 10000 })
     .click({force : true});

      cy.wait(2000);
  
      // Click Export Order
      cy.xpath('//span[normalize-space()="Export Order"]', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible') 
      .click({force : true});

      cy.wait(4000);
  
      // Select the dropdown and search for "Demonstration Dealership"
      cy.get('.select-dealership').click();
      cy.get('#react-select-2-input').type('Demonstration Dealership{enter}');
      cy.wait(4000);
  
      // Click on New Ready
      cy.get('#New\\ Ready').click();
      cy.wait(2000);
  
      // Click on Used Ready
      cy.get('#Used\\ Ready').click();
      cy.wait(2000);
  
      // Click on Preliminary
      cy.get('#Preliminary').click();
      cy.wait(2000);
  
      // Click on Sales
      cy.get('#Sales').click();
      cy.wait(2000);
    });
  });
  