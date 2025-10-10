import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('el visitante abre la landing', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      // Forzamos idioma ES para evitar ambigüedad (tu main.js soporta ES/EN)
      win.localStorage.setItem('lang', 'es');
    }
  });
});

When('la página carga correctamente', () => {
  cy.document().its('readyState').should('eq', 'complete');
});

Then('el título principal del hero es visible y no está vacío', () => {
  cy.get('[data-testid="hero-title"], [data-i18n="hero.title"]')
    .should('be.visible')
    .invoke('text')
    .then(t => expect(t.trim().length).to.be.greaterThan(0));
});

Then('el párrafo descriptivo del hero es visible y no está vacío', () => {
  cy.get('[data-testid="hero-subtitle"], [data-i18n="hero.subtitle"]')
    .should('be.visible')
    .invoke('text')
    .then(t => expect(t.trim().length).to.be.greaterThan(0));
});

Then('el botón de contacto del hero es visible', () => {
  cy.get('#open-contact, [data-testid="cta-contact"], [data-i18n="hero.cta.contact"]').should('be.visible');
});
