// cypress/e2e/login.cy.js

import LoginPage from './javascript/loginpage';

describe('Login Test menggunakan metode POM', () => {

    it('TC-001', () => {
        // 1. Kunjungi halaman login menggunakan metode dari Page Object
        LoginPage.visit();

        // 2. Masukkan username
        LoginPage.enterusername('Admin');

        // 3. Masukkan password
        LoginPage.enterpassword('admin123');

        // 4. Klik tombol login
        LoginPage.clickLogin();

        // 5. Verifikasi bahwa dashboard terlihat setelah login berhasil
        LoginPage.assertDashboardVisible();
    });

    //username dan password salah
    it('TC-002', () => {
        LoginPage.visit();
        LoginPage.enterusername('Admin');
        LoginPage.enterpassword('admin321');
        LoginPage.clickLogin();
        cy.contains('Invalid credentials').should('be.visible');
    });
});
