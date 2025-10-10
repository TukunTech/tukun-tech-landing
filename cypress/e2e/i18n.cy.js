/**
 * US-094 – Cambio de idioma (Integration)
 * Verifica que:
 *  - Al cargar en ES se muestren textos en español
 *  - Al pulsar #lang-switch cambie a EN (DOM + html[lang] + localStorage)
 *  - Al volver a pulsar regrese a ES
 */
describe('US-094 | Cambio de idioma', () => {
  beforeEach(() => {
    // Fuerza un estado inicial determinista en ES
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.setItem('lang', 'es');
        // (Opcional) forzar idioma del navegador:
        Object.defineProperty(win.navigator, 'language', { value: 'es-ES', configurable: true });
      }
    });
  });

  it('cambia de ES -> EN -> ES mostrando el texto correcto', () => {
    // Asegura que partimos en ES
    cy.get('html').should('have.attr', 'lang', 'es');
    cy.get('#lang-switch').should('contain', 'ESP');

    // El título del hero en ES debe contener "CUIDA" (tu copy actual)
    cy.get('[data-i18n="hero.title"]').should('be.visible').and('contain', 'CUIDA');

    // Cambia a EN
    cy.get('#lang-switch').click();
    cy.get('html').should('have.attr', 'lang', 'en');
    cy.get('#lang-switch').should('contain', 'EN');

    // El título del hero en EN debe contener "PROTECT"
    cy.get('[data-i18n="hero.title"]').should('contain', 'PROTECT');

    // Verifica que localStorage se actualizó a 'en'
    cy.window().then((win) => {
      expect(win.localStorage.getItem('lang')).to.eq('en');
    });

    // Vuelve a ES
    cy.get('#lang-switch').click();
    cy.get('html').should('have.attr', 'lang', 'es');
    cy.get('#lang-switch').should('contain', 'ESP');
    cy.get('[data-i18n="hero.title"]').should('contain', 'CUIDA');

    // Y localStorage vuelve a 'es'
    cy.window().then((win) => {
      expect(win.localStorage.getItem('lang')).to.eq('es');
    });
  });
});
