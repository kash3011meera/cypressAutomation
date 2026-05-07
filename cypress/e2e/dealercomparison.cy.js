// Import necessary Cypress plugins if needed
import 'cypress-xpath'; // If you are using XPath selectors

describe('Dealer Comparison Page Test', () => {
  before(() => {
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

    // Enter username
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

  it('should perform actions on the Dealer Comparison page', () => {
    // Click on DealerComparison
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[3]/a/i').click();

    // Wait for the page to load
    cy.wait(3000); // Adjust this based on actual page load time

    // Click on the dropdown
    cy.get('.select-dealership').click();// Replace with the appropriate selector if needed
    
    // Type into the search bar and select an option
    cy.get('#react-select-2-input')
      .type('Demonstration Dealership')
      .type('{enter}'); // Press Enter to select the option

    // Wait for any necessary operations to complete
    cy.wait(4000); // Adjust this based on the actual time needed
  });
});
