import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'
import CommonActions from '../page-objects/CommonActions'
import CoursePlanPage from '../page-objects/CoursePlanPage'

const backDoor = require('../data/Backdoor.json')
const coursePlan = require('../data/CoursePlan.json')


describe("Create course successfully", () => {

    it('Launch course plan successfully', () => {
        const commonActions = new CommonActions();
        commonActions.navigateToCoursePlan() 
        commonActions.verifyCoursePlanIsOpenSuccess()

    });

    it.only('Launch Resource Library Page successfully', () => {
        const commonActions = new CommonActions();
        commonActions.navigateToCResourceLibrary()
        commonActions.verifyResourcePageIsOpenSuccess()
    });



})