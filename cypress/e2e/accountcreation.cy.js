import 'cypress-xpath';

describe('Export Order Test', () => {
    it('should navigate and perform export order actions', () => {

     // Visit the login page
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

    // Enter username
    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

    // Enter password
    cy.get('#password').type('Ka@shu3011');

    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/div[2]/form/button').click();
    cy.wait(3000);

        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
        //click on account creation Page
        cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[2]/a/i').click();
        cy.wait(1000);

        //click on add user button 
        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div[2]/div[2]/div/button').click();
        cy.wait(1000);
        
        //click close button 
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click();
        cy.wait(1000);

        })
})