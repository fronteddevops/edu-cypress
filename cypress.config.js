const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api-dev.pastpaperlibrary.com',
    setupNodeEvents(on, config) {
      // Adding Cucumber preprocessor
      addCucumberPreprocessorPlugin(on, config);

      // Using esbuild with the correct plugin setup
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Setting up Mochawesome reporter
      mochawesome(on);

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    screenshotsFolder: 'cypress/screenshots',
    stepDefinitions: 'cypress/support/step_definitions/**/*.{js,ts}',

    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
