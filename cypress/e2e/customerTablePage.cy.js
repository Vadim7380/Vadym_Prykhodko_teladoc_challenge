import customerTablePagePO from './customerTablePagePO.cy.js';

describe ('customerTablePage', ()=>{
   
    const page = new customerTablePagePO();

    beforeEach('Page Open', ()=>{

        cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/');

        // validate that the url is correct
        cy.url().should('contain', '/angularjs-protractor/webtables/');
       
    })

    it ('Add a user and validate the user has been added to the table', ()=>{

      //add user button
      page.addUserButton().should('be.visible');
      page.addUserButton().click();

      //fill modal
      page.firstNameValue().should('be.visible');
      page.firstNameValue().type('Vadym');
      page.lastNameValue().should('be.visible');
      page.lastNameValue().type('Vadym2');
      page.userNameValue().should('be.visible');
      page.userNameValue().type('Vadym3');
      page.passwordValue().should('be.visible');
      page.passwordValue().type('Password1');
      page.companyAaaRadioButton().should('be.visible');
      page.companyAaaRadioButton().check();
      page.companyBbbRadioButton().should('be.visible');
      page.roleDropDown().should('be.visible');
      page.roleDropDown().select('Customer');
      page.emailValue().should('be.visible');
      page.emailValue().type('Vadym@gmail.com');
      page.cellPhoneValue().should('be.visible');
      page.cellPhoneValue().type('303-000-1122');
      page.closeButton().should('be.visible');
      page.saveButton().should('be.visible');
      page.saveButton().click();


      //validate the new user has been added
      page.searchValue().should('be.visible');
      page.searchValue().type('Vadym');
      page.firstNameCell().should('contain', 'Vadym');
      page.lastNameCell().should('contain', 'Vadym2');
      page.userNameCell().should('contain', 'Vadym3');
      page.customerCell().should('contain', 'Company AAA');
      page.roleCell().should('contain', 'Customer');
      page.emailCell().should('contain', 'Vadym@gmail.com');
      page.cellPhoneCell().should('contain', '303-000-1122');
  
    })

    it('Delete the user "novak" from the table and validate the user has been deleted.', ()=>{

      //delete "novak"
      page.searchValue().should('be.visible');
      page.searchValue().type('novak');
      page.crossShapeIcon().click();
      
      //modal confirmation dialog
      page.okButton().should('be.visible');
      page.okButton().click();

      //validate validate the user has been deleted
      page.searchValue().clear();
      page.searchValue().type('novak');
      page.firstNameCell().should('not.exist');

    })

})