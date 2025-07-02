describe('Verify Add quantity functionality', () => {

  it('Run Add quantity', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.get('.product-image-wrapper').first().contains('View Product').click();
    cy.url().should('include', '/product_details');
    cy.get('.product-information').should('be.visible');

    cy.get('#quantity').clear().type('4'); 

    cy.get('.cart').contains('Add to cart').click();

    cy.contains('View Cart').click();

    cy.get('.cart_quantity').should('contain', '4');

    });
    
});