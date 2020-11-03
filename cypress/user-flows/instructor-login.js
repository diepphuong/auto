'use strict';
import * as loginPage from '../page-objects/login.page-object';
import * as homepage from '../page-objects/homepage.page-object';

export const instructorLogin = (course, userkey="ins1") => {
    loginPage.goToLoginPage(Cypress.env('appHost'));

    loginPage.enterUsername(Cypress.env('adminUsername'));

    loginPage.enterPassword(Cypress.env('adminPassword'));

    loginPage.adminLogin();

    loginPage.enterEmail(course["users"][userkey].email);

    loginPage.findUser();

    loginPage.userLogin(Cypress.env('adminUsername'),
                        Cypress.env('adminPassword'),
                        Cypress.env('apiHost'),
                        course["users"][userkey].id,
                        course["users"][userkey].email);

    homepage.getTitle().contains(homepage.title);
};

export default instructorLogin
