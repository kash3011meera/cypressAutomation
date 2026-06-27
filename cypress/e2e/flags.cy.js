import 'cypress-xpath';

describe('Flags', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    cy.login('kashmeera.kadachhi@eryushion.com', 'Ka@shu3011');

   
    });

  it('should log in and perform actions on the Master Composition page', () => {

        cy.xpath('//span[contains(text(),"Global Settings")]', { timeout: 10000 })
      .click({ force: true });

    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[21]/ul/li/a[8]/i').click();

    cy.xpath('//*[@id="root"]/div[1]/div/div/div/div[2]/div[2]/div/div/ul/li[2]/a').click();

    cy.xpath('//*[@id="root"]/div[1]/div/div/div/div[2]/div[2]/div/div/ul/li[3]/a').click();

    cy.xpath('//*[@id="tooltipAddNew"]/i').click();

    cy.get('#title').type('Testing QA');

    cy.get('textarea[name="desc"]')
      .clear()
      .type('This is a sample flag description.');

    // cy.get('input[role="combobox"]')
    //   .click()
    //   .type('{downarrow}{enter}');

    cy.contains('Category')
  .parent()
  .eq(0) 
  .find('input[role="combobox"]')
  .click()
  .type('Category Name{enter}');
  })

});