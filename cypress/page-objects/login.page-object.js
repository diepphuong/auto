import { sherCy } from '../support/sherCy';
import { RequestType } from '../support/constants';

const loginSelectors = {
  USERNAME: 'input[name=username]',
  PASSWORD: 'input#field-input-password',
  LOGIN_BUTTON: '#loginButton',
  EMAIL: 'input#field-input-eolsUsername',
  FIND_USER_BUTTON: '#findUserButton',
  USER_LIST: '#user-list'
};

/* Page utilities */
const requestUserList = (adminUsername, adminPassword, apiHost, userId, userEmail) => {
  const path = `/apiv1/eolsUser/list/byEmail/${userEmail}`;
  return sherCy.makeAdminRequest(adminUsername, adminPassword, apiHost, path, RequestType.GET).then(response => {
    return response.body
  });
};

/* Page selectors */

export const getUsernameField = () => cy.get(loginSelectors.USERNAME);

export const getPasswordField = () => cy.get(loginSelectors.PASSWORD);

export const getAdminLoginButton = () => cy.get(loginSelectors.LOGIN_BUTTON);

export const getEmailField = () => cy.get(loginSelectors.EMAIL);

export const getFindUserButton = () => cy.get(loginSelectors.FIND_USER_BUTTON);

export const getUserList = () => cy.get(loginSelectors.USER_LIST);

export const getFirstUser = () => getUserList().then(field => cy.wrap(field)
  .contains('Ins')
  .parents('.c-els-table__row')
  .contains('Select')
  .eq(0));

export const getUserLoginButton = () => cy.get('#launchBtn').contains('Go');

/* Page interactions */

export const goToLoginPage = (host) =>  cy.visit(`${host}/#/admin`);

export const enterUsername = (username) => getUsernameField().then(field => cy.wrap(field).type(username));

export const enterPassword = (password) => getPasswordField().then(field => cy.wrap(field).type(password));

export const adminLogin = () => getAdminLoginButton().then(field => cy.wrap(field).click());

export const enterEmail = (email) => getEmailField().then(field => cy.wrap(field).type(email));

export const findUser = () => getFindUserButton().then(field => cy.wrap(field).click());

export const selectFirstUser = () => getFirstUser().then(field => cy.wrap(field).click());

export const userLogin = (adminUsername, adminPassword, apiHost, userId, userEmail)  => {
  return requestUserList(adminUsername, adminPassword, apiHost, userId, userEmail).then((users) => {
    if(users.length === 0){
      throw 'No users found for email ' + userEmail;
    }
    if(users.length > 1){
      selectFirstUser();
    }
    getUserLoginButton().then(field => cy.wrap(field).click());
  });
};
