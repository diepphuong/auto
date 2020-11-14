
//Course Info
const txtCourseName = '#field-input-js-modal-focus'
const rdbCreateNewCourse = ':nth-child(1) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbCopyCourse = '.o-els-flex-layout > :nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbAutoCourse = 'div.c-scm-course-builder__column-item > .o-els-container > div:nth-of-type(2) .c-els-field__input'
const rdbManualCourse = 'div.c-scm-course-builder__column-item > .o-els-container > div:nth-of-type(3) #field-input-undefined'
//Course structure
const rdbWeek = 'div.c-scm-course-builder__inner .o-els-flex-layout__item > div > .o-els-container > div:nth-of-type(2) .c-els-field__input'
const rdbUnit = 'div.c-scm-course-builder__inner .o-els-flex-layout__item > div > .o-els-container > div:nth-of-type(3) .c-els-field__input'
const rdbModule = 'div.c-scm-course-builder__inner .o-els-flex-layout__item > div > .o-els-container > div:nth-of-type(4) .c-els-field__input'
const rdbCustom = 'div.c-scm-course-builder__inner .o-els-flex-layout__item > div > .o-els-container > div:nth-of-type(5) .c-els-field__input'
const txtNumberOfWeek = "[name='NUMBER_OF_SECTIONS']"
const textHowManyItems = 'div.c-scm-course-builder__inner .o-els-flex-layout__item > div:nth-of-type(1) > div:nth-of-type(2) .c-els-field__label-text'
const chkDayRange = '.c-els-field--checkbox > :nth-child(1) .c-els-field__input[type=checkbox]'
const previewSection = '.c-scm-course-builder-preview'
const textPreviewDescription = 'div.c-scm-course-builder-preview > div:nth-of-type(2) > strong'
const startDate = 'div.c-els-field--error .c-datepicker-input #field-input-undefined'
const endDate = ':nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__wrap > .o-els-icon-svg'
const btnCreateCourse = '.c-els-button'
//Error message
const errorEmptyCourseName = '.c-els-field__message'   

//Import data
const courseBuilderData = require('../data/CourseBuilder.json');

   //Variable for function verifyOrganizationText
   const typeOfOrganization = [rdbWeek ,rdbUnit , rdbModule]
   const rdbOrganization = ['week', 'unit', 'module']
   const rdbCustomFolder = "[name='CUSTOM_SECTION_TITLE']"




class CourseBuilderPage {
    verifyCourseName(courseName){
        cy.get(txtCourseName).clear()
        cy.get(errorEmptyCourseName).should('contain', courseBuilderData.errorEmptyCourseName)
        cy.get(btnCreateCourse, {timeout: 40000 }).should('be.disabled')
        cy.get(txtCourseName).clear().type(courseName)
    }

    verifyDefaultOptions(){
        cy.get(rdbAutoCourse).should('be.checked')
        cy.get(rdbManualCourse).should('not.be.checked')
        cy.get(rdbWeek).check({ force: true }).should('be.checked')
        cy.get(rdbUnit).should('not.be.checked')
        cy.get(rdbModule).should('not.be.checked')
        cy.get(rdbCustom).should('not.be.checked')
        cy.get(chkDayRange).should('be.checked')
        cy.get(txtNumberOfWeek).should('have.value', '16')
        cy.get(textHowManyItems).should('have.text', 'How many weeks do you need? *')
        cy.get(btnCreateCourse, {timeout: 40000 }).should('be.disabled')
        cy.get(previewSection).should('not.be.visible')
       // cy.get(startDate).should('not.be.visible')
    }

    selectManualBuildCourse(){
       cy.get(rdbManualCourse).check({ force: true }).should('be.checked')

    }
// Verify Course Builder page when selecting build course manually
    verifyPageWhenSelectManualBuildCourse(){
       this.selectManualBuildCourse()
       cy.get(rdbAutoCourse).should('not.be.checked')
       cy.get(rdbWeek).should('not.be.visible')
       cy.get(rdbUnit).should('not.be.visible')
       cy.get(rdbModule).should('not.be.visible')
       cy.get(rdbCustom).should('not.be.visible')
       cy.get(chkDayRange).should('not.be.visible')
       cy.get(txtNumberOfWeek).should('not.be.visible')
       cy.get(textHowManyItems).should('not.be.visible')
       cy.get(btnCreateCourse, {timeout: 40000 }).should('be.enabled')
       cy.get(previewSection).should('not.be.visible')
    }
    
    verifyDefaultCourseBuilderPage(){
        this.verifyDefaultOptions()
        
    }

    
    verifyTypeOfOrganization(customValue){  
        for (var i=0; i<=typeOfOrganization.length; i++){
        cy.get(typeOfOrganization[i]).check({force: true}).should('be.checked')
        cy.get(textHowManyItems).should('have.text', 'How many ' + rdbOrganization[i] + 's' + ' do you need? *')
        }
            
     }

    selectCustomOption(){
        cy.get(rdbCustom).check({force: true}).should('be.checked')
    }


    typeCustomValue(customValue){
        this.selectCustomOption()
        cy.get(rdbCustomFolder).clear().type(customValue).should('have.value', customValue)
    }

    verifyCustomValue(customValue){
        this.typeCustomValue(customValue)
        cy.get(textHowManyItems).should('have.text', 'How many ' + customValue + 's' + ' do you need? *')
    }

    
}


export default CourseBuilderPage;