/** @format */

///  <reference types="Cypress" />

describe("Verify that home page is visible successfully", () => {
  it("Confirming correct navigation to home and login pages", () => {
    cy.navigateTo_Automationexercise_Homepage();
  });
});
