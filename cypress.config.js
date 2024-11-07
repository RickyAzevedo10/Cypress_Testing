const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true, //correr todos os testes ao mesmo tempo
  },
  chromeWebSecurity: false, //foi necessário colocar isto para efetuar a pesquisa por clube quando faziamos o click da opção da lista
});
