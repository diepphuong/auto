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

// describe("Verify states of elements on Resource Library page", () => {
//   const resourcePage = new ResourceLibraryPage()
//   const resourceData = require('../data/ResourceLibrary.json');
//   beforeEach(() => {
//     cy.launchCourse(backDoor.email, backDoor.course1)
//     cy.clickALinkText(resourceData.linkResourceLibrary)
//     cy.url().should('contain', 'catalog')
//   })

// it('Verify Resource Library page header', () => {
//   resourcePage.verifyPageHeader()

// });

// it('Verify All resources are checked when checkbox SelectAll is checked', () => {
//   resourcePage.selectAllResources()
//   resourcePage.verifyAllCheckboxesAreChecked()
// });

// it('Verify All resources are NOT checked when checkbox SelectAll is NOT checked', () => {
//   resourcePage.unselectAllResources()
//   resourcePage.verifyAllCheckboxesAreUnChecked()
// });

// it('Verify filter resource by selecting Taxonomy works correctly', () => {
//   resourcePage.filterResourceByTaxonomy()
// });

// it('Verify filter resource by selecting Chapter works correctly', () => {
//   resourcePage.filterResourceByChapter()

// });

//   it('Verify the number of selected items is displayed correctly', () => {
//     resourcePage.verifyNumberOfSelectedItems()
//   });

//   it('Verify the Add button is disable when do not select any resource or folder', () => {
//     resourcePage.verifyAddBtnWhenDoNotSelectResource()
//     resourcePage.verifyAddBtnWhentSelectAResource(2)
//   });

// })

describe("Verify resource(s) is added to folder successfully", () => {
  const resourcePage = new ResourceLibraryPage()
  const resourceData = require('../data/ResourceLibrary.json');
  const numOfResource = '3'
  beforeEach(() => {
    cy.launchCourse(backDoor.email, backDoor.course1)
    cy.clickALinkText(resourceData.linkResourceLibrary)
    cy.url().should('contain', 'catalog')
  })

  // it('Add a resource to an existing folder successfully', () => {
  //   resourcePage.addAResourceToExistingFolder(resourceData.resourceName, resourceData.folderName)
  //   resourcePage.verifyToastMessageDisplay()
  //   resourcePage.verifyFolderNameInToastMessage('Testing Folder')
    // resourcePage.verifyTextInToastMessage(resourceData.realResourceName)
  // });

  // it('Add a resource to a newly created folder successfully', () => {
  //   const newFolderName = resourceData.folderName + 'One Resource'
  //   resourcePage.addResourceToNewFolder(resourceData.resourceName, newFolderName)
  //   resourcePage.verifyToastMessageDisplay()
  //   resourcePage.verifyFolderNameInToastMessage(newFolderName)
   // resourcePage.verifyTextInToastMessage(resourceData.realResourceName)
  // });
  //not run
  // it('Add multiple resources to an existing folder successfully', () => {
  //   resourcePage.addMultipleResourcesToExistingFolder(numOfResource, resourceData.folderName)
  //   resourcePage.verifyToastMessageDisplay()
  //   resourcePage.verifyTextInToastMessage(numOfResource + ' resources')
  //   resourcePage.verifyFolderNameInToastMessage('Testing Folder')
  // });
  // //not run
  // it('Add multiple resources to a newly created folder successfully', () => {
  //   const newFolderName = resourceData.folderName + 'Multiple Resources'
  //   resourcePage.addMultipleResourcesToNewFolder(numOfResource, newFolderName)
  //   resourcePage.verifyToastMessageDisplay()
  //   resourcePage.verifyTextInToastMessage(numOfResource + ' resources')
  //   resourcePage.verifyFolderNameInToastMessage(newFolderName)
  // });
  // //not run
  // it('Add all resources to an existing folder successfully', () => {
  //   resourcePage.addAllResourcesToExistingFolder(resourceData.folderName)
  //   resourcePage.verifyToastMessageDisplay()
  //   resourcePage.verifyTextInToastMessage('30 resources')
  //   resourcePage.verifyFolderNameInToastMessage('Testing Folder')
  // });
  // //not run
  // it('Add all resources to a newly created folder successfully', () => {
  //   const newFolderName = resourceData.folderName + 'All Resources'
  //   resourcePage.addAllResourcesToNewFolder(newFolderName)
  //   resourcePage.verifyToastMessageDisplay()
  //   resourcePage.verifyTextInToastMessage('30 resources')
  //   resourcePage.verifyFolderNameInToastMessage(newFolderName)
  // });

  // it('Cancel adding resources to a newly created folder', () => {
  //   const newFolderName = resourceData.folderName + 'Cancel'
  //   resourcePage.cancelAddResourceToNewFolder(1, newFolderName)
  //   resourcePage.verifyToastMessageNotDisplay()
  // });


})




