import 'cypress-xpath';

describe('Login Test', () => {
  it('should log in successfully', () => {
    // Visit the login page
    cy.visit('https://autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

    // Enter username
    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

    // Enter password
    cy.get('#password').type('Ka@shu3011');

    // Click login button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();

    // Wait for OTP input field to be visible and enter OTP
    cy.get('#otp').should('be.visible').type('123');

    // Click the final button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
  });
});