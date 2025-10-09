/**
 * US-084 - Descripción del producto (index.html)
 * Verifica que se renderizan título y texto descriptivo.
 */
const fs = require('fs');
const path = require('path');

describe('US-084 | Descripción del producto', () => {
  let html;

  beforeAll(() => {
    // Carga el HTML real de la landing
    const filePath = path.join(process.cwd(), 'docs', 'index.html');
    html = fs.readFileSync(filePath, 'utf8');
  });

  beforeEach(() => {
    // Resetea el DOM con el contenido del index
    document.body.innerHTML = html;

    // Carga tu JS principal; registra listeners y lógica de i18n
    jest.isolateModules(() => {
      // Ajusta la ruta si tu estructura difiere
      require('../../docs/js/main.js');
    });

    // Dispara el evento que tu main.js escucha
    document.dispatchEvent(new Event('DOMContentLoaded'));
  });

  test('renderiza el título de la sección', () => {
    const title =
      document.querySelector('[data-testid="hero-title"]') ||
      document.querySelector('[data-i18n="hero.title"]');

    expect(title).toBeTruthy();
    // El texto no debe estar vacío (pasa tras aplicar traducciones)
    expect(title.textContent.trim().length).toBeGreaterThan(0);

    // (Opcional, si quieres ser más estricto con tu copy actual)
    // expect(title.textContent).toMatch(/CUIDA|TUKUNTECH/i);
  });

  test('renderiza el texto descriptivo', () => {
    const desc =
      document.querySelector('[data-testid="hero-subtitle"]') ||
      document.querySelector('[data-i18n="hero.subtitle"]');

    expect(desc).toBeTruthy();
    expect(desc.textContent.trim().length).toBeGreaterThan(0);
  });
});