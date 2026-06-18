
import 'cypress-xpath';

describe('Mavis Settings Page', () => {
  it('should navigate and interact with the Mavis Settings Page', () => {
    cy.visit('https://dev-autoport.dealerimagepro.com/insta360');

    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
  
    // Enter password
    cy.get('#password').type('Ka@shu3011');

    // Click login button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
    cy.wait(1000);

    // Wait for OTP input field to be visible and enter OTP
    //cy.get('#otp').should('be.visible').type('123');

    // Click the verify button
   // cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
    //cy.wait(3000);
    
    

    // Select the dropdown and search for "Demonstration Dealership"
    cy.get('.select-dealership').click();
    cy.get('#react-select-2-input', { timeout: 10000 }).type('Demonstration Dealership{enter}');
    cy.wait(4000);

    // Scroll to the bottom of the page again
    cy.scrollTo('bottom');

    // Click on Dealer Settings
    cy.xpath('//span[contains(text(),"Dealer Settings")]', { timeout: 10000 })
    .click({force : true});

     cy.wait(3000);

    // Click on MAVIStm
    cy.xpath('//a[@href="/mavissettings"]//span[contains(text(),"MAVIS™")]').click({force:true});
    cy.wait(3000);

    // Click on Image Background Library
    cy.xpath('//button[normalize-space()="Image Background Library"]').click();
    cy.wait(2000);

    // Click on Used Vehicle Background
    cy.get('#Used\\ Vehicle\\ Background')
    .should('be.visible')
    .click();

    // Click on Insta 360 Vehicle Background
    cy.get('#Insta\\ 360\\ Vehicle\\ Background').click();
    cy.wait(2000);

    // Click on CarFax Overlay
    cy.get('#CarFax\\ Overlay').click();
    cy.wait(2000);
  });
});
