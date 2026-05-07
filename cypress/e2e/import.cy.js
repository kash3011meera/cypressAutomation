import 'cypress-xpath';

describe('Import Page Test', () => {

  before(() => {
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login');

    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');
    cy.get('#password').type('Ka@shu3011');

    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
    cy.wait(3000);
  });

  it('should interact with elements on the Import page', () => {

    cy.wait(3000);

    // Import menu
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[7]/a').click();

    cy.wait(4000);

    // Dealership dropdown
    cy.get('.select-dealership').click();

    cy.get('#react-select-2-input')
      .type('Demonstration Dealership')
      .type('{enter}');

    cy.wait(4000);

    // Click icon
    cy.xpath('//*[@id="root"]/div[1]/div/div/div[2]/div[4]/div/div/div/div/table/tbody/tr[1]/td[2]/div/i')
      .click();

    cy.wait(2000);

    cy.get('button.dropdown-toggle')
  .first()
  .click({ force: true })

cy.contains('Move to...', { timeout: 10000 })
  .should('be.visible')

cy.contains('Move to...')
  .click({ force: true })
  cy.wait(2000);


  //click to close button 
   cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click();
   cy.wait(1000);

    cy.get('button.dropdown-toggle')
  .first()
  .click({ force: true })

cy.contains('div.dropdown-item', 'Download', { timeout: 10000 })
  .should('be.visible')

cy.contains('div.dropdown-item', 'Download')
  .click({ force: true })

   cy.wait(4000);

  cy.get('button.dropdown-toggle')
  .first()
  .click({ force: true })

cy.contains('div.dropdown-item', 'Review Vehicle', { timeout: 10000 })
  .should('be.visible')

cy.contains('div.dropdown-item', 'Review Vehicle')
  .click({ force: true })
  cy.wait(2000);

    cy.get('button.dropdown-toggle')
  .first()
  .click({ force: true })

cy.contains('Rename', { timeout: 10000 })
  .should('be.visible')

cy.contains('Rename')
  .click({ force: true })
  cy.wait(2000);

  cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click();
  cy.wait(1000);

  });

});