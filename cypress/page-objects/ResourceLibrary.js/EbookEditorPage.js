
//Ebook_select_modal
const dialogEbookAssignment = '.c-els-modal__window'
const ddSelectEbook = '.c-els-field__input'
const btnSelect = '.c-els-button--small'
const btnCancel = '.u-els-font-size-body-large'

//Choose-Reading
const txtPageRange = '[placeholder="Pages"]'
const txtPageRange01 = '.c-els-field__wrap .c-els-field__input'
const errorInvalid = '#field-message-undefined'
const btnNext = '.c-els-button--primary'

//Assignment
const textOverview = '.c-els-list__item'
const btnSaveAndComplete = '.c-els-button--primary'

class EbookEditorPage {

  verifyEbookEditorOpenSuccess() {
    cy.url().should('contain', 'ebook-assignment-editor')
  }

  selectEbookByName(ebookName) {
    cy.get(ddSelectEbook).selectContaining(ebookName)
    cy.get(btnSelect).should('be.enabled').click()
  }

  verifyEbookAssignmentDialogNotExist() {
    cy.get(dialogEbookAssignment).should('not.be.visible')
  }

  selectChapterByName(chapterName) {
    cy.contains(chapterName).find('input').click({ force: true })
  }

  setPageRange(pageRange) {
    cy.get(txtPageRange).type(pageRange)
  }

  clickNextStep() {
    cy.get(btnNext).should('be.enabled').click()
  }

  chooseReading(ebookName, chapterName, pageRange) {
    this.selectEbookByName(ebookName)
    cy.setChapterAndPageRange(chapterName,pageRange)
    this.clickNextStep()
  }

  verifyChooseReadingCorrectly(ebookName, chapterName, pageRange) {
    this.selectEbookByName(ebookName)
    cy.setChapterAndPageRange(chapterName,pageRange)
    this.clickNextStep()
    cy.get(textOverview).should('have.text', chapterName + '; Pages: ' + pageRange)
  }

  clickSaveAndComplete() {
    cy.get(btnSaveAndComplete).click()
  }

  createEbookFromResourcePage(ebookName, chapterName, pageRange) {
    this.selectEbookByName(ebookName)
    cy.setChapterAndPageRange(chapterName,pageRange)
    this.clickNextStep()
    this.clickSaveAndComplete()
  }

  verifyPagerange(pageRanges) {
    for (var i = 0; i < pageRanges.length; i++) {
      cy.get(txtPageRange).clear().type(pageRanges[i])
      cy.get(txtPageRange).invoke('val').then(ele => {
        //cy.log(`Typing value ${ele}`)
        if (ele == 2 || ele == '2-3') {
          cy.get(btnNext).should('be.enabled')
          cy.get(errorInvalid).should('not.be.visible') 
        } else
          cy.get(errorInvalid).should('be.visible').should('have.text', 'Invalid page range')
          //cy.get(btnNext).should('be.disabled')
      })
    }
  }

  closeEbookAssignmentEditor(){
    cy.get(btnCancel).click()
  }




}

export default EbookEditorPage;