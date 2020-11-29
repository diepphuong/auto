//Top menu
const btnAddEbookReading = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-ebook-reading'
const btnAddEAQ = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-adaptive-quiz'
const btnAddAdaptiveLesson = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-adaptive-lesson'
const btnAddSimchart = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-simchart'
const btnAddSkill = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-sherpath-skill'
const btnAddMoreResources = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-more-resources'
const btnAddaFolder = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-add-folder'

//Action menu
const btnMenu = 'div.o-els-flex-layout--center .c-els-menu .o-els-icon-svg'
const menuRemove = 'ul.c-els-menu__list > li:nth-of-type(12) > span:nth-of-type(1) span:nth-of-type(1)'
const actionMenu = '.c-els-menu__list'
const menuOption = 'li.c-els-menu__item > .c-els-link'

//Confirm dialogs
const confirmRemoveItem = 'div#c-els-modal__content-REMOVE_MODAL_ID .c-els-button--primary'

//Content page
const btnCollapseExpandAllFolders = '.c-els-button--debuttonize.c-scm-course-plan-page__heading-button'
const btnAddaFolderBottom = '.c-els-button.c-els-button--default.c-els-button--secondary.c-els-button--expanded.qe-scm-course-plan-action-button-add-folder'
const divParentItem = '.c-scm-syllabus-item__heading'
const iconCollapseExpandFolder = '.o-els-icon-svg.o-els-icon-svg--1x1o2.u-els-color-secondary.o-els-icon-svg--middle'
const iconActionMenu = '.o-els-flex-layout__item > .c-els-menu  > button.c-els-menu__button'
const btnOpenCourseSetup = '.o-els-container > div > .c-els-button'
const toastMessage = '.c-els-toast__content'

//New Folder modal
const txtName = '[name=editSyllabusItemTitleInput]'
const modNewFolder = 'div.c-els-modal'
const ddlDestination = 'select#field-input-destination-dropdown'
const ddlLocation = 'select#field-input-location-dropdown'
const btnAddNewFolder = '.o-els-flex-layout__item > .c-els-button.c-els-button--small.c-els-button--primary'
const btnCancelNewFolder = '.o-els-flex-layout__item > .c-els-button.c-els-button--small.c-els-button--secondary'

//Navigation Bar (Phuong added)
const btnResourcesEbook = ':nth-child(2) > .c-scm-sidebar__section > .o-els-flex-layout--column > :nth-child(3) > .c-scm-sidebar__section-link > .o-els-flex-layout > :nth-child(2) > .c-scm-sidebar__section-link-text'

//AddAResource selector from an empty folder
const btnAddAResource = 'div.c-scm-syllabus-item--empty-folder-placeholder .c-els-menu'
const elAddResource = 'ul.c-els-menu__list > li:nth-of-type(5) > span:nth-of-type(1) .c-els-link__text'

//Move Reorder modal
const modMoveReorder = '.c-scm-move-modal'
const lblItemName = '.c-scm-move-modal > .o-els-container'
const tooltipDestination = '.c-els-tooltip-container'
const btnSubmitMove = '.c-els-button.c-els-button--default.c-els-button--primary.qe-scm-course-plan-move-modal-submit-button'
const btnCancelMove = '.c-els-button.c-els-button--default.c-els-button--secondary.qe-scm-course-plan-move-modal-cancel-button'

//data
const coursePlan = require('../data/CoursePlan.json')

class CoursePlanPage{
  goToResourceLibrary(){
    cy.get(btnAddMoreResources).click()
  }

  confirmRemoveItem(){
    cy.get(confirmRemoveItem).wait(1000)
    cy.get(confirmRemoveItem).click()
  }

  openCourseSetup() {
    cy.get(btnOpenCourseSetup).click
  }

  deleteAFolder(){
    cy.get(btnMenu).click()
    cy.get(actionMenu).select('Remove')
  }

  verifyUICoursePlan(){
    cy.get(btnAddEbookReading).should('be.visible')
    cy.get(btnAddEAQ).should('be.visible')
    cy.get(btnAddAdaptiveLesson).should('be.visible')
    cy.get(btnAddSimchart).should('be.visible')
    cy.get(btnAddSkill).should('be.visible')
    cy.get(btnAddMoreResources).should('be.visible')
    cy.get(btnAddaFolder).should('be.visible')
  }

  addParentFolder(name){
    cy.get(btnAddaFolder).click()
    cy.get(modNewFolder).should('include.text',coursePlan.modalName).wait(1000)
    cy.get(txtName).clear().type(name)
    cy.get(ddlDestination).should('include.text',coursePlan.defaultDestination)
    cy.get(ddlLocation).should('include.text',coursePlan.defaultLocation)
    cy.get(btnCancelNewFolder).should('include.text','Cancel')
    cy.get(btnAddNewFolder).should('include.text','Add').click()
    cy.wait(1000)
  }

  addSubFolder(name,destination,location){
    cy.get(btnAddaFolder).click()
    cy.get(modNewFolder).should('include.text',coursePlan.modalName).wait(1000)
    cy.get(txtName).clear().type(name)
    cy.get(ddlDestination).should('include.text',coursePlan.defaultDestination).select(destination)
    cy.get(ddlLocation).should('include.text',coursePlan.defaultLocation).select(location)
    cy.get(btnCancelNewFolder).should('include.text','Cancel')
    cy.get(btnAddNewFolder).should('include.text','Add').click()
    cy.wait(1000)
  }

  removeItemsFromCoursePlan(itemName) {
    this.clickActionMenu(itemName)
    cy.get(actionMenu).contains('Remove').click()
    this.confirmRemoveItem()
    cy.get(toastMessage).should('include.text','removed')
  }

    //Navigate from Course Plan to Resource Library
      openResourcesPageByNavigationBar() {
        cy.get(btnResourcesEbook).click({ force: true })
      }

      openResourcesPageByTopMenu() {
        cy.get(btnAddMoreResources).click({ force: true })
      }

      openResourcePageFromEmptyFolder() {
        cy.get(btnAddAResource).wait(3000).click()
        cy.get(elAddResource).click()
      }

      verifyResourcePageIsOpenSuccess() {
        cy.url().should('contain', 'catalog')
      }
      
      verifyUINewFolderModal(){
        cy.get(btnAddaFolder).click()
        cy.get(modNewFolder).should('be.visible')
        cy.get(txtName).should('be.visible')
        cy.get(ddlDestination).should('be.visible')
        cy.get(ddlLocation).should('be.visible')
        cy.get(btnAddNewFolder).should('be.visible')
        cy.get(btnCancelNewFolder).should('be.visible')
      }

  clickActionMenu(itemName){
    cy.get(divParentItem).each(($el, index, $list) => {
    const innerText = $el.text()
    if (innerText.includes(itemName)) {
      cy.wrap($el).scrollIntoView().wait(1000)
      cy.wrap($el).find(iconActionMenu).click()
      return
      }
    })
  }

  moveItemsFromCoursePlan(itemName,destination,location) {
    this.openMoveModal(itemName)
    cy.get(ddlDestination).select(destination)
    cy.get(ddlLocation).select(location)
    cy.get(btnSubmitMove).click()
    cy.get(toastMessage).should('include.text',itemName + ' was moved to')
    cy.wait(1000)
  }

  openMoveModal(itemName) {
    this.clickActionMenu(itemName)
    cy.get(actionMenu).contains('Move / Reorder').click()
    cy.get(modMoveReorder).wait(1000)
  }

  verifyAddedItem(itemName){
    cy.get(divParentItem).each(($el, index, $list) => {
    const innerText = $el.text()
    if (innerText.includes(itemName)) {
      cy.wrap($el).should('include.text',itemName)
      return
      }
    })
  }

  verifyUIMoveReorderModal(itemName){
    this.openMoveModal(itemName)
    cy.get(modMoveReorder).should('be.visible')
    cy.get(lblItemName).should('include.text',itemName)
    cy.get(tooltipDestination).should('be.visible')
    cy.get(ddlDestination).should('be.visible')
    cy.get(ddlLocation).should('be.visible')
    cy.get(btnSubmitMove).should('be.visible')
    cy.get(btnCancelMove).should('be.visible')
    cy.get(btnCancelMove).click()
    cy.wait(1000)
  }

  verifyNewFolderInvalidCase(){
    cy.get(btnAddaFolder).click()

    //empty folder name
    cy.get(txtName).clear()
    cy.get(btnAddNewFolder).should('be.disabled')

    //select no destination when adding new folder
    cy.get(txtName).clear().type("temp")
    cy.get(ddlDestination).select("--Select Folder--")
    cy.get(btnAddNewFolder).should('be.disabled')

    //cannot select lower nested level
    cy.get(txtName).clear().type("temp")
    cy.get(ddlDestination).get('[label="- - A folder"]').should('be.disabled')

  }

}

export default CoursePlanPage
