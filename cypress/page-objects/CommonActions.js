//import Panel from './Panel'
import LoginPage from './LoginPage'
import CoursePlanPage from './CoursePlanPage'

//Import data
const loginData = require('../data/Backdoor.json');
const backDoor = require('../data/Backdoor.json');
const resourceLibraryData = require('../data/ResourceLibrary.json');


class CommonActions {

  navigateToCoursePlan() {
    const login = new LoginPage()
    login.launchCourse(backDoor.email, backDoor.course1)
  }

  verifyCoursePlanIsOpenSuccess(){
    cy.url().should('contain', 'course-plan')
  }

  navigateToCResourceLibrary(){
    this.navigateToCoursePlan()
    const coursePlan = new CoursePlanPage()
    coursePlan.openResourcesPageByNavigationBar()
  }

  verifyResourcePageIsOpenSuccess(){
    cy.url().should('contain', 'catalog')
  }

  

}

export default CommonActions;