import 'cypress-xpath';

describe('Video Page Automation', () => {
    beforeEach(() => {
      // Visit the page that contains the Video section
      cy.visit('https://dev-autoport.dealerimagepro.com/video');

      cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    
      // Enter password
      cy.get('#password').type('Ka@shu3011');
  
      // Click login button
      cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
      cy.wait(1000);
  
      // Wait for OTP input field to be visible and enter OTP
      //cy.get('#otp').should('be.visible').type('123');
  
      // Click the verify button
      //cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
      //cy.wait(3000);
      
    });
  
    it('should perform actions on the Video page', () => {

       Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      // Click on the Video menu
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[14]/a/i').click();
      
      // Wait for the page to load
      cy.wait(3000);
  
      // Click on the dropdown
      cy.get('.select-dealership').click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(4000);
  
      // Double click on the data column
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[5]/div/div[1]/div/table/tbody/tr/td[2]/div[1]')
        .trigger('dblclick');
      cy.wait(3000);
  
      // Double click on the next data column
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[5]/div/div[1]/div[2]/div[1]/table/tbody/tr/td[2]/div[1]')
        .trigger('dblclick');
      cy.wait(3000);
  
      // Double click on the subtosub folder
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[5]/div/div[1]/div[2]/div[2]/div/table/tbody/tr/td[2]/div[1]')
        .trigger('dblclick');
      cy.wait(3000);
  cy.get('button.active-node-menu2')
  .first()
  .click({ force: true })

cy.contains('div.dropdown-item', 'Review Vehicle', { timeout: 10000 })
  .should('exist')

cy.contains('div.dropdown-item', 'Review Vehicle')
  .click({ force: true })
    

    });
  });
  