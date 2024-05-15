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
  // const password = Math.random() * 10;
  cy.get('[data-qa="password"]').type("thisisvalidpassword");
});

Cypress.Commands.add("user_Name", () => {
  const userName = "Cristoph";
  cy.get('[data-qa="signup-name"]').type(userName);
});

Cypress.Commands.add("email", () => {
  // const email = `${Date.now()}@gmail.com`;
  cy.get('[data-qa="signup-email"]').type("thisisvalideemail@gmail.com");
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

Cypress.Commands.add("fillName", () => {
  cy.get('[data-qa="first_name"]').type("Cristoph");
});

Cypress.Commands.add("fill_LastName", () => {
  cy.get('[data-qa="last_name"]').type("Smith");
});

Cypress.Commands.add("fill_CompanyName", () => {
  cy.get('[data-qa="company"]').type("Google");
});

Cypress.Commands.add("fill_Address", () => {
  cy.get('[data-qa="address"]').type(
    "1600 Amphitheatre Parkway Mountain View, CA 94043"
  );
});

Cypress.Commands.add("select_Country", () => {
  cy.get('[data-qa="country"]').select("United States");
});

Cypress.Commands.add("fill_State", () => {
  cy.get('[data-qa="state"]').type("California");
});

Cypress.Commands.add("fill_City", () => {
  cy.get('[data-qa="city"]').type("San Francisco");
});

Cypress.Commands.add("fill_ZipCode", () => {
  cy.get('[data-qa="zipcode"]').type("94016");
});

Cypress.Commands.add("fill_PhoneNumber", () => {
  cy.get('[data-qa="mobile_number"]').type("+14155553890");
});

Cypress.Commands.add("click_Button_CreateAccount", () => {
  cy.get('[data-qa="create-account"]').click();
});

Cypress.Commands.add("accountCreated_IsVisible", () => {
  cy.get('[data-qa="account-created"]')
    .contains("Account Created!")
    .should("be.visible");
});

Cypress.Commands.add("click_ContinueButton", () => {
  cy.get('[data-qa="continue-button"]').click();
});

Cypress.Commands.add("userName_IsVisible", () => {
  cy.get(".fa-user").should("be.visible");
});

Cypress.Commands.add("click_DeleteAccount_Button", () => {
  cy.get(".fa-trash-o").click();
});

Cypress.Commands.add("AccountDeletedIs_visible", () => {
  cy.get('[data-qa="account-deleted"]')
    .contains("Account Deleted!")
    .should("be.visible");
});

Cypress.Commands.add("Click_ContinueBtn", () => {
  cy.get('[data-qa="continue-button"]').click();
});

Cypress.Commands.add("userRegistration", () => {
  cy.get('[type="radio"]').first().as("option-1");
  cy.get("@option-1").check().should("be.checked");
  cy.get("#id_gender1").click();
  cy.get('[data-qa="days"]').select("12");
  cy.get('[data-qa="months"]').select("June");
  cy.get('[data-qa="years"]').select("1984");
  cy.get("#newsletter").as("our_newsletter");
  cy.get("@our_newsletter").check().should("be.checked");
  cy.get("#optin").as("receive_offer");
  cy.get("@receive_offer").check().should("be.checked");
  cy.get('[data-qa="first_name"]').type("Cristoph");
  cy.get('[data-qa="last_name"]').type("Smith");
  cy.get('[data-qa="company"]').type("Google");
  cy.get('[data-qa="address"]').type(
    "1600 Amphitheatre Parkway Mountain View, CA 94043"
  );
  cy.get('[data-qa="country"]').select("United States");
  cy.get('[data-qa="state"]').type("California");
  cy.get('[data-qa="city"]').type("San Francisco");
  cy.get('[data-qa="zipcode"]').type("94016");
  cy.get('[data-qa="mobile_number"]').type("+14155553890");
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]')
    .contains("Account Created!")
    .should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
  cy.get(".fa-user").should("be.visible");
})

Cypress.Commands.add("deleteUser", () => {
cy.userRegistration()
cy.get(".fa-trash-o").click();
cy.get('[data-qa="account-deleted"]')
.contains("Account Deleted!")
.should("be.visible");
cy.get('[data-qa="continue-button"]').click();
})

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
