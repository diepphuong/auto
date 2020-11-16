import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'

const backDoor = require('../data/Backdoor.json')

describe ('Verify Course Plan page', ()=>{
    beforeEach(()=>{
        const loginPage = new LoginPage()
        loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN)
      })

      it("Verify default course builder page", () => {
        const courseBuilderPage = new CourseBuilderPage()
        courseBuilderPage.verifyDefaultCourseBuilderPage()
       })
})