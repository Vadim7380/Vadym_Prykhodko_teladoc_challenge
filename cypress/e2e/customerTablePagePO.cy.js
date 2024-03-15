class customerTablePagePO {


    //add user button
    addUserButton() { return cy.get("button[type='add']");}

    //fill modal
    firstNameValue() { return cy.get("input[name='FirstName']");}
    lastNameValue() { return cy.get("input[name='LastName']");}
    userNameValue() { return cy.get("input[name='UserName']");}
    passwordValue() { return cy.get("input[name='Password']");}
    companyAaaRadioButton() { return cy.get("label:nth-of-type(1) > input[name='optionsRadios']");}
    companyBbbRadioButton() { return cy.get("label:nth-of-type(2) > input[name='optionsRadios']");}
    roleDropDown() { return cy.get("select[name='RoleId']");}
    customerRole()  { return cy.get("select[name='RoleId'] > option[value='1']");}
    emailValue() { return cy.get("input[name='Email']");}
    cellPhoneValue() { return cy.get("input[name='Mobilephone']");}
    closeButton() { return cy.get('.btn.btn-danger');}
    saveButton() { return cy.get('.btn.btn-success');}

    //validate the new user has been added
    searchValue() { return cy.get("input[placeholder='Search']");}
    firstNameCell() { return cy.get('tbody > tr:nth-of-type(1) > td:nth-of-type(1)');}
    lastNameCell() { return cy.get('tr:nth-of-type(1) > td:nth-of-type(2)');}
    userNameCell() { return cy.get('tr:nth-of-type(1) > td:nth-of-type(3)');}
    customerCell() { return cy.get('tr:nth-of-type(1) > td:nth-of-type(5)');}
    roleCell() { return cy.get('tr:nth-of-type(1) > td:nth-of-type(6)');}
    emailCell() { return cy.get('tr:nth-of-type(1) > td:nth-of-type(7)');}
    cellPhoneCell() { return cy.get('tr:nth-of-type(1) > td:nth-of-type(8)');}

    //delete "novak"
    crossShapeIcon() { return cy.get('.icon.icon-remove');}

    //modal confirmation dialog
    okButton() { return cy.get('.btn.ng-scope.ng-binding.btn-primary');}


}

export default customerTablePagePO