import 'cypress-xpath';

describe('Dealer Profile Page Automation', () => {
    beforeEach(() => {
      // Visit the base URL or initial page
      cy.visit('https://dev-autoport.dealerimagepro.com/dealer-profile');

      cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

      // Enter password
      cy.get('#password').type('Ka@shu3011');
  
      // Click login button
      cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
  
  
    });
  
    it('should perform actions on the Dealer Profile page', () => {
      // Click on Dealer Profile menu
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[9]/a/i').click();
      
      // Wait for the page to load
      cy.wait(3000);
  
      // Click on the dropdown
      cy.get('.select-dealership').click();
  
      // Type into the search bar and select the option
      cy.get('#react-select-2-input').type('Demonstration Dealership').type('{enter}');
      cy.wait(4000);
  
      // Click on Notification button
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div/ul/li[4]/a').click();
      cy.wait(2000);
  
      // Click on Image Viewer button
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div/ul/li[3]/a').click();
      cy.wait(2000);
  
      // Click on Activity Monitor
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div/ul/li[4]/a').click();
      cy.wait(2000);
  
      // Click on Window Sticker
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div/ul/li[5]/a').click();
      cy.wait(2000);
  
      // Click on IMS Configuration
      cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div/ul/li[7]/a').click();
      cy.wait(2000);
    });
  });
  