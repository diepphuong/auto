
const ResourceLibraryData = require('../data/ResourceLibrary.json');

//
const header = '.o-els-flex-layout__item >h4'

//Checkboxes
const chkSelectAll = "[name='checkbox_select-all']"

//Filter section
const ddTaxonomy = '#field-input-taxonomy-list'
const ddSection = '#field-input-taxonomy-nodes'
const totalTaxonomies = '.c-scm-catalog__item-list'
const eachTaxonomy = 'c-scm-catalog__item'

class ResourceLibraryPage {
    verifyPageHeader(){
        cy.get(header).should('have.text', 'Resource Library')
    }

    selectAllResources(){
        cy.get(chkSelectAll).check({force:true}).should('be.checked')
    }

    verifyAllCheckboxesAreChecked(){
        cy.get('[type="checkbox"]').should('be.checked')
    }

    unselectAllResources(){
        cy.get(chkSelectAll).uncheck({force:true}).should('not.be.checked')
    }

    verifyAllCheckboxesAreUnChecked(){
        cy.get('[type="checkbox"]').should('not.be.checked')
    }

    countNumberOfTaxonomy(){
        cy.get(totalTaxonomies).find('.c-scm-catalog__item').then (item => {
            const itemCount = Cypress.$(item).length
            expect(item).to.have.length(itemCount)
            cy.log(itemCount)
        } )
    }

    
        


        
    }



export default ResourceLibraryPage;