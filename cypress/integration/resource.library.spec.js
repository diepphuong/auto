import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibraryPage'

//const resourceLibraryData = require('../data/ResourceLibrary.json');
const loginData = require('../data/Backdoor.json');
const backDoor = require('../data/Backdoor.json');

describe("Go to Resource Library Page successfully", () => {
  const coursePlan = new CoursePlanPage();
  beforeEach(()=>{
    const loginPage = new LoginPage();
    loginPage.launchCourse(backDoor.email, backDoor.course1)
  })
    
    it("Launch Resource Library page by clicking Resource Ebook from navigation bar", () => {
      coursePlan.openResourcesPageByNavigationBar()
      coursePlan.verifyResourcePageIsOpenSuccess()
    });

    it("Launch RL page by clicking Addmoreresources from Top menu", () => {
      coursePlan.openResourcesPageByTopMenu()
      coursePlan.verifyResourcePageIsOpenSuccess()
    });

    it('Launch RL page by clicking AddAResource from an empty folder', () => {
      coursePlan.openResourcePageFromEmptyFolder()
      coursePlan.verifyResourcePageIsOpenSuccess()
    });

    it('Launch RL page by clicking AddAResource from action menu', () => {
      
    });


  });
