/** @format */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    video: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://automationexercise.com/",
  },
});
