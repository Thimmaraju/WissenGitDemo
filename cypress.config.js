const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    //"videosFolder": "cypress/Raju",
    //"video" :true,
    "projectId": "9xbn7x",
    "specPattern": "**/*.feature",
    "videoCompression" : 0,
    //"viewportWidth": 1000,
    //"viewportHeight" :1000,
    "defaultCommandTimeout" :20000,
    "pageLoadTimeout" : 120000,
    "retries": { "runMode": 2, "openMode": 3 },
    "env":{

         "clienturl" : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
         "username" : "Admin",
         "password" : "admin123"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
