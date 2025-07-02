describe('Verify Products details', () => {

  it('Run All products details', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.get('.product-image-wrapper').first().contains('View Product').click();

    cy.url().should('include', '/product_details');

    cy.get('.product-information').within(() => {
        cy.get('h2').should('be.visible');
        cy.contains('Category').should('be.visible');
        cy.contains('Rs.').should('be.visible');
        cy.contains('Availability').should('be.visible');
        cy.contains('Condition').should('be.visible');
        cy.contains('Brand').should('be.visible');
    });

  });
});