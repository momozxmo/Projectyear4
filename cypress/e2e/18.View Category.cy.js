describe('Verify category product', () => {

  it('Run category product', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Category').should('be.visible');

    cy.contains('Women').click();

    cy.contains('Dress').click();

    cy.url().should('include', '/category_products/1');

    cy.contains('Women - Dress Product').should('be.visible');

    cy.contains('Men').click();

    cy.contains('Jeans').click();

    cy.url().should('include', '/category_products/6');

    cy.contains('Men - Jeans Product').should('be.visible');

  });
});