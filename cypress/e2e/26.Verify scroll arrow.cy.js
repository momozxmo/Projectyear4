describe('Verify scroll arrow', () => {

  it('Run scroll arrow', () => {
    cy.visit('https://automationexercise.com');

        cy.get('body').should('contain', 'Home');

        cy.scrollTo('bottom');

        cy.contains('Subscription').should('be.visible');

        cy.get('#scrollUp').should('be.visible').click();

        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

  });

});