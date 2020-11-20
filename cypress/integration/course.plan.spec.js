import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'

//Data
const backDoor = require('../data/Backdoor.json')
const coursePlan = require('../data/CoursePlan.json')

describe ('Verify Course Plan page', ()=>{
  const coursePlanPage = new CoursePlanPage()

  beforeEach(()=>{
    const loginPage = new LoginPage()
    loginPage.launchCourse(backDoor.email_lam, backDoor.course_lam)
  })

  /* it("Verify UI course plan page", () => {
    coursePlanPage.verifyUICoursePlan()
  }) */

  it("Verify Add New Folder from top menu", () => {
    coursePlanPage.addParentFolder(coursePlan.folderName)
  })

  it("Verify Delete folder from Coure Plan", () => {
    coursePlanPage.removeItemsFromCoursePlan(coursePlan.folderName)
  })

})