context('Actions', () => {
  beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login berhasil (valid credentials)', () => {
    
    
    // Delay each keypress by 0.1 sec
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin', { delay: 100 })
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123', { delay: 100 })
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'admin123')
    cy.intercept('get', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
    cy.get('.oxd-button').click( { delay: 100 });
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  });

  it('Login gagal', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin321');
    cy.intercept('get', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('logingagal');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
    cy.wait('@logingagal').its('response.statusCode').should('eq', 304);
  });

  it('Login gagal', () => {
    cy.get('input[name="username"]').type('bukanadmin');
    cy.get('input[name="password"]').type('admin123');
    cy.intercept('get', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('logingagal');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
    cy.wait('@logingagal').its('response.statusCode').should('eq', 304);
  });

  // //tanpa intercept karena password kosong
  it('Login gagal', () => {
    cy.get('input[name="username"]').type('Admin');
    // cy.get('input[name="password"]').type();
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required');
  });

  // //tanpa intercept karena username kosong
  it('Login gagal', () => {
    // cy.get('input[name="username"]').type();
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required');
  });


});
