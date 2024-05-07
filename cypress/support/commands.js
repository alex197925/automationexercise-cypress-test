/** @format */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("navigateTo_Automationexercise_Homepage", () => {
  cy.visit("https://automationexercise.com/").window("be.visible");
  cy.get('[href="/login"]').should("contain", "Signup / Login").click();
});

Cypress.Commands.add("navigateTo_Automationexercise_Loginpage", () => {
  cy.visit("/" + "/login");
  cy.get(".signup-form > h2").should("be.visible", "New User Signup!");
});

//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
