// <reference types="cypress" />

import ResourceLibraryPage from '../page-objects/ReSourceLibrary.js/ResourceLibraryPage'

const backDoor = require('../data/Backdoor.json');


// describe("Go to Resource Library Page successfully", () => {
//   const coursePlan = new CoursePlanPage()
//   const resourcePage = new ResourceLibraryPage()
//   before(() => {
//     cy.launchCourse(backDoor.email, backDoor.course1)
//     cy.url().should('contain', 'course-plan')

//   })

//   afterEach(() => {
//     resourcePage.closeReourcePage()
//   })

//   it("Launch Resource Library page by clicking Resource Ebook from navigation bar", () => {
//     coursePlan.openResourcesPageByNavigationBar()
//     coursePlan.verifyResourcePageIsOpenSuccess()
//   });

//   it("Launch RL page by clicking Addmoreresources from Top menu", () => {
//     coursePlan.openResourcesPageByTopMenu()
//     coursePlan.verifyResourcePageIsOpenSuccess()
//   });

//   it('Launch RL page by clicking AddAResource from an empty folder', () => {
//     coursePlan.openResourcePageFromEmptyFolder()
//     coursePlan.verifyResourcePageIsOpenSuccess()
//   });

// it('Launch RL page by clicking AddAResource from action menu', () => {

// });

//});

describe("Verify states of elements on Resource Library page", () => {
  const resourcePage = new ResourceLibraryPage()
  const resourceData = require('../data/ResourceLibrary.json');
  beforeEach(() => {
    cy.launchCourse(backDoor.email, backDoor.course1)
    cy.clickALinkText(resourceData.linkResourceLibrary)
    cy.url().should('contain', 'catalog')
  })

  it('Verify Resource Library page header', () => {
    resourcePage.verifyPageHeader()

  });

  it('Verify All resources are checked when checkbox SelectAll is checked', () => {
    resourcePage.selectAllResources()
    resourcePage.verifyAllCheckboxesAreChecked()
  });

  it('Verify All resources are NOT checked when checkbox SelectAll is NOT checked', () => {
    resourcePage.unselectAllResources()
    resourcePage.verifyAllCheckboxesAreUnChecked()
  });

  it('Verify filter resource by selecting Taxonomy works correctly', () => {
    resourcePage.filterResourceByTaxonomy()
  });

  it('Verify filter resource by selecting Chapter works correctly', () => {
    resourcePage.filterResourceByChapter()

  });

  it('Verify the number of selected items is displayed correctly', () => {
    resourcePage.verifyNumberOfSelectedItems()
  });

  it('Verify the Add button is disable when do not select any resource or folder', () => {
    resourcePage.verifyAddBtnWhenDoNotSelectResource()
    resourcePage.verifyAddBtnWhentSelectAResource()
  });

})

// describe("Verify resource(s) is added to folder successfully", () => {
//   const resourcePage = new ResourceLibraryPage()
//   const resourceData = require('../data/ResourceLibrary.json');
//   beforeEach(() => {
//     cy.launchCourse(backDoor.email, backDoor.course1)
//     cy.clickALinkText(resourceData.linkResourceLibrary)
//     cy.url().should('contain', 'catalog')
//   })

//   it('Add a resource to an existing folder successfully', () => {
//     resourceLibrary.addAResourceToExistingFolder(resourceLibraryData.resourceName, resourceLibraryData.folderName)
//     resourceLibrary.verifyToastMessageDisplay()
//     resourceLibrary.verifyFolderNameInToastMessage('Testing Folder')
//     resourceLibrary.verifyResourceNameInToastMessage(resourceLibraryData.realResourceName)
//   });

//   it('Add a resource to a newly created folder successfully', () => {
//     const newFolderName = resourceLibraryData.folderName + 'One Resource'
//     resourceLibrary.addResourceToNewFolder(resourceLibraryData.resourceName, newFolderName)
//     resourceLibrary.verifyToastMessageDisplay()
//     resourceLibrary.verifyFolderNameInToastMessage(newFolderName)
//     resourceLibrary.verifyResourceNameInToastMessage(resourceLibraryData.realResourceName)  
//   });
// //not run
//   it.skip('Add multiple resources to an existing folder successfully', () => {
//     resourceLibrary.addMultipleResourcesToExistingFolder(3,resourceLibraryData.folderName)
//     resourceLibrary.verifyToastMessageDisplay()
//     resourceLibrary.verifyFolderNameInToastMessage('Testing Folder')
//   });
// //not run
//    it.skip('Add multiple resources to a newly created folder successfully', () => {
//     const newFolderName = resourceLibraryData.folderName + 'Multiple Resources'
//     resourceLibrary.addMultipleResourcesToNewFolder(3, newFolderName)
//     resourceLibrary.verifyToastMessageDisplay()
//     resourceLibrary.verifyFolderNameInToastMessage(newFolderName)
//   });
// //not run
// it.skip('Add all resources to an existing folder successfully', () => {
//     resourceLibrary.addAllResourcesToExistingFolder(resourceLibraryData.folderName)
//     resourceLibrary.verifyToastMessageDisplay()
//     resourceLibrary.verifyFolderNameInToastMessage('Testing Folder')
//   });
// //not run
//   it('Add all resources to a newly created folder successfully', () => {
//     const newFolderName = resourceLibraryData.folderName + 'All Resources'
//     resourceLibrary.addAllResourcesToNewFolder(newFolderName)
//     resourceLibrary.verifyToastMessageDisplay()
//     resourceLibrary.verifyFolderNameInToastMessage(newFolderName)
//   });

//   it.skip('Cancel adding resources to a newly created folder', () => {
//     const newFolderName = resourceLibraryData.folderName + 'Cancel'
//     resourceLibrary.cancelAddResourceToNewFolder(1, newFolderName)
//     resourceLibrary.verifyToastMessageNotDisplay()
//   });


// it('Cancel adding resources to a newly created folder', () => {
//   cy.navigateToItemEditor('eBook Reading')

//   //resourceLibrary.navigateToItemEditor('eBook Reading')
//   });







