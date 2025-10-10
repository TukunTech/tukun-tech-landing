@us-084 @acceptance
Feature: Visualización de descripción del producto
  As a visitor
  I want to see a clear explanation of Tukun Tech
  So that I can understand its purpose quickly

  Scenario: Usuario visualiza título, descripción y CTA del HERO
    Given el visitante abre la landing
    When la página carga correctamente
    Then el título principal del hero es visible y no está vacío
    And el párrafo descriptivo del hero es visible y no está vacío
    And el botón de contacto del hero es visible
