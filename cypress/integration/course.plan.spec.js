import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'

//Data
const backDoor = require('../data/Backdoor.json')
const coursePlan = require('../data/CoursePlan.json')

/*
describe ('Verify Course Plan page', ()=>{
  const coursePlanPage = new CoursePlanPage()

  beforeEach(()=>{
    const loginPage = new LoginPage()
    loginPage.launchCourse(backDoor.email_lam, backDoor.course_lam)
  })

  it("Verify UI course plan page", () => {
    coursePlanPage.verifyUICoursePlan()
  })

})
*/
/*
describe ('Verify New Folder modal', ()=>{
  const coursePlanPage = new CoursePlanPage()

  beforeEach(()=>{
    const loginPage = new LoginPage()
    loginPage.launchCourse(backDoor.email_lam, backDoor.course_lam)
  })

  it("Verify UI New Folder modal", () => {
    coursePlanPage.verifyUINewFolderModal()
  })

  it("Verify Invalid case", () => {
    coursePlanPage.verifyNewFolderInvalidCase()
  })

  it("Verify Add New Folder from top menu", () => {
    coursePlanPage.addParentFolder(coursePlan.folderName)
  })

  it("Verify Add Sub Folder from top menu", () => {
    coursePlanPage.addSubFolder(coursePlan.subFolder, '- ' + coursePlan.folderName, coursePlan.insertLocation)
  })

  it("Verify Delete folder from Coure Plan", () => {
    coursePlanPage.removeItemsFromCoursePlan(coursePlan.folderName)
  })

})
*/

describe ('Verify Move / Reorder modal', ()=>{
  const coursePlanPage = new CoursePlanPage()
  const uuid = () => Cypress._.random(0, 1e6)
  const id = uuid()
  const name = coursePlan.movingFolder + id
  const item = coursePlan.itemRoot
  const subitem = coursePlan.itemSub

  before(()=>{
    const loginPage = new LoginPage()
    
    loginPage.launchCourse(backDoor.email_lam, backDoor.course_lam)
    coursePlanPage.addParentFolder(name)
  })

  it("Verify UI Move Reorder modal", () => {
    coursePlanPage.verifyUIMoveReorderModal(name)
  })

  it("Verify Move from parent level to sub level", () => {
    coursePlanPage.moveItemsFromCoursePlan(name,"Week 1",0)
    coursePlanPage.verifyItemOrderRootFolder("Week 1", name, 0)
  })

  it("Verify Reorder item in the parent folder", () => {
    coursePlanPage.moveItemsFromCoursePlan(item,"Week 1",0)
    coursePlanPage.verifyItemOrderRootFolder("Week 1", item, 0)
    coursePlanPage.moveItemsFromCoursePlan(item,"Week 1",2)
    coursePlanPage.verifyItemOrderRootFolder("Week 1", item, 2)
  })

  it("Verify Reorder item in the sub folder", () => {
    coursePlanPage.moveItemsFromCoursePlan(subitem,"Sub Folder",0)
    coursePlanPage.verifyItemOrderSubFolder("Sub Folder", subitem, 0)
    coursePlanPage.moveItemsFromCoursePlan(subitem,"Sub Folder",2)
    coursePlanPage.verifyItemOrderSubFolder("Sub Folder", subitem, 1)
  })

  after(()=>{
    coursePlanPage.removeItemsFromCoursePlan(name)
  })
})