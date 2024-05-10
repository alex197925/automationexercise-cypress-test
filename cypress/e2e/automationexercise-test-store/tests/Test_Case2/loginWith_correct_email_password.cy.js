/** @format */

import HomePage_PO from "../../../../support/pageObjects/HomePage_PO";
import LoginPage_PO from "../../../../support/pageObjects/LoginPage_PO";
describe("Login User with correct email and password", () => {
  //   const homepage_PO = new HomePage_PO();

  beforeEach(() => {
    HomePage_PO.visitHomepage();
    HomePage_PO.clickOnSignup();
  });

  it("Title:Login to your account is visible ", () => {
    LoginPage_PO.titleToYourAccountIsVisible();
  });

  it("Enter correct email and password", () => {
    LoginPage_PO.emailInput();
    LoginPage_PO.passwordInput();
    LoginPage_PO.clickLoginBtn();
    LoginPage_PO.loggedUserNameIsVisible();
    LoginPage_PO.clickDeleteBtn();
  });

  // it("Verify that 'Logged in as username' is visible", () => {
  //   LoginPage_PO.loggedUserNameIsVisible();
  // });
});
