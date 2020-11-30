import LoginPage from '../page-objects/LoginPage'
import CourseBuilderPage from '../page-objects/CourseBuilderPage'

const backDoor = require('../data/Backdoor.json');

describe("Verify Course Builder Page when selecting build course automatically", () => {
  const courseBuilderPage = new CourseBuilderPage();
    beforeEach(()=>{
      const loginPage = new LoginPage();
      loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
    });

    it("Verify default course builder page", () => {
     courseBuilderPage.verifyDefaultCourseBuilderPage();
    });

    it("Verify user is able to select all types to organize the syllabus items & the sentence will be changed based on the selected option", () => {
        courseBuilderPage.verifyTypeOfOrganization()
        
    });

    it('Verify that user is able to type a custom type of organization', () => {
      courseBuilderPage.verifyCustomValue('folder')
    });

    // Calendar (StartDate & EndDate) are displayed when checking "Add date range to each week" option, preview is not displayed
    // Calendar (StartDate & EndDate) are NOT displayed when unchecking "Add date range to each week" option, preview is displayed
    it('Select "Add date range to each week"', () => {
      courseBuilderPage.verifyCalendarSection();
    });

    it('Verify "course end date" will be auto filled when selecting "course start date"', () => {
      courseBuilderPage.verifyEndDateValue();
    });

    it('Verify Preview section when does not select AddDateRange option ', () => {
      courseBuilderPage.selectTypeOfOrganization();
      courseBuilderPage.verifyPreviewWithoutAddDateRange();
     
    });  

    it('Verify Preview section when selecting AddDateRange option ', () => {
      courseBuilderPage.verifyPreviewWithAddDateRange();
    });  
})

describe("Verify Course Builder Page when selecting build course manually", () => {
  const courseBuilderPage = new CourseBuilderPage();
  beforeEach(()=>{
    const loginPage = new LoginPage();
    loginPage.launchCourseBuilderSuccess(backDoor.adminUsername, backDoor.adminPassword, backDoor.email, backDoor.course, backDoor.ISBN);
  })

  it('Verify CB page when selecting build course manually', () => {
    courseBuilderPage.verifyPageWhenSelectManualBuildCourse();
    courseBuilderPage.changeFirstFolderTitle('shortcut')
  });

  
});
