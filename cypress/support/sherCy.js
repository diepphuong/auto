'use strict';
import { setupMethods } from './setupMethods';

const sherCy = {};

sherCy.LOCAL_STORAGE_MEMORY = {};

sherCy.saveLocalStorage = () => {
  Object.keys(localStorage).forEach(key => {
    cy.log(key, localStorage[key]);
    sherCy.LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
};

sherCy.restoreLocalStorage = () => {
  Object.keys(sherCy.LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, sherCy.LOCAL_STORAGE_MEMORY[key]);
  });
};

sherCy.makeAdminRequest = (adminUsername, adminPassword, apiHost, path, requestType, body) => {
  return setupMethods
    .generateAdminToken(adminUsername, adminPassword, apiHost)
    .then(adminToken => {
      const request = {
        headers: {
          Authorization: `Bearer ${adminToken}`
        },
        url: `${apiHost}/${path}`,
        method: requestType
      };

      if(body){
        request.body = body;
      }

      return cy.request(request);
    })
};

export { sherCy };
