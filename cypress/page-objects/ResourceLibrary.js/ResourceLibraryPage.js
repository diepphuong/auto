// <reference types="cypress" />
const ResourceLibraryData = require('../../data/ResourceLibrary.json');

//
const header = '.o-els-flex-layout__item >h4'
const iconX = '.c-els-page-cover-header__container > .o-els-flex-layout__item > button'

//Checkboxes
const chkSelectAll = "[name='checkbox_select-all']"
const allResourceSelector = '.c-scm-catalog__item-list .c-els-field__input'
const resourceLabel = '.u-els-overflow-auto'
const catalogItem = 'div.c-scm-catalog__item'

//Filter section
const ddTaxonomy = '#field-input-taxonomy-list'
const ddSection = '#field-input-taxonomy-nodes'
const totalResources = '.c-scm-catalog__item-list'
const eachTaxonomy = 'c-scm-catalog__item'
const firstTaxonomy = 'Potter 10e Chapter'
const secondTaxonomy = 'Cooper FAAHN 8e Chapter'
const taxonomyItem = ['All', 'Potter 10e Chapter', 'Cooper FAAHN 8e Chapter']
const chapterItem = ['All', 'Chapter 47, Bowel Elimination', 'Chapter 46, Urinary Elimination']

//Select Folder section
const ddSelectFolder = '#field-input-section-list'
const btnAdd = '.c-els-button--default'
const toastMessage = '.c-els-toast__item'
const toastFolderName = '.c-els-toast__item .u-els-anchorize'
const toastContent = '.c-els-toast__content'
const itemSelected = '.o-els-flex-layout--center > :nth-child(1)'
const folderValues = [ResourceLibraryData.folderName, ResourceLibraryData.defaultSelectedFolder, ResourceLibraryData.newFolder]
const folderLink = '.c-els-toast__content .u-els-anchorize'

//New Folder modal
const txtName = '[name=editSyllabusItemTitleInput]'
const modNewFolder = 'div.c-els-modal'
const ddlDestination = 'select#field-input-destination-dropdown'
const ddlLocation = 'select#field-input-location-dropdown'
const btnAddNewFolder = '.o-els-flex-layout__item > .c-els-button.c-els-button--small.c-els-button--primary'
const btnCancelNewFolder = 'div.o-els-flex-layout--wrap .c-els-button--secondary'

//Links
const eBookLink = 'div.qe-scm-catalog-action-ADD_EBOOK_READING .c-els-link__text'
const eAQLink = 'div.qe-scm-catalog-action-ADD_ADAPTIVE_QUIZ .c-els-link__text'
const adaptiveLessonLink = 'div.qe-scm-catalog-action-ADD_ADAPTIVE_LESSON .c-els-link__text'
const simchartLink = 'div.qe-scm-catalog-action-ADD_SIMCHART .c-els-link__text'

class ResourceLibraryPage {
    verifyPageHeader() {
        cy.get(header).should('have.text', 'Resource Library')
    }

    selectAllResources() {
        cy.get(chkSelectAll).check({ force: true }).should('be.checked')
    }

    verifyAllCheckboxesAreChecked() {
        cy.get('[type="checkbox"]').should('be.checked')
    }

    unselectAllResources() {
        cy.get(chkSelectAll).uncheck({ force: true }).should('not.be.checked')
    }

    verifyAllCheckboxesAreUnChecked() {
        cy.get('[type="checkbox"]').should('not.be.checked')
    }

    countNumberOfResources(totalResourceItems) {
        cy.get(totalResources).find('.c-scm-catalog__item').then(item => {
            const itemCount = Cypress.$(item).length
            expect(item).to.have.length(itemCount)
            cy.log(itemCount)
            expect(itemCount).to.equal(totalResourceItems)
        })
    }

    selectTaxonomy(taxonomyOption) {
        cy.get(ddTaxonomy).select(taxonomyOption)
    }

    filterResourceByTaxonomy() {
        for (var i = 0; i < taxonomyItem.length; i++) {
            this.selectTaxonomy(taxonomyItem[i])
            this.countNumberOfResources()
        }
    }

    selectChapter(chapterOption) {
        cy.get(ddSection).select(chapterOption)

    }

    filterResourceByChapter() {
        this.selectTaxonomy(firstTaxonomy)
        for (var i = 0; i < chapterItem.length; i++) {
            this.selectChapter(chapterItem[i])
            this.countNumberOfResources()
        }
    }

    selectResourceByName(resourceName) {
        cy.get(resourceLabel).contains(resourceName)
            .parents(catalogItem)
            .find('input')  // select it's input
            .check({force:true});
    }

    selectFolder(folderName) {
        cy.get(ddSelectFolder).selectContaining(folderName)
    }

    clickAddButton() {
        cy.get(btnAdd).should('be.enabled').click({ force: true })
    }

    verifyToastMessageDisplay() {
        cy.get(toastMessage).should('be.visible')
    }

    verifyToastMessageNotDisplay() {
        cy.get(toastMessage).should('not.be.visible')
    }

    verifyNumberOfSelectedItems() {
        this.selectAllResources()
        cy.get(itemSelected).should('have.text', '30 items selected')
        this.unselectAllResources()
        cy.get(itemSelected).should('have.text', '0 item selected')
    }

    verifyAddBtnWhenDoNotSelectResource() {
        for (var i = 0; i < folderValues.length; i++) {
            cy.get(ddSelectFolder).selectContaining(folderValues[i])
            cy.get('[type="checkbox"]').should('not.be.checked').then(() => {
                cy.get(btnAdd).should('be.disabled')
            })
        }
    }

    verifyAddBtnWhentSelectAResource(resourceName) {
        this.selectResourceByName(resourceName)
        for (var i = 0; i < folderValues.length; i++) {
            cy.get(ddSelectFolder).selectContaining(folderValues[i])
            cy.get(ddSelectFolder).find(':selected').then(element => {
                const text = element.text();
                cy.log(`Select item ${text}`);
                if (text == '--Select Folder--') {
                    cy.get(btnAdd).should('be.disabled')
                } else {
                    // cy.log(cy.get(ddSelectFolder).find(':selected'));
                    cy.get(btnAdd).should('be.enabled')
                }
            });
        }
    }

    setNewFolderName(newFolderName) {
        cy.get(txtName).type(newFolderName)
    }


    createNewFolder(newFolderName) {
        this.setNewFolderName(newFolderName)
        cy.get(btnAddNewFolder).click()
    }

    addResourceToNewFolder(numOfResource, newFolderName) {
        //this.selectResourceByName(resourceName)
        this.selectMultipleResources(numOfResource)
        this.selectFolder(ResourceLibraryData.newFolder)
        this.clickAddButton()
        this.createNewFolder(newFolderName)

    }

    verifyFolderNameInToastMessage(folderName) {
        cy.get(toastFolderName).should('have.text', folderName)

    }

    verifyResourceNameInToastMessage(text) {
        cy.get(toastContent).find('strong').should('have.text', text)
    }

    selectMultipleResources(numOfResource) {
        for (var i = 0; i < numOfResource; i++) {
            cy.get(allResourceSelector).eq([i]).check({ force: true })
        }
    }

    clickCancelButton() {
        cy.get(btnCancelNewFolder).should('be.enabled').click({ force: true })
    }

    closeReourcePage() {
        cy.get(iconX).click()
    }

    verifyEbookAssignmentDialogExist() {
        cy.get(dialogEbookAssignment).should('be.visible')
    }

    navigateToAddedResourceFolder(){
        cy.get(folderLink).click({force: true})
    }
    



















    // addMultipleResourcesToExistingFolder(numOfResource, folderName) {
    //     this.selectMultipleResources(numOfResource)
    //     this.selectFolder(folderName)
    //     this.clickAddButton()
    // }

    // addMultipleResourcesToNewFolder(numOfResource, newFolderName) {
    //     this.selectMultipleResources(numOfResource)
    //     this.selectFolder(ResourceLibraryData.newFolder)
    //     this.clickAddButton()
    //     this.createNewFolder(newFolderName)
    // }

    // addAllResourcesToExistingFolder(folderName) {
    //     this.selectAllResources()
    //     this.selectFolder(folderName)
    //     this.clickAddButton()
    // }

    // addAllResourcesToNewFolder(newFolderName) {
    //     this.selectAllResources()
    //     this.selectFolder(ResourceLibraryData.newFolder)
    //     this.clickAddButton()
    //     this.createNewFolder(newFolderName)
    // }

    // addAResourceToExistingFolder(numOfResource, folderName) {
    //     //this.selectResourceByName(resourceName)
    //     this.selectMultipleResources(numOfResource)
    //     this.selectFolder(folderName)
    //     this.clickAddButton()

    // }

    

    // cancelAddResourceToNewFolder(numOfResource) {
    //     this.selectMultipleResources(numOfResource)
    //     this.selectFolder(ResourceLibraryData.newFolder)
    //     this.clickAddButton()
    //     this.clickCancelButton()
    // }

    




}

export default ResourceLibraryPage;