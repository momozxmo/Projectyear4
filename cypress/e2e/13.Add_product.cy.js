describe('Verify Add product functionality', () => {

  it('Run Add Products', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.scrollTo( 0, 500);

    cy.get('.productinfo').eq(0).trigger('mouseover');
    cy.get('.productinfo').eq(0).find('.add-to-cart').click();

    cy.contains('Continue Shopping').click();

    cy.get('.productinfo').eq(1).trigger('mouseover');
    cy.get('.productinfo').eq(1).find('.add-to-cart').click();

    cy.contains('View Cart').click();

    cy.get('.cart_info tbody tr').should('have.length', 2);

    cy.get('.cart_info tbody tr').each(($row, index) => {
      cy.wrap($row).find('.cart_quantity').should('contain', '1');
      cy.wrap($row).find('.cart_price').should('be.visible');
      cy.wrap($row).find('.cart_total').should('be.visible');
    });
    });
});
