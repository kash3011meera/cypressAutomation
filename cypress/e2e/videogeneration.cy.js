import 'cypress-xpath';

describe('Video Generation Page', () => {
  it('should navigate and interact with the Video Generation Page', () => {

    
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

    // Click on Dealer Settings
    cy.xpath('//span[contains(text(),"Dealer Settings")]').click({force:true});
    cy.wait(3000);

    // Scroll to the bottom of the page
    //cy.scrollTo('bottom');

    // Click on Video Generation
    cy.xpath('//a[@href="/videogeneration"]').click();
    cy.wait(3000);

    // Select the dropdown and search for "Demonstration Dealership"
    cy.get('.select-dealership').click();
    cy.get('#react-select-2-input', { timeout: 10000 }).type('Demonstration Dealership{enter}');
    cy.wait(4000);

    // Scroll to the bottom of the page again
    cy.scrollTo('bottom');

    // Click on Lower 3rd
    cy.xpath('/html/body/div[1]/div[1]/div/div/div/div[2]/div/div[5]/div[1]/div/div/div/div/i').click();
    cy.wait(3000);

    // Scroll to the bottom of the page again if necessary
    cy.scrollTo('bottom');
  });
});
