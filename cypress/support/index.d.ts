// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Click the Syllabus Item link from Resource Library page to navigate to item editor
       * @example
       * cy.navigateToItemEditor('eBook Reading')
       */
      navigateToItemEditor(itemName: String): Chainable<any>
    }
  }

  declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Click a Link based on containing name (text)
       * @example
       * cy.clickALinkText('My Course Plan')
       */
      clickALinkText(text: String): Chainable<any>
    }
  }


  declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Launch existing course from Backdoor with 2 required parameters "email" & "courseName"
       * @example
       * cy.launchCourse('vip@yopmail.com','Course1")
       */
      launchCourse(email: String, courseName: String): Chainable<any>
    }
  }
