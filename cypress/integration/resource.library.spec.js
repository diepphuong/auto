import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibraryPage'

//const resourceLibraryData = require('../data/ResourceLibrary.json');
const loginData = require('../data/Backdoor.json');
const backDoor = require('../data/Backdoor.json');

// describe("Go to Resource Library Page successfully", () => {
//   const coursePlan = new CoursePlanPage();
//   beforeEach(()=>{
//     const loginPage = new LoginPage();
//     loginPage.launchCourse(backDoor.email, backDoor.course1)
//   })

//     it("Launch Resource Library page by clicking Resource Ebook from navigation bar", () => {
//       coursePlan.openResourcesPageByNavigationBar()
//       coursePlan.verifyResourcePageIsOpenSuccess()
//     });

//     it("Launch RL page by clicking Addmoreresources from Top menu", () => {
//       coursePlan.openResourcesPageByTopMenu()
//       coursePlan.verifyResourcePageIsOpenSuccess()
//     });

//     it('Launch RL page by clicking AddAResource from an empty folder', () => {
//       coursePlan.openResourcePageFromEmptyFolder()
//       coursePlan.verifyResourcePageIsOpenSuccess()
//     });

//     it('Launch RL page by clicking AddAResource from action menu', () => {

//     });

//   });

describe("", () => {
  const resourceLibrary = new ResourceLibraryPage()

  beforeEach(() => {
    const coursePlan = new CoursePlanPage();
    const loginPage = new LoginPage();
    loginPage.launchCourse(backDoor.email, backDoor.course1)
    coursePlan.openResourcesPageByNavigationBar()
  })

  // it('Verify Resource Library page header', () => {
  //   resourceLibrary.verifyPageHeader()

  // });

  // it('Verify All resources are checked when checkbox SelectAll is checked', () => {
  //   resourceLibrary.selectAllResources()
  //   resourceLibrary.verifyAllCheckboxesAreChecked()
  // });

  // it('Verify All resources are NOT checked when checkbox SelectAll is NOT checked', () => {
  //   resourceLibrary.unselectAllResources()
  //   resourceLibrary.verifyAllCheckboxesAreUnChecked()
  // });

  it('Verify filter taxonomy resource function works correctly', () => {
    resourceLibrary.countNumberOfTaxonomy()
  });

})
