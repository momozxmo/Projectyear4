describe('Verify search product and verify cart after login', () => {

  it('Run search and verify', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.url().should('include', '/products');

    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    cy.get('#search_product').type('Summer White Top')
    cy.get('#submit_search').click();

     cy.contains('Searched Products').should('be.visible');

    cy.get('.productinfo.text-center').should('have.length.greaterThan', 0);
    cy.contains('Summer White Top').should('be.visible');

    cy.get('.productinfo').eq(0).trigger('mouseover');
    cy.get('.productinfo').eq(0).find('.add-to-cart').click();

    cy.contains('View Cart').click();

    cy.get('.cart_info tbody tr').should('have.length', 1);

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
    
    cy.contains('Cart').click();
    cy.get('.cart_info tbody tr').should('have.length', 1);
    });
 });
