import Panel from './Panel'

class EbookEditorPage{
  constructor(){
    this.panel = new Panel();
  }

    verifyEbookEditorOpenSuccess() {
        cy.url().should('contain', 'ebook-assignment-editor')
      }

    openEbookEditor(){
      const eBookLink = this.panel.getEbookLink()
      eBookLink.click()
    }

    openMyBook(bookName){
      const allMyBooks = this.panel.getMyBooks()
      allMyBooks.contains(bookName).click()
    }

    


}

export default EbookEditorPage;