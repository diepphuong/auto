import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'

const courseBuilderData = require('../data/CourseBuilder.json');

describe("Verify Course Builder Page", () => {
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseSuccess();
    });

    it("Validate course name", () => {
      const courseBuilderPage = new CourseBuilderPage();
      courseBuilderPage.verifyCourseName(courseBuilderData["special characters"]);
    })
    
  });
