// Import necessary Cypress plugins
import 'cypress-xpath'; // If you use XPath selectors

describe('Navigation Test', () => {
  before(() => {
    cy.visit('https://dev-autoport.dealerimagepro.com/auth/login'); // Replace with your actual URL or navigation to the required page
  });

  it('should navigate through menus', () => {

     // Replace with your actual URL

    // Enter username
    cy.get('#username').type('kashmeera.kadachhi@eryushion.com');

    // Enter password
    cy.get('#password').type('Ka@shu3011');

    // Click login button
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div/div/form/button').click();
   
   
    cy.wait(3000);

    // Click on Dealercomparison
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[3]/a/i').click();
    cy.wait(3000); // Wait to simulate delay
    
      //click on edit tracker 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[4]/a/i').click();
    cy.wait(3000);
    
     //click on MAVIS Menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[4]/a/i').click();
    cy.wait(3000);
    
      //click on exports menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[6]/a/i').click();
    cy.wait(3000);
    
      //click on import menu
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[7]/a/i').click();
    cy.wait(3000);
    
    //click on Inventory menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[8]/a/i').click();
    cy.wait(3000);
    
    //click on Dealer Profile menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[9]/a/i').click();
    cy.wait(3000);
    
    //click on Profiles menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[10]/a/i').click();
    cy.wait(3000);
    
    //click on Accounts Menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[11]/a/i').click();
    cy.wait(3000);
    
     //click on Quality control menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[12]/a/i').click();
    cy.wait(3000);
    
    //click on edits&flags menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[12]/a/i').click();
    cy.wait(3000);
    
      //click on video Menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[14]/a/i').click();
    cy.wait(3000);
    
    //click on insta360 menu 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[15]/a/i').click();
    cy.wait(3000);
    
    //click on file manager 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[17]/a/i').click();
    cy.wait(3000);
    
     //click on Dealer Settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/span').click();
    cy.wait(3000);
    
     //click on PA Guide Order 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/ul/li/a[1]/i').click();
    cy.wait(3000);
    
      //click Export Order 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/ul/li/a[2]/i').click();
    cy.wait(3000);

    //click Mavis Settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/ul/li/a[3]/i').click();
    cy.wait(3000);

    //click on video generation 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/ul/li/a[4]/i').click();
    cy.wait(3000);

    //click on youtube thumbnail
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[19]/ul/li/a[5]/i').click();
    cy.wait(3000);


    //click on global settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/span').click();
    cy.wait(3000);

    //click on PA Setting
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[1]/i').click();
    cy.wait(3000);

    //click on Export IMS
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[2]/i').click();
    cy.wait(3000);

    //click on Import IMS
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[3]/i').click();
    cy.wait(3000);

    //click on Master compositions 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[4]/i').click();
    cy.wait(3000);

    //click on Default Guides
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[5]/i').click();
    cy.wait(3000);

    //click on Mavis Presets
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[6]/i').click();
    cy.wait(3000);

    //clikc on Feature icons
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[7]/i').click();
    cy.wait(3000);

    //click on Flags
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[8]').click();
    cy.wait(3000);

    //click on Body Style
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[9]/i').click();
    cy.wait(3000);

    //click API Key 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[10]/i').click();
    cy.wait(3000);

    //click report settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[11]/i').click();
    cy.wait(3000);

    //click retro apply background
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[12]/i').click();
    cy.wait(3000);

    //click report statistics
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[13]/i').click();
    cy.wait(3000);

    //click manage annoucement 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[14]/i').click();
    cy.wait(3000);

    //click Autoport Settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[15]/i').click();
    cy.wait(3000);

    //click Promo banner FAQ
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[16]/i').click();
    cy.wait(3000);

    //click Window sticker Pricing 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[20]/ul/li/a[17]/i').click();
    cy.wait(3000);

    //click on invocing 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[21]/a/i').click();
    cy.wait(3000);

    //click accounting dropdown
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[22]/span/i').click();
    cy.wait(3000);

    //click on invoices 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[22]/ul/li/a[1]/i').click();
    cy.wait(3000);

    //click autoport invoices
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[22]/ul/li/a[2]/i').click();
    cy.wait(3000);

    //click download reports
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[22]/ul/li/a[3]/i').click();
    cy.wait(3000);

    //click invoice settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[22]/ul/li/a[4]/i').click();
    cy.wait(3000);

    //click invoice logs
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[22]/ul/li/a[5]/i').click();
    cy.wait(3000);

    //click on LSP invoicing dropdown
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[23]/span').click();
    cy.wait(3000);

    //click on invocing settings
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[23]/ul/li/a[1]/i').click();
    cy.wait(3000);

    //click on invoice logs
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[23]/ul/li/a[2]/i').click();
    cy.wait(3000);


    //click on admin logs
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[24]/a/i').click();
    cy.wait(3000);

    //click VIN Status Tracker
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[25]/a/i').click();
    cy.wait(3000);

    //click on User roles 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[26]/a/i').click();
    cy.wait(3000);

    //click on developer access 
    cy.xpath('//*[@id="root"]/div[1]/aside/div[2]/div/div[2]/ul/li[27]/a/i').click();
    cy.wait(3000);









  });
});
3