

//Links
const eBookLink = 'div.qe-scm-catalog-action-ADD_EBOOK_READING .c-els-link__text'
const eAQLink = 'div.qe-scm-catalog-action-ADD_ADAPTIVE_QUIZ .c-els-link__text'
const adaptiveLessonLink = 'div.qe-scm-catalog-action-ADD_ADAPTIVE_LESSON .c-els-link__text'
const simchartLink = 'div.qe-scm-catalog-action-ADD_SIMCHART .c-els-link__text'

//My Books
const myBooks = 'div.c-scm-my-resources > div .qe-scm-ebook-title'

class Panel{


    getEbookLink(){
        return cy.get(eBookLink)
    }

    getEAQLink(){
        return cy.get(eAQLink)
    }

    getAdaptiveLessonLink(){
        return cy.get(adaptiveLessonLink)
    }

    getSimchartLink(){
        return cy.get(simchartLink)
    }

    getMyBooks(){
        return cy.get(myBooks)
    }

}

export default Panel;