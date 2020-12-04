//Add command to click a syllabus item link
Cypress.Commands.add('navigateToItemEditor', (itemName) => {
    cy.get('div.u-els-margin-bottom-1o2 .c-els-link__text').contains(itemName).click();
})

Cypress.Commands.add('clickALinkText', (text) => {
    cy.get('.c-scm-sidebar__section-link').contains(text).click({force: true})
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