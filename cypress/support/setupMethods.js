'use strict';

let setupMethods = {};

setupMethods.generateAdminToken = (adminUsername, adminPassword, apiHost) => {
  localStorage.setItem('elsevier.eventCollectorEnabled', 'false');
  sessionStorage.setItem('elsevier.eventCollectorEnabled', 'false');

  const request = {
    url: `${apiHost}/login-service/login`,
    method: 'POST',
    body: {
      username: adminUsername,
      password: adminPassword
    }
  };

  return cy.request(request).then(response => {
    return response.body.token;
  });
};

setupMethods.login = (params, adminUsername, adminPassword, apiHost) => {
  localStorage.setItem('elsevier.eventCollectorEnabled', 'false');
  sessionStorage.setItem('elsevier.eventCollectorEnabled', 'false');

  const email = params.email;
  const userId = params.userId;
  const courseId = params.courseId;
  const isbns = params.isbns ? params.isbns : Cypress.env('isbn');
  let adminToken;

  return setupMethods
    .generateAdminToken(adminUsername, adminPassword, apiHost)
    .then(token => {
      adminToken = token;
      const request = {
        headers: {
          Authorization: `Bearer ${adminToken}`
        },
        url: `${apiHost}/apiv1/eolsUser/list/byEmail/${email}`,
        method: 'GET'
      };

      return cy.request(request);
    })
    .then(response => {
      let userBody;
      for (let user of response.body) {
        if (user.id === userId) {
          userBody = user;
        }
      }
      if (!userBody) {
        throw 'No users found for email ' + email;
      }

      const appParams = {
        appId: 'SHER_EVOL',
        courseId: courseId,
        isbns: isbns,
        authorizedIsbns: isbns
      };

      const request = {
        headers: {
          Authorization: `Bearer ${adminToken}`
        },
        url: `${apiHost}/token-service/masqueradeWithAppParams`,
        method: 'POST',
        body: {
          user: userBody,
          appParams: appParams
        }
      };

      return cy.request(request);
    })
    .then(response => {
      localStorage.setItem('security.elsevier.jwt', response.body.token);
      sessionStorage.setItem('security.elsevier.jwt', response.body.token);
    });
};

export { setupMethods };
