
describe('User contact us', () => {

  it('Run Contact us test', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');
    //กดSignup / Login
    cy.contains('Contact us').click();

    cy.contains('h2.title.text-center', 'Get In Touch').should('be.visible');
    cy.url().should('include', '/contact_us');

    cy.get('input[data-qa="name"]').type('Test User');
    cy.get('input[data-qa="email"]').type('Testuser@User.com');
    cy.get('input[data-qa="subject"]').type('Test subject contact me please');
    cy.get('#message').type('Test messaage contace me please');

    cy.get('input[name="upload_file"]').attachFile('testpng.png')
    
    cy.get('input[name="upload_file"]').then((el) => {
        expect(el[0].files[0].name).to.eq('testpng.png')
    })
    cy.get('input[data-qa="submit-button"]').click();
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

    cy.contains('Home').click();

    cy.get('body').should('contain', 'Home');
  })
})