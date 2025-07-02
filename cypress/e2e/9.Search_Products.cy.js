describe('Verify search functionality', () => {

  it('Run Search Products', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.get('#search_product').type('Full Sleeves Top Cherry - Pink');
    cy.get('#submit_search').click();

    cy.contains('Searched Products').should('be.visible');

    cy.get('.productinfo.text-center').should('have.length.greaterThan', 0);
    cy.contains('Full Sleeves Top Cherry - Pink').should('be.visible');

  });
});