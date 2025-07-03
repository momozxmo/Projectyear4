const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
 
module.exports = defineConfig({
  projectId: "7qpyxu",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      mochawesome(on); // ✅ enable reporter plugin
    },
  },
});