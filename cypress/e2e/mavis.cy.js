import 'cypress-xpath';

describe('Mavis Page Automation', () => {
    beforeEach(() => {
      // Ensure you visit the page before each test
      cy.visit('https://dev-autoport.dealerimagepro.com/mavis');

      cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

      // Enter password
      cy.get('#password').type('Ka@shu3011');
  
      // Click login button
      cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
  
      
      
    });
  
    it('should perform the required actions on the Mavis page', () => {


      
      Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      // Click on MAVIS Menu
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[5]/a/i').click();
      
      // Wait for the page to load
      cy.wait(3000);
      
      // Click on the dropdown
      cy.get('.select-dealership').click();
      
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(4000);
      
      // Double click on the date folder
      cy.xpath('//*[@id="export-main-div"]/div/div[3]/div/div[1]/div/table/tbody/tr/td[2]/div[1]').dblclick();
      cy.wait(3000);
      
      // Double click on the subdate column
      cy.xpath('//*[@id="export-main-div"]/div/div[3]/div/div[1]/div[2]/div/table/tbody/tr/td[2]/div[1]').dblclick();
      cy.wait(3000);
      
      // Double click on the VIN details column
      cy.xpath('//*[@id="export-main-div"]/div/div[3]/div/div[1]/div[2]/div[2]/div/table/tbody/tr/td[2]/div[1]').dblclick();
      cy.wait(3000);
      
     // Step 1: open dropdown
cy.get('button.active-node-menu2')
  .first()
  .click({ force: true })

// Step 2: wait for option
cy.get('div.dropdown-item[data-index="4"]', { timeout: 10000 })
  .should('exist')
  //cy.wait(1000)

// Step 3: click (re-query to avoid error)
cy.get('div.dropdown-item[data-index="4"]')
  .click({ force: true })

 cy.get('button.active-node-menu2')
  .first()
  .click({ force: true })
  cy.wait(1000)

cy.get('div.dropdown-item[data-index="4"]', { timeout: 10000 })
  .should('exist')

cy.get('div.dropdown-item[data-index="4"]')
  .click({ force: true })

  cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click();
  cy.wait(1000);

    });
  });
  