import 'cypress-xpath';
describe('PA Guide Order Page', () => {
    beforeEach(() => {
      // Visit the application URL
      cy.visit('https://dev-autoport.dealerimagepro.com/insta360');

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
  
    it('should interact with the PA Guide Order page', () => {
      // Click on Dealer Settings
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/span/i').click();
  
      // Wait for the menu to load
      cy.wait(3000);
  
      // Click on PA Guide Order
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/ul/li/a[1]/i').click({ force: true });
  
      // Wait for the page to load
      cy.wait(4000);
  
      // Interact with the dropdown
      cy.get('.select-dealership').click();
      cy.get('#react-select-2-input').type('Demonstration Dealership{enter}');
  
      // Wait for the selection to process
      cy.wait(4000);
  
      // Click on the arrow
      cy.xpath('//*[@id="assignedAll"]/div[1]/div/div[2]/div/i').click({ force: true });
      cy.wait(2000);
  
      // Click to save changes
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/button').click({ force: true });
      cy.wait(2000);
  
      
      // Handle alert
      cy.on('window:alert', (alertText) => {
        // Optionally, you can assert the alert text here
        cy.log('Alert text: ' + alertText);
      });
      
      // Click OK on alert
      cy.get('body').then(($body) => {
        if ($body.find('div[role="alert"]').length) {
          cy.get('div[role="alert"]').find('button').click(); // Adjust selector based on alert implementation
        }
      });
  
      cy.wait(3000);
  
      // Click on New Ready
      cy.get('#New Ready').click();
      cy.wait(2000);
  
      // Click on Used Ready
      cy.get('#Used Ready').click();
      cy.wait(2000);
  
      // Click on Preliminary
      cy.get('#Preliminary').click();
      cy.wait(2000);
  
      // Click on Sales
      cy.get('#Sales').click();
      cy.wait(2000);
    });
  
  });
  