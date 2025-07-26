import LoginPage from './javascript/project_sanbercode';
import datalogin from "./json/Login.json";

describe('TC-Login', () => {

  it('TC-001 Login Sukses', () => {
    LoginPage.visit();

    LoginPage.enterusername(datalogin.username),
    LoginPage.enterpassword(datalogin.password),
    LoginPage.interceptlogin()
    LoginPage.clickLogin();

    cy.wait('@dashboard').its('response.statusCode').should('eq', 200);

    LoginPage.assertDashboardVisible();
  });

  it('TC-002 Reset Password', () => {
    LoginPage.visit();
    LoginPage.forgotpassword()
    LoginPage.urlforgotpassword()
    LoginPage.resetuser(datalogin.username)
    LoginPage.interceptforgot()
    LoginPage.resetbutton()

    cy.wait('@forgotpass').its('response.statusCode').should('eq', 200);
  }) 

  it('TC-003 Directory', () => {
    LoginPage.visit();

    LoginPage.enterusername(datalogin.username),
    LoginPage.enterpassword(datalogin.password),
    LoginPage.interceptlogin()
    
    LoginPage.clickLogin();

    cy.wait('@dashboard').its('response.statusCode').should('eq', 200);
    cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory').as('directory')
    LoginPage.directory()
    cy.wait('@directory').its('response.statusCode').should('eq', 200);
    LoginPage.selectbutton()
    LoginPage.location()
    LoginPage.searchbutton()
    // cy.get('.oxd-select-dropdown').should('be.visible')

    // LoginPage.assertDashboardVisible();
  })

});

