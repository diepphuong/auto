import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'
import CommonActions from '../page-objects/CommonActions'

const backDoor = require('../data/Backdoor.json')

describe("Create course successfully", () => {
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
    })

    afterEach(() => {
      const commonAction = new CommonActions();
      commonAction.deleteAFolder()
     
      
    });

    it('Create Manual Course', () => {
        const courseBuilderPage = new CourseBuilderPage();
        courseBuilderPage.createManualCourse('Manual Course', 'Test')
        courseBuilderPage.verifyManualCourseCreateSuccess()

    });

    // it('Create Auto Course', () => {
        
    // });



})