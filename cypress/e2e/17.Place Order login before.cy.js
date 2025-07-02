describe('Place Order before login', () => {
    it('Run Place Order', () => {
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

        cy.get('.productinfo').eq(0).trigger('mouseover');
        cy.get('.productinfo').eq(0).find('.add-to-cart').click();

        cy.contains('View Cart').click();
        cy.url().should('include', '/view_cart');
        cy.contains('Proceed To Checkout').click();

        cy.get('#address_delivery').within(() => {
            cy.contains('Mr. Test User').should('be.visible');
            cy.contains('Testcorp').should('be.visible');
            cy.contains('123 Test st').should('be.visible');
            cy.contains('456 Tets st').should('be.visible');
            cy.contains('Bg patum').should('be.visible');
            cy.contains('Singapore').should('be.visible');
            cy.contains('01921474132').should('be.visible');
});

        cy.scrollTo(0, 500);
        cy.get('textarea[name="message"]')
        .should('be.visible')
        .type('ช่วยจัดส่งให้เร็วที่สุดครับ');

        cy.contains('Place Order').click();

        cy.url().should('include', '/payment');

        cy.get('input[data-qa="name-on-card"]').type('Test User');
        cy.get('input[data-qa="card-number"]').type('4111111111111111');
        cy.get('input[data-qa="cvc"]').type('061');
        cy.get('input[data-qa="expiry-month"]').type('06');
        cy.get('input[data-qa="expiry-year"]').type('2025');

        cy.get('button[data-qa="pay-button"]').click();

        cy.contains('Your order has been confirmed!').should('be.visible');

         });
    });