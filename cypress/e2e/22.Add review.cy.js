describe('Verify Review product', () => {

  it('Run Review product', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.get('.product-image-wrapper').first().contains('View Product').click();

    cy.url().should('include', '/product_details');

    cy.contains('Write Your Review').should('be.visible');

    cy.get('#name').type('Tiger');
    cy.get('#email').type('Tiger@example.com');
    cy.get('#review').type('This is a great product!');
    cy.get('#button-review').click();

    cy.contains('Thank you for your review').should('be.visible');
    });
    
});