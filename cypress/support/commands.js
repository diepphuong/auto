
//Add command to click a syllabus item link
Cypress.Commands.add('navigateToItemEditor', (itemName) => {
  const itemLink = 'div.u-els-margin-bottom-1o2 .c-els-link__text'
  cy.get(itemLink).contains(itemName).click();
})

Cypress.Commands.add('clickALinkText', (text) => {
  cy.get('.c-scm-sidebar__section-link').contains(text).click({ force: true })
})


Cypress.Commands.add('launchCourse', (email, courseName) => {
  cy.clearLocalStorage()
  cy.visit('admin')
  cy.get('#field-input-username').clear().type('eolsadmin')
  cy.get('#field-input-password').clear().type('testing1')
  cy.get('#loginButton').click()
  //lookup email
  cy.get('input#field-input-eolsUsername').clear().type(email)
  cy.get('#findUserButton').click()
  //Select user
  cy.wait(2000) // need a better solution
  cy.get('body').then($body => {
    if ($body.find('.c-els-table__body>div:nth-child(2) #select-user').length > 0) {
      cy.get('.c-els-table__body>div:nth-child(2) #select-user').click()
    }
  })
  cy.get('#field-input-course-select').select(courseName)
  cy.get('#field-input-isbn-select').select('9780323398817')
  cy.get('#launchBtn').click()

})

Cypress.Commands.add('selectContaining', { prevSubject: 'subject' }, (subject, text) => {
  return cy.wrap(subject).contains('option', text).then(
    option => cy.get(subject).select(option.text().trim())
  )
})

Cypress.Commands.add('selectItembyIndex', { prevSubject: 'subject' }, (subject, index) => {
  cy.wrap(subject)
    .children('option')
    .eq(index)
    .then(e => {
      cy.wrap(subject).select(e.val())
    })
})

Cypress.Commands.add('moveItemToFolder', (destination, locationIndex) => {
  cy.get('#field-input-destination-dropdown').selectContaining(destination)
  cy.get('#field-input-location-dropdown').selectItembyIndex(locationIndex)
  cy.get('.c-els-button.c-els-button--default.c-els-button--primary.qe-scm-course-plan-move-modal-submit-button').click()
  cy.get('.c-els-toast__content').should('be.visible')
  // cy.wait(1000)

})

Cypress.Commands.add('setChapterAndPageRange', (chapterName, pageRange) => {
  cy.get('.c-els-ebook-pages .o-els-container').each(($el, index, $list) => {
    const innerText = $el.text()
    if (innerText.includes(chapterName)) {
      cy.wrap($el).find('input').click({ force: true })
      cy.wrap($el).find('[placeholder="Pages"]').type(pageRange)
    }
  })
})
Cypress.Commands.add('scrollToTargetPosition', (targetPosition) => {
  cy.get('div.c-scm-syllabus-item__heading').each(($el, index, $list) => {
    const innerText = $el.text()
    if (innerText.includes(targetPosition)) {
      cy.wrap($el).scrollIntoView().wait(1000)
    }

  })
})

Cypress.Commands.add('verifyItemDetails', (folder, title, location) => {
  const folderItem = '.c-scm-syllabus-item--folder'
  const syllabusItem = '.c-scm-syllabus-item'

  cy.wait(3000)
  cy.get(folderItem).each(($fd, index, $list) => {
    const innerText = $fd.text()
    if (innerText.includes(folder)) {
      cy.wrap($fd).scrollIntoView().wait(1000)
      cy.wrap($fd).find(syllabusItem)
        .eq(location)
        .should('contain.text', title)
        //.should('contain.text', pageRange)
    }
  })
})

Cypress.Commands.add('verifySyllabusItemHasAssignment', (folder, location) => {
  const folderItem = '.c-scm-syllabus-item--folder'
  const assignmentDetails = '.o-els-flex-layout__item .c-scm-syllabus-item__assignment'
  cy.wait(3000)
  cy.get(folderItem).each(($fd, index, $list) => {
    const innerText = $fd.text()
    if (innerText.includes(folder)) {
      cy.wrap($fd).scrollIntoView().wait(1000)
      cy.wrap($fd).find(assignmentDetails).eq(location).then((el) => {
        //if an assignment have available date & due date, it will have 2 childrent button atributes
        cy.get(el).find('button')
        .its('length')
        .should('eq', 2)
        //The assignment should have 2 content: Available date & Due date
        cy.get(el)
          .children()
          .should('contain', 'Available')
          .and('contain', 'Due')
        
      })
    }
  })

})

Cypress.Commands.add('verifySyllabusItemHasNoAssignment', (folder, location) => {
  const folderItem = '.c-scm-syllabus-item--folder'
  const assignmentDetails = '.o-els-flex-layout__item .c-scm-syllabus-item__assignment'
  cy.wait(3000)
  cy.get(folderItem).each(($fd, index, $list) => {
    const innerText = $fd.text()
    if (innerText.includes(folder)) {
      cy.wrap($fd).scrollIntoView().wait(1000)
      cy.wrap($fd).find(assignmentDetails).eq(location).then((el) => {
        //if a syllabus item has No Assignment, there's only 1 'button' attribute below the 'assignmentDetails'
        cy.get(el).find('button')
          .its('length')
          .should('eq', 1)
        //The content of the child button should be "not available"
        cy.get(el)
          .children('button')
          .should('contain', 'Not Available')
      })
    }
  })

})


Cypress.Commands.add('verifyMoveModalDisplay', () => {
  const modMoveReorder = '.c-scm-move-modal'
  cy.get(modMoveReorder).should('be.visible')
})

Cypress.Commands.add('verifyMoveModalNOTDisplay', () => {
  const modMoveReorder = '.c-scm-move-modal'
  cy.get(modMoveReorder).should('not.be.visible')
})




