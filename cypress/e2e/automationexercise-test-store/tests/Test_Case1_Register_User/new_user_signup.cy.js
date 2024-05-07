/** @format */

///  <reference types="Cypress" />

describe("Test Signup new user email, name...", () => {
  const userName = "Cristoph";
  const email = `${Date.now()}@gmail.com`;
  const password = Math.random() * 10;

  beforeEach(() => {
    cy.navigateTo_Automationexercise_Loginpage();
    cy.get('[data-qa="signup-name"]').type(userName);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click({ force: true });
  });
  it("Verify that 'ENTER ACCOUNT INFORMATION' is visible", () => {
    cy.get(".login-form, h2")
      .contains("Enter Account Information")
      .should("to.be.visible");
  });

  // ENTER ACCOUNT INFORMATION
  it("Check and validate checkbox and password", () => {
    cy.get('[type="radio"]').first().as("option-1");
    cy.get("@option-1").check().should("be.checked");
    cy.get('[data-qa="password"]').type(password);
  });

  it.only("Validate date of birth", () => {
    cy.get('[data-qa="days"]').select("12");
    cy.get('[data-qa="months"]').select("June");
    cy.get('[data-qa="years"]').select("1984");
  });
});
