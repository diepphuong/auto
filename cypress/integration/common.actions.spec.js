import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'
import CommonActions from '../page-objects/CommonActions'
import CoursePlanPage from '../page-objects/CoursePlanPage'

const backDoor = require('../data/Backdoor.json')
const coursePlan = require('../data/CoursePlan.json')


describe("Create course successfully", () => {
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
    })

    afterEach(() => {
      const coursePlanPage = new CoursePlanPage();
      coursePlanPage.removeItemsFromCoursePlan(coursePlan.folderName)
      coursePlanPage.openCourseSetup()
    });

    it('Create Manual Course', () => {
        const courseBuilderPage = new CourseBuilderPage();
        courseBuilderPage.createManualCourse(coursePlan.folderName)
        courseBuilderPage.verifyCourseCreateSuccess()

    });

    // it('Create Auto Course', () => {
    //   const courseBuilderPage = new CourseBuilderPage();
    //   courseBuilderPage.createAutoCourse()
    //   courseBuilderPage.verifyCourseCreateSuccess()
        
    // });



})