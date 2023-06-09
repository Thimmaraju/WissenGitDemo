

describe('Automation Test Suite - Fixtures', function () {

    
    before(function () {
      cy.fixture('module1/register').then(function (data) {
        this.data = data;
      })
    })
  
    it('Cypress Test Case - Understanding Fixtures', function () {
  
      
      cy.visit('https://shop.demoqa.com/my-account/');

      cy.wait(5000)
      //cy.get('#reg_username').type(this.data.username);`
      cy.enterText("#reg_username", this.data.username )
      cy.wait(5000)
      //cy.get('#reg_email').type(this.data.emailaddress);
      cy.enterText('#reg_email', this.data.emailaddress)

      cy.wait(5000)
      //cy.get('#reg_password').type(this.data.weakpassword)
      cy.enterText("//*[@id='reg_password']",this.data.weakpassword )
      cy.wait(5000)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
      //or

      cy.elementTodisabled('.woocommerce-Button')
      //cy.get('.woocommerce-Button').should('be.disabled');
       cy.wait(5000)
      // Clicking on to register on the Website by entering new password 
    //   cy.get('#reg_password').clear();

    //   cy.wait(10000)
      cy.get('#reg_password').clear().type(this.data.strongpassword);
      cy.wait(15000)
      cy.get('.woocommerce-Button').click();
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', this.data.username);

      //or
      cy.get('#username').should('have.attr', 'value', this.data.username);
    })


  })
  
  