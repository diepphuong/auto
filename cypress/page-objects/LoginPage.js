
//Login CW backdoor
const txtUsername = '#field-input-username'
const txtPassword = 'input#field-input-password'
const btnLogin = '#loginButton'

//Eols User Lookup
const txtEolsUsername = 'input#field-input-eolsUsername'
const btnFindUser = '#findUserButton'

//Select User
const btnSelect = '.c-els-table__body>div:nth-child(2) #select-user'

//Search Course
const selCourse = '#field-input-course-select'
const selISBN = '#field-input-isbn-select'
const btnGo = '#launchBtn'

//data
const backDoor = require('../data/Backdoor.json');

class LoginPage {
  userLogin (username, password){
    cy.clearLocalStorage()
    cy.visit('admin')
    cy.get(txtUsername).clear().type(username)
    cy.get(txtPassword).clear().type(password)
    cy.get(btnLogin).click()
  }
   
  eolsUserLookUp(email){
    cy.get(txtEolsUsername).clear().type(email)
    cy.get(btnFindUser).click()
  }

  selectUser(){
    cy.get(btnSelect).click()
  }

  selectCourse(course, ISBN){
    cy.get(selCourse).select(course)
    cy.get(selISBN).select(ISBN)
    cy.get(btnGo).click()
  }

  launchCourseBuilderSuccess(adminUsername, adminPassword, email, course, ISBN ){
    this.userLogin(adminUsername, adminPassword)
    this.eolsUserLookUp(email)
    this.selectUser()
    this.selectCourse(course, ISBN)
    cy.url().should('contain','course-builder')
  }

  launchCoursePlanSuccess(adminUsername, adminPassword, email, course, ISBN ){
    this.userLogin(adminUsername, adminPassword)
    this.eolsUserLookUp(email)
    this.selectUser()
    this.selectCourse(course, ISBN)
    cy.url().should('contain','course-plan')
}
}
  export default LoginPage;






