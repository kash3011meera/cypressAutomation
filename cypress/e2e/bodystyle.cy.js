import 'cypress-xpath';

describe('Flags', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    cy.login('kashmeera.kadachhi@eryushion.com', 'Ka@shu3011');

       });

  it('should log in and perform actions on the Master Composition page', () => {

        cy.xpath('//span[contains(text(),"Global Settings")]', { timeout: 10000 })
      .click({ force: true });

      //click on body style page 
      cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[21]/ul/li/a[9]/i').click();

      //click on + icon 
      cy.xpath('//*[@id="tooltipAddNew"]').click();


      cy.get('input[name="bt_enname"]')
  .should('be.visible')
  .clear()
  .type('Sedan');

cy.get('input[name="bt_esname"]')
  .should('be.visible')
  .clear()
  .type('sedán');

 cy.get('#react-select-3-input')
  .click()
  .type('Bus');

cy.contains('Bus').click();
  })
})