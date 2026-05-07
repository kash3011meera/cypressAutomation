import 'cypress-xpath';

describe('Export Page Automation', () => {
    beforeEach(() => {
      // Visit the initial page or set up necessary preconditions
      cy.visit('https://dev-autoport.dealerimagepro.com/export');

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
  
    it('should perform actions on the Export page', () => {


      Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
      // Click on the exports menu
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[6]/a/i').click();
      
      // Wait for the page to load
      cy.wait(3000);
  
      // Click on the dropdown
      cy.get('.select-dealership').click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(4000);
  
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[1]/div[2]/div/i').click();
      cy.wait(1000);
      
      // Double click on date folder
      cy.xpath('//*[@id="export-main-div"]/div/div[3]/div/div[1]/div/table/tbody/tr/td[2]/div[1]').dblclick();
      cy.wait(2000);
  
      // Double click on the subdate folder
      cy.xpath('//*[@id="export-main-div"]/div/div[3]/div/div[1]/div[2]/div/table/tbody/tr/td[2]/div[1]').dblclick();
      cy.wait(2000);
  
      // Double click on the subtosub folder
      cy.xpath('//*[@id="export-main-div"]/div/div[3]/div/div[1]/div[2]/div[2]/div/table/tbody/tr/td[2]/div[1]').dblclick();
      cy.wait(2000);

   // open dropdown
cy.get('button.active-node-menu2')
  .first()
  .should('be.visible')
  .click({ force: true })

// confirm dropdown opened
cy.get('div.dropdown-item', { timeout: 10000 })
  .should('be.visible')

  cy.contains('div.dropdown-item a', 'Gallery')
  .should('exist')

cy.contains('div.dropdown-item a', 'Gallery')
  .click({ force: true })
cy.wait(3000);

 cy.go('back')

// confirm you're not on export page anymore
//cy.url().should('not.include', '/export')

// then check element
//cy.get('body').should('be.visible')

    });
  });
  