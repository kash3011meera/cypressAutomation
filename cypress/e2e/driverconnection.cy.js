
 import 'cypress-xpath';

 describe('Navigation Test', () => {
  before(() => {
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL or navigation to the required page
  });

   it('should navigate through menus', () => {

    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    cy.wait(1000);
    cy.get('#password').type('Ka@shu3011');
    
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();

  

  });

});