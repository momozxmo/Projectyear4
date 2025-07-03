describe('Verify Review product', () => {

  it('Run Review product', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.scrollTo(0, 7500);
    cy.get('h2.title.text-center').contains('recommended items').should('be.visible');

    cy.get('#recommended-item-carousel')
    .find('.productinfo')
    .first()
    .contains('Add to cart').click({force: true});

    cy.contains('View Cart').click();

    cy.get('.cart_info tbody tr').should('have.length', 1);
    });
    
});