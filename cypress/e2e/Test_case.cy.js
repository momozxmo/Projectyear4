describe('Verify Test Cases page', () => {

  it('Run Verify test case page', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');
    
    cy.contains('Test Cases').click();

    cy.get('h2.title.text-center b').should('contain.text', 'Test Cases');
    cy.url().should('include', '/test_cases');

  });
});