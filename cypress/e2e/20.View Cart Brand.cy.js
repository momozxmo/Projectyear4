describe('Verify Products Brand', () => {

  it('Run Products Brand', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.contains('Brands').should('be.visible');

    cy.contains('Polo').click();
    cy.url().should('include', '/brand_products/Polo');
    cy.contains('Brand - Polo Products').should('be.visible');

    cy.contains('Madame').click();
    cy.url().should('include', '/brand_products/Madame');
    cy.contains('Brand - Madame Products').should('be.visible');
  });
});
