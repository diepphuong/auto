import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'

const backDoor = require('../data/Backdoor.json');
const courseBuilderData = require('../data/CourseBuilder.json');

describe("Verify Course Builder Page", () => {
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
    });

    //it("Verify course name", () => {
     // const courseBuilderPage = new CourseBuilderPage();
      //courseBuilderPage.verifyCourseName(courseBuilderData["special characters"]);
    //})

    it("Verify course builder page", () => {
        const courseBuilderPage = new CourseBuilderPage();
        //courseBuilderPage.verifyDefaultCourseBuilderPage()
        courseBuilderPage.selectBuildCourseManual()
    
  });
})
