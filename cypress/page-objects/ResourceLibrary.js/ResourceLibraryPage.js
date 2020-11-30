
const ResourceLibraryData = require('../../data/ResourceLibrary.json');

//
const header = '.o-els-flex-layout__item >h4'

//Checkboxes
const chkSelectAll = "[name='checkbox_select-all']"
const allResourceSelector = '.c-scm-catalog__item-list .c-els-field__input'

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
const toastResourceName = 'c-els-toast__content'
const itemSelected = '.o-els-flex-layout--center > :nth-child(1)'
const folderValues = [ResourceLibraryData.folderName, ResourceLibraryData.defaultSelectedFolder,  ResourceLibraryData.newFolder]

//New Folder modal
const txtName = '[name=editSyllabusItemTitleInput]'
const modNewFolder = 'div.c-els-modal'
const ddlDestination = 'select#field-input-destination-dropdown'
const ddlLocation = 'select#field-input-location-dropdown'
const btnAddNewFolder = '.o-els-flex-layout__item > .c-els-button.c-els-button--small.c-els-button--primary'
const btnCancelNewFolder = 'div.o-els-flex-layout--wrap .c-els-button--secondary'

//Hypry links
const linkEbook = 'div.qe-scm-catalog-action-ADD_EBOOK_READING .c-els-link__text'

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

    countNumberOfResources() {
        cy.get(totalResources).find('.c-scm-catalog__item').then(item => {
            const itemCount = Cypress.$(item).length
            expect(item).to.have.length(itemCount)
            cy.log(itemCount)
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
        cy.get(totalResources).find(resourceName).check({ force: true })
    }

    selectFolder(folderName) {
        cy.get(ddSelectFolder).select(folderName)
    }

    clickAddButton() {
        cy.get(btnAdd).should('be.enabled').click({ force: true })
    }

    addAResourceToExistingFolder(resourceName, folderName) {
        this.selectResourceByName(resourceName)
        this.selectFolder(folderName)
        this.clickAddButton()

    }

    verifyToastMessageDisplay() {
        cy.get(toastMessage).should('be.visible')
    }

    verifyToastMessageNotDisplay() {
        cy.get(toastMessage).should('not.be.visible')
    }

    verifyNumberOfSelectedItems() {
        this.selectAllResources()
        cy.get(itemSelected).should('have.text', '25 items selected')
        this.unselectAllResources()
        cy.get(itemSelected).should('have.text', '0 item selected')
    }

    verifyAddBtnWhenDoNotSelectResource() {
        for (var i = 0; i < folderValues.length; i++) {
            cy.get(ddSelectFolder).select(folderValues[i])
            cy.get('[type="checkbox"]').should('not.be.checked').then(() => {
                cy.get(btnAdd).should('be.disabled')
            })
        }
    }
//select dropdown and find child elements
    // verifyAddBtnWhentSelecAtResource() {
    //     this.selectResourceByName(ResourceLibraryData.resourceName)
    //     this.selectFolder(ResourceLibraryData.defaultSelectedFolder)
    //     cy.get(btnAdd).should('be.disabled')
    //     this.selectFolder(ResourceLibraryData.folderName)
    //     cy.get(btnAdd).should('be.enabled')
    //     this.selectFolder(ResourceLibraryData.newFolder)
    //     cy.get(bxtnAdd).should('be.enabled')
    // }

    verifyAddBtnWhentSelectAResource(resourceName){
        this.selectResourceByName(resourceName)
        for (var i =0; i< folderValues.length; i++){
            cy.get(ddSelectFolder).select(folderValues[i])
            cy.get(ddSelectFolder).find(':selected').then(element => {
                const text = element.text();
                //cy.log(`Select item ${text}`);
                if (text == '--Select Folder--'){
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

    addResourceToNewFolder(resourceName, newFolderName) {
        this.selectResourceByName(resourceName)
        this.selectFolder(ResourceLibraryData.newFolder)
        this.clickAddButton()
        this.createNewFolder(newFolderName)

    }

    verifyFolderNameInToastMessage(folderName) {
        cy.get(toastFolderName).should('have.text', folderName)

    }

    verifyResourceNameInToastMessage(resourceName) {
        cy.get(toastMessage).find('strong').should('have.text', resourceName)
    }

    selectMultipleResources(numOfResource) {
        for (var i = 0; i < numOfResource; i++) {
            cy.get(allResourceSelector).eq([i]).check({ force: true })
        }
    }

    addMultipleResourcesToExistingFolder(numOfResource, folderName){
        this.selectMultipleResources(numOfResource)
        this.selectFolder(folderName)
        this.clickAddButton()
    }

    addMultipleResourcesToNewFolder(numOfResource, newFolderName) {
        this.selectMultipleResources(numOfResource)
        this.selectFolder(ResourceLibraryData.newFolder)
        this.clickAddButton()
        this.createNewFolder(newFolderName)
    }

    addAllResourcesToExistingFolder(folderName){
        this.selectAllResources()
        this.selectFolder(folderName)
        this.clickAddButton()
    }

    addAllResourcesToNewFolder(newFolderName){
        this.selectAllResources()
        this.selectFolder(ResourceLibraryData.newFolder)
        this.clickAddButton()
        this.createNewFolder(newFolderName)
    }

    clickCancelButton() {
        cy.get(btnCancelNewFolder).should('be.enabled').click({ force: true })
    }

    cancelAddResourceToNewFolder(numOfResource){
        this.selectMultipleResources(numOfResource)
        this.selectFolder(ResourceLibraryData.newFolder)
        this.clickAddButton()
        this.clickCancelButton()
    }


}





























export default ResourceLibraryPage;