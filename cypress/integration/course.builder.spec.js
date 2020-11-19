import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'

const backDoor = require('../data/Backdoor.json');
const courseBuilderData = require('../data/CourseBuilder.json');

describe("Verify Course Builder Page when selecting build course automatically", () => {
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
    });

    // it("Verify default course builder page", () => {
    //  const courseBuilderPage = new CourseBuilderPage();
    //  courseBuilderPage.verifyDefaultCourseBuilderPage();
    // });

    // it("Verify user is able to select all types to organize the syllabus items & the sentence will be changed based on the selected option", () => {
        // const courseBuilderPage = new CourseBuilderPage();
        // courseBuilderPage.verifyTypeOfOrganization()
        // courseBuilderPage.verifyCustomValue('folder')
    // });

    //Calendar (StartDate & EndDate) are displayed when checking "Add date range to each week" option, preview is not displayed
    //Calendar (StartDate & EndDate) are NOT displayed when unchecking "Add date range to each week" option, preview is displayed
    // it('Select "Add date range to each week"', () => {
    //   const courseBuilderPage = new CourseBuilderPage();
    //   courseBuilderPage.verifyCalendarSection();
    // });

    // it('Verify "course end date" will be auto filled when selecting "course start date"', () => {
    //   const courseBuilderPage = new CourseBuilderPage();
    //   courseBuilderPage.autoSelectEndDate();
    // });

    // it('Verify Preview section', () => {
    //   const courseBuilderPage = new CourseBuilderPage();
    //   courseBuilderPage.verifyPreviewWithoutAddDateRange();
    //   courseBuilderPage.verifyPreviewWithAddDateRange();
      
    // });  
})

describe("Verify Course Builder Page when selecting build course manually", () => {
  beforeEach(()=>{
    const loginPage = new LoginPage();
    loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
  })

  it('Verify CB page when selecting build course manually', () => {
    const courseBuilderPage = new CourseBuilderPage();
    courseBuilderPage.verifyPageWhenSelectManualBuildCourse();
    courseBuilderPage.changeFirstFolderTitle('shortcut')
  });

  
});
