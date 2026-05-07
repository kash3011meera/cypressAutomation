import 'cypress-xpath';

describe('Edit and Flags Page Automation', () => {
    beforeEach(() => {
      // Visit the page that contains the Edit & Flags section
      cy.visit('https://dev-autoport.dealerimagepro.com/edit-and-flags');

      cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    
      // Enter password
      cy.get('#password').type('Ka@shu3011');
  
      // Click login button
      cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
      cy.wait(1000);
  
     
    });
  
    it('should perform actions on the Edit and Flags page', () => {

      
     Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      // Click on Edit & Flags menu
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[13]/a/i').click();
      
      // Wait for the page to load
      cy.wait(3000);
  
      // Click on the dropdown
      cy.get('.select-dealership').click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(2000);
  
      // Click on the calendar button
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[1]/div[2]/div/div/div/div[1]/div/button/i').click();
      cy.wait(2000);
  
      // Select the year from the dropdown
      cy.get('.react-datepicker__year-read-view--selected-year').click();
  
      // Select the year option (e.g., 2024)
     // cy.xpath('/html/body/div[1]/div[1]/div/div/div/div[2]/div[1]/div[2]/div/div/div/div[2]/div[2]/div/div/div/div[1]/div[2]/div[2]/div[1]/div[8]').click();
     cy.get('#react-select-2-input').click()

    cy.contains('div', '2026', { timeout: 10000 })
    .click()
     
    });
  });
  