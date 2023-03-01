const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "zguqum",
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
