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

  it("Register User", () => {
    cy.enterAccount_Information_Is_Visible();
    cy.fillTitle();
    cy.selectDateOfBirth();
    cy.Select_Newsletter_Option_Checkboxes();
  });
});
