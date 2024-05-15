/** @format */

describe("Test: Signup new user email, name...", () => {
  beforeEach(() => {
    cy.navigateTo_Automationexercise_Homepage();
    cy.navigateTo_Automationexercise_Loginpage();
    cy.user_Name();
    cy.email();
    cy.click_Signup_Button();
    cy.password();
  });

  it("Should register new user", () => {
    cy.userRegistration();
  });

  it("Should delete an existing user", () => {
    cy.deleteUser();
  });
});
