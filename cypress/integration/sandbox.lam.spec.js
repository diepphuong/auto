import LoginPage from '../page-objects/LoginPage'
import SandboxLam from '../page-objects/SandboxLam'

//Data
const backDoor = require('../data/Backdoor.json')
const coursePlan = require('../data/CoursePlan.json')

describe ('Verify New Folder modal', ()=>{
  const sandbox = new SandboxLam()

  beforeEach(()=>{
    const loginPage = new LoginPage()
    loginPage.launchCourse(backDoor.email_lam, backDoor.course_lam)
  })

  it("Verify UI course plan page", () => {
    //sandbox.addParentFolder(coursePlan.folderName)
    //sandbox.verifyAddedItem(coursePlan.folderName)
    //sandbox.removeItemsFromCoursePlan(coursePlan.folderName)

    const item = 'Adaptive Lesson - 2222211111111/CP08ELSN1180'
    sandbox.moveItemsFromCoursePlan(item)
    sandbox.verifyUIMoveReorderModa(item)

  })

})