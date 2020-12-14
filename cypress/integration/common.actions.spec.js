import CommonActions from '../page-objects/CommonActions'

describe("Remove all resources successfully", () => {

    it('test login', () => {
       cy.launchCourse('vip@yopmail.com','CW-test4-Aug2602')
       cy.removeAllResources()
    });



})