describe('Verify scroll without arrow', () => {

  it('Run scroll without arrow', () => {
    cy.visit('https://automationexercise.com');

        cy.get('body').should('contain', 'Home');

        cy.scrollTo('bottom');

        cy.contains('Subscription').should('be.visible');

        cy.scrollTo('top');

        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
        });
        
});