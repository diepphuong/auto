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

    //const item = 'Adaptive Lesson - 2222211111111/CP08ELSN1180'
    //sandbox.moveItemsFromCoursePlan(item)
    //sandbox.verifyUIMoveReorderModa(item)

    //sandbox.verifyNewFolderInvalidCase()

    sandbox.wait(3000)
    /*root folder
    const item = "Sim 01"
    sandbox.moveItemsFromCoursePlan(item,"Week 1",0)
    sandbox.verifyItemOrderRootFolder("Week 1", item, 0)
    sandbox.moveItemsFromCoursePlan(item,"Week 1",2)
    */

    const item = "Adaptive Lesson - 2222233333333/PT10ELSN1025"
    sandbox.moveItemsFromCoursePlan(item,"Sub Folder",0)
    sandbox.verifyItemOrderSubFolder("Sub Folder", item, 0, "yes")
    sandbox.moveItemsFromCoursePlan(item,"Sub Folder",2)
  })

})