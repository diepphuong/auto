
import CoursePlanPage from '../page-objects/CoursePlanPage'

describe("Remove all resources successfully", () => {
    const coursePlan = new CoursePlanPage()
    it('clear all resources', () => {
        cy.launchCourse('vip@yopmail.com', 'CW-test4-Aug2602')
        cy.removeAllResources()
        coursePlan.addParentFolder('Testing folder')
        
    });
    it.skip('add a default folder', () => {
        coursePlan.addParentFolder('Testing folder')
    });



})