const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7wh48y",
  env: {
    MAILSLURP_API_KEY: 
      "ba9885d6654edba7d7cb2248411da66b038f711fced627bf723ec822770c1a2b",
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});