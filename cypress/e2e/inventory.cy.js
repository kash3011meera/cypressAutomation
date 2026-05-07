// Import cypress-xpath
import 'cypress-xpath';

describe('inventory Page Test', () => {
  it('should perform various actions on the inventory page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
    // Visit the application URL
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL

    // Enter username
    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

    // Enter password
    cy.get('#password').type('Ka@shu3011');

    // Click login button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
   // cy.screenshot();
  
   
        // Click on Inventory menu
        cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[8]/a/i').click();
        cy.wait(1000); // Wait for the page to load
    
        // Select a dealership from the dropdown
        cy.get('.select-dealership').click();
        cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
        cy.wait(2000);
    
        // Scroll to the end of the page
       cy.scrollTo('bottom');
       cy.wait(2000);
       
        cy.get('body').should('be.visible')
        cy.wait(1000);

        // cy.get('button.active-node-menu2', { timeout: 10000 })
        //  .should('have.length.greaterThan', 0)
        //   .first()
        //   .click({ force: true })

      cy.get('body').should('be.visible')

// optional wait (only if needed)
cy.wait(2000)

// scroll (safe version)
cy.window().then((win) => {
  win.scrollTo(0, document.body.scrollHeight)
})

// continue
cy.contains('Gallery')
  .should('exist')
  
      cy.contains('Gallery', { timeout: 10000 })
      .should('exist')

      cy.contains('Gallery')
      .scrollIntoView()
      .click({ force: true })

      });
    });
  
