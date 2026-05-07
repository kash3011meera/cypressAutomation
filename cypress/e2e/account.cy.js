// Import cypress-xpath
import 'cypress-xpath';


describe('Accounts Page Test', () => {
  it('should perform various actions on the accounts page', () => {
    // Visit the application URL
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

    // Enter username
    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

    // Enter password
    cy.get('#password').type('Ka@shu3011');

    // Click login button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();

     Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })

    // Click on Accounts Menu
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[11]/a/i').click();

    cy.wait(2000); // Wait for 4 seconds


       //click on setting gear menu 
    cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div/div[1]/div/table/tbody/tr[1]/td[9]/div/button/i')
    .scrollIntoView()
    .should('be.visible')  
    .click({force: true});
    cy.wait(1000); // Wait for 2 seconds


    
    // Click on edit button
    cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div/div[1]/div/table/tbody/tr[3]/td[9]/div/button/i')
      .click({ force: true })
      .wait(1000); // Wait for 1 second

    
    // Click on settings gear on the account page again
    cy.xpath('//*[@id="root"]/div[3]/div[3]')
      .click({ force: true })
      .wait(2000); // Wait for 2 seconds

           //click on setting gear menu 
   // cy.get('.dropdown-menu').invoke('hide');
   // cy.wait(1000);


    // Close button on edit access popup
    cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/h5/button/span')
      .click({ force: true }).wait(1000); // Wait for 1 second
   
    //click on setting gear icon button again 
    cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div/div[1]/div/table/tbody/tr[1]/td[9]/div/button/i')
    .scrollIntoView()
    .should('be.visible')  
    .click({force: true});
    cy.wait(1000); // Wait for 2 seconds


    //click on profile 
    cy.xpath('//*[@id="root"]/div[3]/div[1]/a').click();
    cy.wait(1000);


    // Click on Accounts Menu
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[11]/a/i').click();

    cy.wait(2000); // Wait for 2 seconds


    
       //click on setting gear menu 
cy.get('table tbody tr', { timeout: 10000 })
  .should('have.length.greaterThan', 7)

cy.get('table tbody tr')
  .eq(7)
  .find('button.active-node-menu2')
  .scrollIntoView()
  .click({ force: true })

    //click on edit access
   cy.xpath('//*[@id="root"]/div[3]/div[4]').click({force: true});
   cy.wait(2000);
  });
});
