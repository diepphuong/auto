const ddlTaxonomyFilter = '#field-input-taxonomy-list'
const rdbCreateNewCourse = ':nth-child(1) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'

const ResourceLibraryData = require('../data/ResourceLibrary.json');

class ResourceLibraryPage {
    verifyResourceLibrary(courseName){
        cy.get(txtCourseName).clear()
        cy.get(errorEmptyCourseName).should('contain', courseBuilderData.errorEmptyCourseName)
        cy.get(btnCreateCourse, {timeout: 40000 }).should('be.disabled')
        cy.get(txtCourseName).clear().type(courseName)
    }

}

export default ResourceLibraryPage;