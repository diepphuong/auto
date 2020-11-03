const selectors = {
  SIDEBAR_LINK: '.c-scm-sidebar__section-link',
};

/* Page constants */

export const performanceLink = 'Performance & Grades';

/* Page selectors */

export const getPerformanceLink = () => cy.get(selectors.SIDEBAR_LINK)
                                          .contains(performanceLink)
                                          .parents(selectors.SIDEBAR_LINK);

/* Page interactions */

export const goToPerformanceApp = () => getPerformanceLink().then(field => cy.wrap(field).click({ force: true }));
