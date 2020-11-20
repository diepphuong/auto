import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibraryPage'

//const resourceLibraryData = require('../data/ResourceLibrary.json');
const loginData = require('../data/Backdoor.json');
const backDoor = require('../data/Backdoor.json');

describe("Go to Resource Library Page successfully", () => {
  const resourceLibraryPage = new ResourceLibraryPage()
  beforeEach(()=>{
    const loginPage = new LoginPage();
    loginPage.launchCourse(backDoor.email, backDoor.course1)
  })
    
    it("Launch Resource Library page by clicking Resource Ebook from navigation bar", () => {
      resourceLibraryPage.openResourcesPageByNavigationBar()
      resourceLibraryPage.verifyResourcePageIsOpenSuccess()
    });

    it("Launch RL page by clicking Addmoreresources from Top menu", () => {
      resourceLibraryPage.openResourcesPageByTopMenu()
      resourceLibraryPage.verifyResourcePageIsOpenSuccess()
    });


  });
