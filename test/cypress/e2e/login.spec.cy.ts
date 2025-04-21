describe('login', () => {

  it('passes', () => {

    cy.visit('/');
    cy.get('[data-cy="auth-button"]').click();
    cy.get('.q-tab--inactive > .q-tab__content > .q-tab__label').click();
    cy.get('[data-cy="signup"] input[type="email"]').type(`${Date.now()}@test56789.be`);
    cy.get('input[autocomplete="new-password"]').each(($el) => {

      cy.wrap($el).type('test123456');

    });
    cy.get('.block').click();
    cy.get('.q-avatar__content').click();
    cy.get('.q-item__section > .q-btn > .q-btn__content').click();
  });

});
