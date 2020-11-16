import LoginPage from '../page-objects/LoginPage'

const loginData = require('../data/Backdoor.json');

describe("Login by Admin-->search user-->select Course -> Navigate to CourseBuilder/CoursePlan page", () => {
  const loginPage = new LoginPage()

  it("should launch Course Builder", () => {
    loginPage.launchCourse(loginData.email, loginData.course)
    cy.url().should('contain','course-builder')
  })

  it("should launch Course Plan", () => {
     loginPage.launchCourse(loginData.email_lam, loginData.course_lam)
     cy.url().should('contain','course-plan')
   })
})
