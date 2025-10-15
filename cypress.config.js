const { defineConfig } = require("cypress")
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
      baseUrl: process.env.BASE_URL,
      defaultCommandTimeout: 10000,
      viewportWidth: 1920,
      viewportHeight: 1080,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
