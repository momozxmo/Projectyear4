describe('User Login', () => {
    it('Run Login test with incorrect email and password', () => {
        cy.visit('https://automationexercise.com');

        cy.get('body').should('contain', 'Home');
        //กดSignup / Login
        cy.contains('Signup / Login').click();
        //check page
        cy.contains('Login to your account').should('be.visible');
        cy.url().should('include', '/login');
        //กรอกข้อมูลemail passwordที่ผิด
        cy.get('input[data-qa="login-email"]').type('Testuserr@User.com');
        cy.get('input[data-qa="login-password"]').type('qwertyu');
        //กดปุ่มlogin
        cy.get('button[data-qa="login-button"]').click();

        cy.contains('Your email or password is incorrect!').should('be.visible');
        })
})