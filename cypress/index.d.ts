/// <reference types="cypress" />

// Just for showcase, remove this
declare namespace Cypress {
  interface Chainable {
    readonly typeText(value: string): Chainable<Subject>;
  }
}
