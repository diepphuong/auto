const selectors = {
  TITLE: '[data-qe="page-title"]'
};

/* Page constants */

export const title = 'My Course Plan';

/* Page selectors */

export const getTitle = () => cy.get(selectors.TITLE);
