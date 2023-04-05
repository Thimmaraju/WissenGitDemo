const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl":"https://www.google.com",
    "videosFolder": "cypress/Raju",
    "video" :true,
    "videoCompression" : 0,
    //"viewportWidth": 1000,
    //"viewportHeight" :1000,
    "defaultCommandTimeout" :20000,
    "pageLoadTimeout" : 120000,
    "env":{

         "clienturl" : "https://docs.cypress.io/guides/references/configuration",
         "username" : "Admin",
         "password" : "admin123"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
