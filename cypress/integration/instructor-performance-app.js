'use strict';
import * as navigation from '../page-objects/sidebar.page-object';
import instructorLogin from '../user-flows/instructor-login';

/*
   NOTE: this test will not work when run against localhost due to CORS issues.
   Doublecheck your env.appHost value in cypress.json if you are getting errors
 */

describe('Test performance app link for instructors', function() {

  const course = Cypress.env("courses")["course1"];

  it('open homepage', () => {
    instructorLogin(course);
    navigation.goToPerformanceApp();
    cy.get('.c-els-page-header__content').contains('Performance');
  });
});
