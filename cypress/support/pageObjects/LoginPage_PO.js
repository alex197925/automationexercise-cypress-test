/** @format */

class LoginPage_PO {
  // property selectors
  loginForm = ".login-form > h2";
  emailInputField = '[data-qa="login-email"]';
  passwordInputField = '[data-qa="login-password"]';
  loginButton = '[data-qa="login-button"]';
  loggedUserName = ":nth-child(10) > a";
  deleteButton = ".shop-menu > .nav > :nth-child(5) > a";
  accountDeletedMessage = ""; 


  titleToYourAccountIsVisible() {
    cy.get(this.loginForm).should("be.visible");
  }

  emailInput() {
    cy.get(this.emailInputField).type("thisisvalideemail@gmail.com");
  }

  passwordInput() {
    cy.get(this.passwordInputField).type("thisisvalidpassword");
  }

  clickLoginBtn() {
    cy.get(this.loginButton).click();
  }

  loggedUserNameIsVisible() {
    cy.get(this.loggedUserName).should("be.visible");
  }

  clickDeleteBtn() {
    cy.get(this.deleteButton).click();
  }

  accountDeleted() {}
}

module.exports = new LoginPage_PO();
