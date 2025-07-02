describe('Verify Remove product', () => {

  it('Run Remove product', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.get('.productinfo').eq(0).trigger('mouseover');
    cy.get('.productinfo').eq(0).find('.add-to-cart').click();

    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');

    cy.get('.cart_quantity_delete').first().click();

    cy.get('.cart_info tbody tr').should('have.length', 0);
    });
    
});