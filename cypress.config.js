const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
  "viewportWidth": 1200,
  "viewportHeight": 800,
  //"experimentalSessionAndOrigin": true,
  setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 
specPattern: 'cypress/integration/example/*.js',



  },
 
});
