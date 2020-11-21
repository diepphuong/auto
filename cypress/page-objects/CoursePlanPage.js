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
const actionMenu = '.c-els-menu__window'
const menuOption = 'li.c-els-menu__item > .c-els-link'

//Confirm dialogs
const confirmRemoveItem = 'div#c-els-modal__content-REMOVE_MODAL_ID .c-els-button--primary'

//Content page
const btnCollapseExpandAllFolders = '.c-els-button--debuttonize.c-scm-course-plan-page__heading-button'
const btnAddaFolderBottom = '.c-els-button.c-els-button--default.c-els-button--secondary.c-els-button--expanded.qe-scm-course-plan-action-button-add-folder'
const divParentItem = '.c-scm-syllabus-item__heading'
const iconCollapseExpandFolder = '.o-els-icon-svg.o-els-icon-svg--1x1o2.u-els-color-secondary.o-els-icon-svg--middle'
const iconActionMenu = '.c-els-menu  > button.c-els-menu__button'
const btnOpenCourseSetup = '.o-els-container > div > .c-els-button'

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

//data
const coursePlan = require('../data/CoursePlan.json')

class CoursePlanPage {
  goToResourceLibrary() {
    cy.get(btnAddMoreResources).click()
  }

  confirmRemoveItem() {
    cy.get(confirmRemoveItem).click()
  }

  openCourseSetup() {
    cy.get(btnOpenCourseSetup).click
  }

  verifyUICoursePlan() {
    cy.get(btnAddEbookReading).should('be.visible')
    cy.get(btnAddEAQ).should('be.visible')
    cy.get(btnAddAdaptiveLesson).should('be.visible')
    cy.get(btnAddSimchart).should('be.visible')
    cy.get(btnAddSkill).should('be.visible')
    cy.get(btnAddMoreResources).should('be.visible')
    cy.get(btnAddaFolder).should('be.visible')
  }

  addParentFolder(name) {
    cy.get(btnAddaFolder).click()
    cy.get(modNewFolder).should('include.text', coursePlan.modalName).wait(1000)
    cy.get(txtName).clear().type(name)
    cy.get(ddlDestination).should('include.text', coursePlan.defaultDestination)
    cy.get(ddlLocation).should('include.text', coursePlan.defaultLocation)
    cy.get(btnCancelNewFolder).should('include.text', 'Cancel')
    cy.get(btnAddNewFolder).should('include.text', 'Add').click()
    cy.wait(1000)
  }

  addSubFolder(name, destination, location) {
    if (destination === null) { destination = '- Week 1' }

    cy.get(btnAddaFolder).click()
    cy.get(modNewFolder).should('include.text', coursePlan.modalName).wait(1000)
    cy.get(txtName).clear().type(name)
    cy.get(ddlDestination).should('include.text', coursePlan.defaultDestination).select(destination)
    cy.get(ddlLocation).should('include.text', coursePlan.defaultLocation).select(location)
    cy.get(btnCancelNewFolder).should('include.text', 'Cancel')
    cy.get(btnAddNewFolder).should('include.text', 'Add').click()
    cy.wait(1000)
  }

  removeItemsFromCoursePlan(itemName) {
    cy.get(btnAddaFolderBottom).scrollIntoView().wait(1000)
    cy.get(divParentItem).each(($el) => {
      const innerText = $el.text()
      if (innerText.includes(itemName)) {
        $el.find(iconActionMenu).click()
        return
      }
    })
    cy.get(actionMenu).contains('Remove').click()
    cy.get(confirmRemoveItem).click()
  }

















  //Navigate from Course Plan to Resource Library
  openResourcesPageByNavigationBar() {
    cy.get(btnResourcesEbook).click({ force: true })
  }

  openResourcesPageByTopMenu() {
    cy.get(btnAddMoreResources).click({ force: true })
  }

  openResourcePageFromEmptyFolder(){
    cy.get(btnAddAResource).wait(3000).click()
    cy.get(elAddResource).click()
  }

  verifyResourcePageIsOpenSuccess(){
    cy.url().should('contain','catalog')
  }







}

export default CoursePlanPage
