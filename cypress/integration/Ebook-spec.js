import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibrary.js/ResourceLibraryPage'
import EbookEditorPage from '../page-objects/ResourceLibrary.js/EbookEditorPage'
//import Panel from '../page-objects/ReSourceLibrary.js/Panel'


//const resourceLibraryData = require('../data/ResourceLibrary.json');
const loginData = require('../data/Backdoor.json');
const backDoor = require('../data/Backdoor.json');
const resourceLibraryData = require('../data/ResourceLibrary.json');
//const ebookData = require('../../data/Ebook.json');

describe("Open Ebook Editor successfully", () => {
    const eBook = new EbookEditorPage()
    beforeEach(() => {
        const coursePlan = new CoursePlanPage();
        const loginPage = new LoginPage();
        loginPage.launchCourse(backDoor.email, backDoor.course1)
        coursePlan.openResourcesPageByNavigationBar()
       
    })

    it.skip("Open My Book", () => {
      eBook.openMyBook('Fake Potter Ebook')
    })

    it("Open Ebook Editor successfully", () => {
      eBook.openEbookEditor()
      eBook.verifyEbookEditorOpenSuccess()
    })

describe('Create an ebook assignment successfully', () => {
  const eBook = new EbookEditorPage()
  beforeEach(() => {
    const coursePlan = new CoursePlanPage();
    const loginPage = new LoginPage();
    loginPage.launchCourse(backDoor.email, backDoor.course1)
    coursePlan.openResourcesPageByNavigationBar()
   
})


});


})