describe('User Register', () => {

  it('Run register test with existing email', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');
    //กดSignup / Login
    cy.contains('Signup / Login').click();
    cy.url().should('include', '/login');
    //check page
    cy.contains('New User Signup').should('be.visible');
    //กรอกข้อมูลusername email
    cy.get('input[data-qa="signup-name"]').type('Test User');
    cy.get('input[data-qa="signup-email"]').type('Testuser@User.com');
    //กดปุ่มสมัคร
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Email Address already exist!').should('be.visible');
  })
})