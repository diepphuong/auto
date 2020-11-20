//CoursePlan Navigation bar
const btnAddMoreResources = 'button.qe-scm-course-plan-action-button-more-resources > .c-els-button__text'
const btnResourcesEbook =':nth-child(2) > .c-scm-sidebar__section > .o-els-flex-layout--column > :nth-child(3) > .c-scm-sidebar__section-link > .o-els-flex-layout > :nth-child(2) > .c-scm-sidebar__section-link-text'
const ResourceLibraryData = require('../data/ResourceLibrary.json');

class ResourceLibraryPage {
        openResourcesPageByNavigationBar(){
            cy.get(btnResourcesEbook).click({force: true})
          }

          verifyResourcePageIsOpenSuccess(){
            cy.url().should('contain','catalog')
          }

          openResourcesPageByTopMenu(){
            cy.get(btnAddMoreResources).click({force: true})
          }
        
    }



export default ResourceLibraryPage;