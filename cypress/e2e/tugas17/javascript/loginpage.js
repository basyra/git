class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
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

  assertDashboardVisible(){
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  }
  
  
}

export default new LoginPage;
