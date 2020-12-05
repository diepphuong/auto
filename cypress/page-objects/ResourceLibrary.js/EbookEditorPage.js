
//Ebook_select_modal
const dialogEbookAssignment = '.c-els-modal__window'
const ddSelectEbook = '.c-els-field__input'
const btnSelect = '.c-els-button--small'

//Choose-Reading
const txtPageRange = '[placeholder="Pages"]'
const btnNext = '.c-els-button--primary'

//Assignment
const textOverview = '.c-els-list__item'
const btnSaveAndComplete = '.c-els-button--primary'

class EbookEditorPage { 

  verifyEbookEditorOpenSuccess() {
    cy.url().should('contain', 'ebook-assignment-editor')
  }

  // openEbookEditor() {
  //   const eBookLink = this.panel.getEbookLink()
  //   eBookLink.click()
  // }

  // openMyBook(bookName) {
  //   const allMyBooks = this.panel.getMyBooks()
  //   allMyBooks.contains(bookName).click()
  // }

 

  selectEbookByName(ebookName) {
    cy.get(ddSelectEbook).select(ebookName)
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
    this.selectChapterByName(chapterName)
    this.setPageRange(pageRange)
    this.clickNextStep()
  }

  verifyChooseReadingCorrectly(ebookName,chapterName,pageRange){
    this.selectEbookByName(ebookName)
    this.selectChapterByName(chapterName)
    this.setPageRange(pageRange)
    this.clickNextStep()
    cy.get(textOverview).should('have.text',chapterName + '; Pages: ' + pageRange)
  }

  clickSaveAndComplete(){
    cy.get(btnSaveAndComplete).click()
  }

  createEbookFromResourcePage(ebookName, chapterName, pageRange){
    this.selectEbookByName(ebookName)
    this.selectChapterByName(chapterName)
    this.setPageRange(pageRange)
    this.clickNextStep()
    this.clickSaveAndComplete()
    
  }


}

export default EbookEditorPage;