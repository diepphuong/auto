'use strict';
// ***********************************************
// This example setup.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import {sherCy} from "./sherCy";

before(() => {
  if (Cypress.env('adminUsername') === '' || Cypress.env('adminPassword') === '') {
    throw 'ERROR: required configuration not found. Please make sure cypress.json has defined an adminUsername, and adminPassword';
  }
});

beforeEach(() => {
  cy.on('uncaught:exception', (err, runnable) => {
    console.log('Cypress uncaught exception: ', err);
    return false;
  });

  //Keep login token
  sherCy.restoreLocalStorage();
});

//Otherwise cypress blows up localstorage between 'it' tests
afterEach(() => {
  sherCy.saveLocalStorage();
});
