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

  before(()=>{
    const loginPage = new LoginPage()
    
    loginPage.launchCourse(backDoor.email_lam, backDoor.course_lam)
    coursePlanPage.addParentFolder(name)
  })

  it("Verify UI Move Reorder modal", () => {
    coursePlanPage.verifyUIMoveReorderModal(name)
  })

  it("Verify Move from parent level to sub level", () => {
    coursePlanPage.moveItemsFromCoursePlan(name,"- Week 1","Insert here (top)")
  })

  after(()=>{
    coursePlanPage.removeItemsFromCoursePlan(name)
  })
})