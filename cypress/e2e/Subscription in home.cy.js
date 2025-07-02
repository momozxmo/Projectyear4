describe('Verify subscription functionality', () => {

  it('Run Subscription in Home', () => {
    cy.visit('https://automationexercise.com');

        cy.get('body').should('contain', 'Home');

        cy.scrollTo('bottom');

        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('test@example.com');

        cy.get('#subscribe').click();

        cy.contains('You have been successfully subscribed!').should('be.visible');
      });
    
    });