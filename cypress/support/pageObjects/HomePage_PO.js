/** @format */

class HomePage_PO {
  elements = {
    signupBtn: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
  };

  visitHomepage() {
    cy.visit("/").window("be.visible");
  }

  clickOnSignup() {
    this.elements.signupBtn().click();
  }
}

module.exports = new HomePage_PO();
