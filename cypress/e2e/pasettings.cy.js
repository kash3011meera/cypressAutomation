import 'cypress-xpath';

describe('PA FAQs Page', () => {
  it('should interact with the PA FAQs page', () => {

    cy.visit('https://dev-autoport.dealerimagepro.com/faq');

    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
  
    // Enter password
    cy.get('#password').type('Ka@shu3011');

    // Click login button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
    cy.wait(2000);

    // Wait for OTP input field to be visible and enter OTP
   // cy.get('#otp').should('be.visible').type('123');
   
    // Click the verify button
    //cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();

    //click on Global settings 

    cy.contains('Global Settings').click()

// verify submenu opened
   
cy.contains('Global Settings').click()

cy.get('body').then($body => {
  cy.log($body.html())
})
    //cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div[2]/ul/li[19]/span/span').click({force:true});
    cy.wait(2000);

    //click on PA settings 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[21]/ul/li/a[1]/i').click({force:true});
    cy.wait(2000);

    // Scroll the menubar into view
    //cy.xpath('//*[@id="root"]/div[1]/aside').scrollIntoView();
    //cy.wait(2000);

    // Click on the dropdown and search for "Demonstration Dealership"
    cy.get('.select-dealership').click();
    cy.get('#react-select-2-input', { timeout: 10000 }).type('Demonstration Dealership{enter}');
    cy.wait(4000);

    // Click on Add New Icon
    cy.get('#tooltipAddNew')
  .scrollIntoView()
  .click({ force: true })

    // Enter Title
    cy.get('#faqtitle').type('Hello 21aug');
    cy.wait(2000);

    // Click on Content Text and enter content
    cy.get('[contenteditable="true"]')
  .click()
  .clear()
  .type('this is a test content', { force: true })
    // Click on Submit Button
    cy.xpath('/html/body/div[3]/div/div[1]/div/div/div[3]/button[1]').click();
    cy.wait(2000);
  });
});
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });