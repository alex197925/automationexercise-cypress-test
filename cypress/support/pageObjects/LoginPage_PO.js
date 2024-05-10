/** @format */

class LoginPage_PO {
  titleToYourAccountIsVisible() {
    cy.get(".login-form > h2").should("be.visible");
  }

  emailInput() {
    cy.get('[data-qa="login-email"]').type("thisisvalideemail@gmail.com");
  }

  passwordInput() {
    cy.get('[data-qa="login-password"]').type("thisisvalidpassword");
  }

  clickLoginBtn() {
    cy.get('[data-qa="login-button"]').click();
  }

  loggedUserNameIsVisible() {
    cy.get(":nth-child(10) > a").should("be.visible");
  }

  clickDeleteBtn() {
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
  }

  accountDeleted() {}
}

module.exports = new LoginPage_PO();
