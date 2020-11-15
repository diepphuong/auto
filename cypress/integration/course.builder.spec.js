import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'

const backDoor = require('../data/Backdoor.json');
const courseBuilderData = require('../data/CourseBuilder.json');

describe("Verify Course Builder Page", () => {
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
    });

    it("Verify default course builder page", () => {
     const courseBuilderPage = new CourseBuilderPage();
     courseBuilderPage.verifyDefaultCourseBuilderPage();
    });

    // it("Verify user is able to select all types to organize the syllabus items & the sentence will be changed based on the selected option", () => {
        // const courseBuilderPage = new CourseBuilderPage();
        // courseBuilderPage.verifyTypeOfOrganization()
        // courseBuilderPage.verifyCustomValue('folder')
    // });

    it('Select "Add date range to each week"', () => {
      const courseBuilderPage = new CourseBuilderPage();
      courseBuilderPage.verifyCalendarSection();
      
    });

    // it('Verify "course end date" will be auto filled when selecting "course start date"', () => {
      
    // });

    // it('Verify Preview section', () => {
      
    // });

    // it('Verify CB page when selecting build course manually', () => {
      
    // });
})
