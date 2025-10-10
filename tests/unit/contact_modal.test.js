/**
 * US-088 – Modal de contacto (Unit)
 * Verifica que el modal abre con #open-contact y se cierra con [data-close] y con ESC.
 */
const fs = require('fs');
const path = require('path');

describe('US-088 | Modal de contacto', () => {
  let html;

  beforeAll(() => {
    const filePath = path.join(process.cwd(), 'docs', 'index.html');
    html = fs.readFileSync(filePath, 'utf8');
  });

  beforeEach(() => {
    // Inyecta el HTML real
    document.body.innerHTML = html;

    // Evita problemas con APIs de ventana en jsdom
    window.scrollTo = () => {};
    // (Opcional) por si llegas a usar alert en pruebas futuras:
    window.alert = jest.fn();

    // Carga tu main.js después de tener el DOM
    jest.isolateModules(() => {
      require('../../docs/js/main.js');
    });

    // Dispara inicializadores
    document.dispatchEvent(new Event('DOMContentLoaded'));
    window.dispatchEvent(new Event('load'));
  });

  const isOpen = (modal) =>
    modal.getAttribute('aria-hidden') === 'false' || modal.classList.contains('is-open');
  const isClosed = (modal) =>
    modal.getAttribute('aria-hidden') === 'true' || !modal.classList.contains('is-open');

  test('abre el modal al hacer clic en #open-contact', () => {
    const openBtn = document.getElementById('open-contact');
    const modal = document.getElementById('contact-modal');

    expect(openBtn).toBeTruthy();
    expect(modal).toBeTruthy();
    expect(isClosed(modal)).toBe(true);

    openBtn.click(); // tu main.js previene el default y abre

    expect(isOpen(modal)).toBe(true);
  });

  test('cierra el modal al hacer clic en la X (data-close)', () => {
    const openBtn = document.getElementById('open-contact');
    const modal = document.getElementById('contact-modal');
    const closeBtn = modal.querySelector('.modal__close[data-close]');

    openBtn.click();
    expect(isOpen(modal)).toBe(true);

    closeBtn.click(); // listener a [data-close]
    expect(isClosed(modal)).toBe(true);
  });

  test('cierra el modal al hacer clic en el backdrop (data-close)', () => {
    const openBtn = document.getElementById('open-contact');
    const modal = document.getElementById('contact-modal');
    const backdrop = modal.querySelector('.modal__backdrop[data-close]');

    openBtn.click();
    expect(isOpen(modal)).toBe(true);

    backdrop.click(); // el modal escucha clicks y cierra si target tiene data-close
    expect(isClosed(modal)).toBe(true);
  });

  test('cierra el modal con tecla ESC', () => {
    const openBtn = document.getElementById('open-contact');
    const modal = document.getElementById('contact-modal');

    openBtn.click();
    expect(isOpen(modal)).toBe(true);

    const esc = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(esc);

    expect(isClosed(modal)).toBe(true);
  });
});
