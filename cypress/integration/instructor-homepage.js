'use strict';
import * as loginPage from '../page-objects/login.page-object';
import * as homepage from '../page-objects/homepage.page-object';

describe('Test homepage load for instructors', function() {

  const course = Cypress.env("courses")["course1"];

  it('open homepage', () => {
    loginPage.goToLoginPage(Cypress.env('appHost'));

    loginPage.enterUsername(Cypress.env('adminUsername'));

    loginPage.enterPassword(Cypress.env('adminPassword'));

    loginPage.adminLogin();

    loginPage.enterEmail(course["users"]["ins1"].email);

    loginPage.findUser();

    loginPage.userLogin(Cypress.env('adminUsername'),
                        Cypress.env('adminPassword'),
                        Cypress.env('apiHost'),
                        course["users"]["ins1"].id,
                        course["users"]["ins1"].email);

    homepage.getTitle().contains(homepage.title);
  });
});
