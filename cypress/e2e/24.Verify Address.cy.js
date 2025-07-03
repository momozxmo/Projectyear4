describe('User Verify Address', () => {
  const randomSuffix = Date.now();
  const testEmail = `testuser_${randomSuffix}@example.com`;

  it('Run Verify Address test', () => {
    cy.visit('https://automationexercise.com');

    cy.get('body').should('contain', 'Home');
    //กดSignup / Login
    cy.contains('Signup / Login').click();
    //check page
    cy.contains('New User Signup').should('be.visible');
    cy.url().should('include', '/login');
    //กรอกข้อมูลusername email
    cy.get('input[data-qa="signup-name"]').type('Test User');
    cy.get('input[data-qa="signup-email"]').type(testEmail);
    //กดปุ่มสมัคร
    cy.get('button[data-qa="signup-button"]').click();
    //check page
    cy.get('h2.title.text-center b').should('contain.text', 'Enter Account Information');
    cy.url().should('include', '/signup');
    //กรอกข้อมูลส่วนตัว
    cy.get('#id_gender1').check();
    cy.get('#name').should('have.value', 'Test User');
    cy.get('#password').type('qwertyu');
    cy.get('#days').select('19');
    cy.get('#months').select('June');
    cy.get('#years').select('2003')
    //checkbox
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    //กรอกข้อมูลทั้งหมด
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#company').type('Testcorp');
    cy.get('#address1').type('123 Test st');
    cy.get('#address2').type('456 Tets st');
    cy.get('#country').select('Singapore');
    cy.get('#state').type('Test on');
    cy.get('#city').type('Bg patum');
    cy.get('#zipcode').type('10200');
    cy.get('#mobile_number').type('01921474132');
    //กดปุ่มสมัคร
    cy.get('button[data-qa="create-account"]').click();
    //check page
    cy.get('h2.title.text-center b').should('contain.text', 'Account Created!');
    //กดปุ่มไปต่อ
    cy.get('a[data-qa="continue-button"]').click();
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

        cy.get('#address_invoice').within(() => {
            cy.contains('Mr. Test User').should('be.visible');
            cy.contains('Testcorp').should('be.visible');
            cy.contains('123 Test st').should('be.visible');
            cy.contains('456 Tets st').should('be.visible');
            cy.contains('Bg patum').should('be.visible');
            cy.contains('Singapore').should('be.visible');
            cy.contains('01921474132').should('be.visible');

  });

    cy.contains('Place Order').click();

        cy.url().should('include', '/payment');

        cy.get('input[data-qa="name-on-card"]').type('Test User');
        cy.get('input[data-qa="card-number"]').type('4111111111111111');
        cy.get('input[data-qa="cvc"]').type('061');
        cy.get('input[data-qa="expiry-month"]').type('06');
        cy.get('input[data-qa="expiry-year"]').type('2025');

        cy.get('button[data-qa="pay-button"]').click();

        cy.contains('Your order has been confirmed!').should('be.visible');

        cy.contains('Delete Account').click();
        //check page
        cy.get('h2.title.text-center b').should('contain.text', 'Account Deleted!');
        //กดปุ่มไปต่อ
        cy.get('a[data-qa="continue-button"]').click();
  });
});