describe('login', () => {
  it('passes', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.bg-primary > .q-btn__content').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.q-tab--inactive > .q-tab__content > .q-tab__label').click();
    cy.get('input[type="email"]').type(`${new Date().toISOString()}@test56789.be`);
    cy.get('input[autocomplete="new-password"]').each(($el) => {
      cy.wrap($el).type('test123456');
    });
    cy.get('.block').click();
    cy.get('.q-avatar__content').click();
    cy.get('.q-item__section > .q-btn > .q-btn__content').click();
    /* ==== End Cypress Studio ==== */
  })
})
