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
  cy.get(".signup-form > h2")
    .contains("New User Signup!")
    .should("be.visible", "New User Signup!");
});

Cypress.Commands.add("password", () => {
  const password = Math.random() * 10;
  cy.get('[data-qa="password"]').type(password);
});

Cypress.Commands.add("user_Name", () => {
  const userName = "Cristoph";
  cy.get('[data-qa="signup-name"]').type(userName);
});

Cypress.Commands.add("email", () => {
  const email = `${Date.now()}@gmail.com`;
  cy.get('[data-qa="signup-email"]').type(email);
});

Cypress.Commands.add("click_Signup_Button", () => {
  cy.get('[data-qa="signup-button"]').click({ force: true });
});

Cypress.Commands.add("fillTitle", () => {
  cy.get("#id_gender1").click();
});

Cypress.Commands.add("enterAccount_Information_Is_Visible", () => {
  cy.get('[type="radio"]').first().as("option-1");
  cy.get("@option-1").check().should("be.checked");
});

Cypress.Commands.add("selectDateOfBirth", () => {
  cy.get('[data-qa="days"]').select("12");
  cy.get('[data-qa="months"]').select("June");
  cy.get('[data-qa="years"]').select("1984");
});

Cypress.Commands.add("Select_Newsletter_Option_Checkboxes", () => {
  cy.get("#newsletter").as("our_newsletter");
  cy.get("@our_newsletter").check().should("be.checked");

  cy.get("#optin").as("receive_offer");
  cy.get("@receive_offer").check().should("be.checked");
});

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
