import 'cypress-xpath';

describe('Profile Page Automation', () => {
    beforeEach(() => {
      // Visit the base URL or initial page for the Profile section
      cy.visit('https://dev-autoport.dealerimagepro.com/profile');

      cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

      // Enter password
      cy.get('#password').type('Ka@shu3011');
  
      // Click login button
      cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
  
      // Wait for OTP input field to be visible and enter OTP
      //cy.get('#otp').should('be.visible').type('123');
  
      // Click the verify button
      //cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
      //cy.wait(3000);
    });
  
    it('should perform actions on the Profile page', () => {


      Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      // Click on Profiles menu
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[10]/a/i').click();
      
      // Wait for the page to load
      cy.wait(3000);
  
      // Double click on the users element
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[3]/div/div[3]/div/div[1]/div/table/tbody/tr[2]/td[2]/div/div')
        .trigger('dblclick');
      
      // Wait for any action to complete
      cy.wait(2000);
  
      // Navigate back
      cy.go('back');
    });
  });
  