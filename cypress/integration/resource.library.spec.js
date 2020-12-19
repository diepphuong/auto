// <reference types="cypress" />

import ResourceLibraryPage from '../page-objects/ReSourceLibrary.js/ResourceLibraryPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
const backDoor = require('../data/Backdoor.json');


describe("Go to Resource Library Page successfully", () => {
  const coursePlan = new CoursePlanPage()
  const resourcePage = new ResourceLibraryPage()
  before(() => {
    cy.launchCourse(backDoor.email, backDoor.course1)
    cy.url().should('contain', 'course-plan')
  })

  afterEach(() => {
    resourcePage.closeReourcePage()
  })

  it('Launch RL page by clicking AddAResource from an empty folder', () => {
    const folder = 'Empty Folder'
    coursePlan.addParentFolder(folder)
    coursePlan.openResourcePageFromEmptyFolder(folder)
    coursePlan.verifyResourcePageIsOpenSuccess()
  });

  it("Launch Resource Library page by clicking Resource Ebook from navigation bar", () => {
    coursePlan.openResourcesPageByNavigationBar()
    coursePlan.verifyResourcePageIsOpenSuccess()
  });

  it("Launch RL page by clicking Addmoreresources from Top menu", () => {
    coursePlan.openResourcesPageByTopMenu()
    coursePlan.verifyResourcePageIsOpenSuccess()
  });


  // it('Launch RL page by clicking AddAResource from action menu', () => {

  // });

});

describe("Verify states of elements on Resource Library page", () => {
  const resourcePage = new ResourceLibraryPage()
  const resourceData = require('../data/ResourceLibrary.json');
  before(() => {
    cy.launchCourse(backDoor.email, backDoor.course1)
    cy.clickALinkText(resourceData.linkResourceLibrary)
    cy.url().should('contain', 'catalog')
  });

  afterEach(() => {
    resourcePage.closeReourcePage()
    cy.clickALinkText(resourceData.linkResourceLibrary)
    cy.url().should('contain', 'catalog')
  });

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
    const taxonomy01 = 'Potter 10e Chapter'
    const totalResourceOfTaxonomy01 = 14
    const taxonomy02 = 'Cooper FAAHN 8e Chapter'
    const totalResourceOfTaxonomy02 = 16
    resourcePage.selectTaxonomy(taxonomy01)
    resourcePage.selectAllResources()
    resourcePage.countNumberOfResources(totalResourceOfTaxonomy01)
    resourcePage.verifyNumberOfSelectedItems(totalResourceOfTaxonomy01)
    resourcePage.selectTaxonomy(taxonomy02)
    resourcePage.selectAllResources()
    resourcePage.countNumberOfResources(totalResourceOfTaxonomy02)
    resourcePage.verifyNumberOfSelectedItems(totalResourceOfTaxonomy02)
  });

  it('Verify filter resource by selecting Chapter works correctly', () => {
    const taxonomy = 'Potter 10e Chapter'
    const chapter = 'Chapter 47, Bowel Elimination'
    const totalResource = 7
    resourcePage.selectTaxonomy(taxonomy)
    resourcePage.selectChapter(chapter)
    resourcePage.selectAllResources()
    resourcePage.verifyNumberOfSelectedItems(totalResource)
    resourcePage.countNumberOfResources(totalResource)

  });

  it('Verify the number of selected items is displayed correctly', () => {
    const numOfResources = 5
    const totalResource = 30
    resourcePage.selectMultipleResources(1)
    resourcePage.verifyNumberOfSelectedItems(1)
    resourcePage.unselectAllResources()
    resourcePage.selectMultipleResources(numOfResources)
    resourcePage.verifyNumberOfSelectedItems(numOfResources)
    resourcePage.selectAllResources()
    resourcePage.verifyNumberOfSelectedItems(totalResource)
  });

  it('Verify the state of Add button', () => {
    resourcePage.verifyAddBtnWhenDoNotSelectResource()
    resourcePage.verifyAddBtnWhentSelectAResource(resourceData.resourceName)
  });

});

describe.only("Verify resource(s) is/are added to folder successfully", () => {
  const resourcePage = new ResourceLibraryPage()
  const resourceData = require('../data/ResourceLibrary.json');
  const numOfResource = '3'

  before(() => {
    cy.launchCourse(backDoor.email, backDoor.course1)
    cy.clickALinkText(resourceData.linkResourceLibrary)
    cy.url().should('contain', 'catalog')
  });

  afterEach(() => {
    resourcePage.closeReourcePage()
    cy.clickALinkText(resourceData.linkResourceLibrary)
  });

  it('Add a resource to an existing folder successfully', () => {
    //resourcePage.addAResourceToExistingFolder(1, resourceData.folderName)
    //resourcePage.selectMultipleResources(1)
    resourcePage.selectResourceByName(resourceData.resourceName)
    resourcePage.selectFolder(resourceData.folderName)
    resourcePage.clickAddButton()
    resourcePage.verifyToastMessageDisplay()
    resourcePage.verifyFolderNameInToastMessage(resourceData.folderName)
    resourcePage.verifyResourceNameInToastMessage(resourceData.resourceName)
  });

  it('Add a resource to a newly created folder successfully', () => {
    const newFolderName = resourceData.folderName + 'One Resource'
    //resourcePage.addResourceToNewFolder(1, newFolderName)
    //resourcePage.selectMultipleResources(1)
    resourcePage.selectResourceByName(resourceData.resourceName)
    resourcePage.selectFolder(resourceData.newFolder)
    resourcePage.clickAddButton()
    resourcePage.createNewFolder(newFolderName)
    resourcePage.verifyToastMessageDisplay()
    resourcePage.verifyFolderNameInToastMessage(newFolderName)
    resourcePage.verifyResourceNameInToastMessage(resourceData.resourceName)
  });

  it('Add multiple resources to an existing folder successfully', () => {
    //resourcePage.addMultipleResourcesToExistingFolder(numOfResource, resourceData.folderName)
    resourcePage.selectMultipleResources(numOfResource)
    resourcePage.selectFolder(resourceData.folderName)
    resourcePage.clickAddButton()
    resourcePage.verifyToastMessageDisplay()
    resourcePage.verifyResourceNameInToastMessage(numOfResource + ' resources')
    resourcePage.verifyFolderNameInToastMessage(resourceData.folderName)
  });

  it('Add multiple resources to a newly created folder successfully', () => {
    const newFolderName = resourceData.folderName + 'Multiple Resources'
    //resourcePage.addMultipleResourcesToNewFolder(numOfResource, newFolderName)
    resourcePage.selectMultipleResources(numOfResource)
    resourcePage.selectFolder(resourceData.newFolder)
    resourcePage.clickAddButton()
    resourcePage.createNewFolder(newFolderName)
    resourcePage.verifyToastMessageDisplay()
    resourcePage.verifyResourceNameInToastMessage(numOfResource + ' resources')
    resourcePage.verifyFolderNameInToastMessage(newFolderName)
  });

  it('Add all resources to an existing folder successfully', () => {
    //resourcePage.addAllResourcesToExistingFolder(resourceData.folderName)
    resourcePage.selectAllResources()
    resourcePage.selectFolder(resourceData.folderName)
    resourcePage.clickAddButton()
    resourcePage.verifyToastMessageDisplay()
    resourcePage.verifyResourceNameInToastMessage('30 resources')
    resourcePage.verifyFolderNameInToastMessage(resourceData.folderName)
  });

  it('Add all resources to a newly created folder successfully', () => {
    const newFolderName = resourceData.folderName + 'All Resources'
    //resourcePage.addAllResourcesToNewFolder(newFolderName)
    resourcePage.selectAllResources()
    resourcePage.selectFolder(resourceData.newFolder)
    resourcePage.clickAddButton()
    resourcePage.createNewFolder(newFolderName)
    resourcePage.verifyToastMessageDisplay()
    resourcePage.verifyResourceNameInToastMessage('30 resources')
    resourcePage.verifyFolderNameInToastMessage(newFolderName)
  });

  it('Cancel adding resources to a newly created folder', () => {
    //resourcePage.cancelAddResourceToNewFolder(1, newFolderName)
    resourcePage.selectMultipleResources(numOfResource)
    resourcePage.selectFolder(resourceData.newFolder)
    resourcePage.clickAddButton()
    resourcePage.clickCancelButton()
    resourcePage.verifyToastMessageNotDisplay()
  });

});


describe.only("Verify added resource details in Course Plan page", () => {
  const resourcePage = new ResourceLibraryPage()
  const resourceData = require('../data/ResourceLibrary.json');

  beforeEach(() => {
    cy.launchCourse(backDoor.email, backDoor.course1)
    cy.clickALinkText(resourceData.linkResourceLibrary)
    cy.url().should('contain', 'catalog')
  });

  it('Verify added resources are displayed in course plan successfully', () => {
    const newFolderName = resourceData.folderName + ' 01'
    resourcePage.selectResourceByName(resourceData.resourceName)
    resourcePage.selectFolder(resourceData.newFolder)
    resourcePage.clickAddButton()
    resourcePage.createNewFolder(newFolderName, 0)
    resourcePage.verifyToastMessageDisplay()
    resourcePage.clickFolderLinkOnToastMessage()
    cy.verifyItemDetails(newFolderName, resourceData.resourceName, 0)
    cy.verifySyllabusItemHasNoAssignment(newFolderName, 0)
  });

});


