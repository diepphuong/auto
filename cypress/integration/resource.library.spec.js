import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibraryPage'

//const resourceLibraryData = require('../data/ResourceLibrary.json');

describe("Verify Resource Library Page", () => {
    
    it("should login as an admin!", () => {
      const loginPage = new LoginPage()
      const coursePlan = new CoursePlanPage()

      loginPage.launchCourseSuccess("cw_canvas_fac01@sharklasers.com","test4_CW_Oct31")
      coursePlan.goToResourceLibraryPage()
    });

  });
