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
  
      // Wait for OTP input field to be visible and enter OTP
     // cy.get('#otp').should('be.visible').type('123');
  
      // Click the verify button
      //cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
      //cy.wait(3000);
  
        Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      // Click on File manager
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[17]/a/i').click();
  
      // Wait for the page to load and interact with dropdown
      cy.wait(4000); // Cypress handles waiting differently than Selenium
  
      cy.get('.select-dealership').click();
  
      // Type into search bar and select an option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      
      // Wait for any AJAX requests or animations
      cy.wait(4000);
  
      // Double-click on the folder
      cy.xpath('//*[@id="myDiv"]/div/div/div/div[2]/div/div[1]/div/table/tbody/tr[4]/td/div/div[1]/div[2]').dblclick();
  
      // Wait to ensure the action is completed
      cy.wait(2000);
    });
  });
  