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
       * select children elements of an dropdown list by index
       * @example
       * cy.get('#field-input-location-dropdown').selectItembyIndex(0)
       */
      selectItemByIndex(index: Number): Chainable<any>
    }
  }

 
  
  declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Select destination & location to locate newly created items
       * @example
       * cy.moveItemToFolder('destination','location")
       */
      moveItemToFolder(destination: String, location: String): Chainable<any>
    }
  }

  declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Select an element via text & partial text
       * This custom command can be yelded from previous subject
       * @example
       * cy.get('#field-input-destination-dropdown').selectContaining('Testing Folder')
       */
    
      selectContaining(text: string | string[], subject): Chainable<Subject>;
    }
  }
