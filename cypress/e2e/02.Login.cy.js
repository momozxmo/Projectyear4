describe('User Login', () => {
    it('Run Login test with correct email and password', () => {
        cy.visit('https://automationexercise.com');

        cy.get('body').should('contain', 'Home');
        //กดSignup / Login
        cy.contains('Signup / Login').click();
        //check page
        cy.contains('Login to your account').should('be.visible');
        cy.url().should('include', '/login');
        //กรอกข้อมูลemail password
        cy.get('input[data-qa="login-email"]').type('Testuser@User.com');
        cy.get('input[data-qa="login-password"]').type('qwertyu');
        //กดปุ่มlogin
        cy.get('button[data-qa="login-button"]').click();
        //check user
        cy.contains('Logged in as').should('contain', 'Test User');


    })
})