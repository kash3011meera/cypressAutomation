// Import necessary Cypress plugins if needed
import 'cypress-xpath'; // If you are using XPath selectors

describe('Edit Tracker Page Test', () => {
    before(() => {
        cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

        // Enter username
        cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    
        // Enter password
        cy.get('#password').type('Ka@shu3011');
    
        // Click login button
        cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
        cy.wait(1000);
    
        // Wait for OTP input field to be visible and enter OTP
        cy.get('#otp').should('be.visible').type('123');
    
        // Click the verify button
        cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
        cy.wait(3000);
    });
  
    it('should interact with elements on the Edit Tracker page', () => {
      // Click on Edit Tracker
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div[2]/ul/li[3]/a')
        .click();
  
      // Wait for any potential page load or navigation
      cy.wait(3000);
  
      // Click on the dropdown for selecting a dealership
      cy.get('.select-dealership') // Ensure this selector is correct
        .click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input')
        .type('Demonstration Dealership')
        .type('{enter}');
  
      // Wait for the dropdown options to be available
      cy.wait(4000);
  
      // Click on the calendar button
      cy.xpath('/html/body/div[1]/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div/div[1]/div/button')
        .click();
  
      // Wait for the calendar to appear
      cy.wait(3000);
  
      // Select the year from the dropdown
      cy.get('.react-datepicker__year-read-view--selected-year')
        .click();
        
      // Select the desired year option (e.g., 2024)
      cy.xpath('/html/body/div[1]/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div/div[2]/div[2]/div/div/div/div[1]/div[2]/div[2]/div[1]/div[2]')
        .click();
  
      // Select the month from the dropdown
      cy.get('.react-datepicker__month-read-view--selected-month')
        .click();
  
      // Select the desired month (e.g., June)
      cy.xpath('/html/body/div[1]/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div/div[2]/div[2]/div/div/div/div[1]/div[2]/div[1]/div[1]/div[6]')
        .click();
  
      // Select the desired date (e.g., 15th of the month)
      cy.xpath('/html/body/div[1]/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div/div[2]/div[2]/div/div/div/div[2]/div[4]/div[5]')
        .click();
    });
  });
  