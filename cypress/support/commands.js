//Add command to click a syllabus item link

Cypress.Commands.add('navigateToItemEditor', (itemName) => {
    cy.get('div.u-els-margin-bottom-1o2 .c-els-link__text').contains(itemName).click();
})