
const ResourceLibraryData = require('../data/ResourceLibrary.json');

//
const header = '.o-els-flex-layout__item >h4'

//Checkboxes
const chkSelectAll = "[name='checkbox_select-all']"

class ResourceLibraryPage {
    verifyPageHeader(){
        cy.get(header).should('have.text', 'Resource Library')
    }

    selectAllResources(){
        cy.get(chkSelectAll).check({force:true}).should('be.checked')
    }

    unselectAllResources(){
        cy.get(chkSelectAll).uncheck({force:true}).should('not.be.checked')
    }
    
        


        
    }



export default ResourceLibraryPage;