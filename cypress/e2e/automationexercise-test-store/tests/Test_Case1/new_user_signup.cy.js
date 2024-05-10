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
    cy.fillName();
    cy.fill_LastName();
    cy.fill_CompanyName();
    cy.fill_Address();
    cy.select_Country();
    cy.fill_State();
    cy.fill_City();
    cy.fill_ZipCode();
    cy.fill_PhoneNumber();
    cy.click_Button_CreateAccount();
    cy.accountCreated_IsVisible();
    cy.click_ContinueButton();
    cy.userName_IsVisible();
    // cy.click_DeleteAccount_Button();
    cy.AccountDeletedIs_visible();
    // cy.Click_ContinueBtn();
  });
});
