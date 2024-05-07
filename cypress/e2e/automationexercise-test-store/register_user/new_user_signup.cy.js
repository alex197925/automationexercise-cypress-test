/** @format */

///  <reference types="Cypress" />

describe("Test Signup new user email, name", () => {
  it("Should be able to submit a successful submission via signup form", () => {
    const userName = "Alexandr";

    cy.navigateTo_Automationexercise_Loginpage();

    cy.get('[data-qa="signup-name"]').type(userName);
    cy.get('[data-qa="signup-email"]').type(`${Date.now()}@gmail.com`);
    cy.get('[data-qa="signup-button"]').click({ force: true });
  });
});
