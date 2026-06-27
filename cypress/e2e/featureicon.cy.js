import 'cypress-xpath';
describe('Feature Icon', () => {

   beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    cy.login('kashmeera.kadachhi@eryushion.com', 'Ka@shu3011');

    });

  it('should log in and perform actions on the Master Composition page', () => {

      
    // Click on Dealer Settings
    cy.xpath('//span[contains(text(),"Global Settings")]', { timeout: 10000 })
    .click({force : true});

     cy.wait(3000);

    // Click on Feature Icon 
    cy.xpath('//a[@href="/feature"]//span[contains(text(),"Feature Icon")]').click({force:true});
    cy.wait(3000);

    //click on + icon 
   cy.get('#tooltipAddNew')
  .should('be.visible')
  .click();

  //enter feature name 
 cy.get('#fname').type('My Feature Name');

 cy.get('input[placeholder="Insert tags and press enter"]')
  .type('Tag1{enter}');

cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/sample-image.jpg', {
    force: true
  });

  cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[1]').click();
  cy.wait(1000);

  })
})
