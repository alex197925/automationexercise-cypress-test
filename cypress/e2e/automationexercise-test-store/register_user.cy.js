/** @format */

/// <reference types="cypress" />

describe.only("Create, Register, Signup new user", () => {
  let randomString = Math.random().toString(36).substring(7);
  let email = "automationexercise_" + randomString + "@gmail.com";
  let password = Math.random() * 10;

  beforeEach(() => {
    cy.visit("https://automationexercise.com/").window("be.visible");
    cy.get("[href='/login']").click();
    cy.get(".signup-form").contains("New User Signup!").should("be.visible");
  });
  it("Validate Signup", () => {
    cy.get('[data-qa="signup-name"]').type("John");
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get(".login-form")
      .contains("Enter Account Information")
      .should("be.visible");
    cy.get("#id_gender1").click();
    cy.get('[data-qa="password"]').type(password);
  });
});
