import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibraryPage'

//const resourceLibraryData = require('../data/ResourceLibrary.json');
const loginData = require('../data/Backdoor.json');

describe("Verify Resource Library Page", () => {
    
    it("should login as an admin!", () => {
      const loginPage = new LoginPage()
      const coursePlan = new CoursePlanPage()

      loginPage.launchCourse(loginData.email_lam, loginData.course_lam)
      coursePlan.goToResourceLibrary()
    });

  });
