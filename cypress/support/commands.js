// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
    Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login');
    cy.get('#username').type("kashmeera.kadachhi@eryushion.com");
    cy.get('#password').type("Ka@shu3011");
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/div[2]/form/button').click();
  
    // Wait for OTP input field to be visible and enter OTP
   // cy.get('#otp').should('be.visible').type(otp);
    //cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
  });