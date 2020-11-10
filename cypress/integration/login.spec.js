import LoginPage from '../page-objects/LoginPage'

const loginData = require('../data/CourseBuilder.json');

describe("Login by Admin-->search user-->select Course -> Navigate to CoursePlan page", () => {
  it("should login as an admin!", () => {
    const loginPage = new LoginPage();
    loginPage.loginByAdmin();
    loginPage.verifyCoursePlanURL();
  });
});
