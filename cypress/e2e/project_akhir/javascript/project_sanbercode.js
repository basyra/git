class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  enterusername(email){
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(email, {delay: 100})
  }
  
  enterpassword(pass){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass, {delay: 100})
  }

  clickLogin(){
    cy.get('.oxd-button').click( { delay: 100 });
  }

  forgotpassword(){
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
  }

  urlforgotpassword(){
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  }
    
  resetuser(email){
    cy.get('.oxd-input').type(email)
  }
    
  resetbutton(){
    cy.get('.oxd-button--secondary').click()
  }

  interceptforgot(){
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset').as('forgotpass')
  }

  interceptlogin(){
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('dashboard');
  }

  directory(){
    cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').click()
  }

  selectbutton(){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
  }

  location(){
    cy.get(':nth-child(4) > span').click()
  }

  searchbutton(){
    cy.get('.oxd-button--secondary').click()
  }

  assertDashboardVisible(){
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  }
  
  
}

export default new LoginPage;