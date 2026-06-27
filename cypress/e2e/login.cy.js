import 'cypress-xpath';

describe('Login Test', () => {
  it('should log in successfully', () => {
    // Visit the login page
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

    // Enter username
    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

    // Enter password
    cy.get('#password').type('Ka@shu3011');

    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/div[2]/form/button').click();
    cy.wait(3000);

    // Click on the dropdown
      cy.get('.select-dealership').click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(4000);
  
  });
});