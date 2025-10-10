const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    video: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // no events por ahora
    },
  },
});
