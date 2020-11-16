
//Course Info 
const courseBuilderPage = '.c-scm-course-builder__container'
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
//const calendarSection = 'span.c-els-field__label-text-content > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)'
const txtStartDate = 'span.c-els-field__label-text-content > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)'
const txtEndDate = 'span.c-els-field__label-text-content > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) input:nth-of-type(1)'
const btnCreateCourse = '.c-els-button'
//Error message
const errorEmptyCourseName = '.c-els-field__message'

//Import data
const courseBuilderData = require('../data/CourseBuilder.json');

//Variable for function verifyOrganizationText
const typeOfOrganization = [rdbWeek, rdbUnit, rdbModule]
const rdbOrganization = ['week', 'unit', 'module']
const rdbCustomFolder = "[name='CUSTOM_SECTION_TITLE']"

//Variable for auto fill end date
const startDate = Cypress.moment().format()
const endDate = Cypress.moment().add(6,'days').format()



class CourseBuilderPage {
    verifyCourseName(courseName) {
        cy.get(txtCourseName).clear()
        cy.get(errorEmptyCourseName).should('contain', courseBuilderData.errorEmptyCourseName)
        cy.get(btnCreateCourse, { timeout: 40000 }).should('be.disabled')
        cy.get(txtCourseName).clear().type(courseName)
    }
    //By default:
    //Options are checked: Create new course, added course content auto, Week, Add date range to weekweek
    //Options are not checked: build course manual, Unit, Module, CustomCustom
    //The number of week is: 16
    //Start date is displayed and empty
    //End date is disabled and empty
    verifyDefaultOptions() {
        cy.get(rdbAutoCourse).should('be.checked')
        cy.get(rdbManualCourse).should('not.be.checked')
        cy.get(rdbWeek).check({ force: true }).should('be.checked')
        cy.get(rdbUnit).should('not.be.checked')
        cy.get(rdbModule).should('not.be.checked')
        cy.get(rdbCustom).should('not.be.checked')
        cy.get(courseBuilderPage).scrollTo('bottom')
        cy.get(chkDayRange).should('be.checked')
        cy.get(txtNumberOfWeek).should('have.value', '16')
        cy.get(textHowManyItems).should('have.text', 'How many weeks do you need? *')
        cy.get(btnCreateCourse, { timeout: 40000 }).should('be.disabled')
        cy.get(previewSection).should('not.be.visible')
        cy.get(txtStartDate).should('be.visible').should('have.attr', 'placeholder', 'MM-DD-YYYY')
        cy.get(txtEndDate).should('be.disabled').should('have.attr', 'placeholder', 'MM-DD-YYYY')

    }

    verifyDefaultCourseBuilderPage() {
        this.verifyDefaultOptions()
    }

    selectManualBuildCourse() {
        cy.get(rdbManualCourse).check({ force: true }).should('be.checked')
    }

    selectAutoBuildCourse() {
        cy.get(rdbAutoCourse).check({ force: true }).should('be.checked')
    }

    // Verify Course Builder page when selecting build course manually
    verifyPageWhenSelectManualBuildCourse() {
        this.selectManualBuildCourse()
        cy.get(rdbAutoCourse).should('not.be.checked')
        cy.get(rdbWeek).should('not.be.visible')
        cy.get(rdbUnit).should('not.be.visible')
        cy.get(rdbModule).should('not.be.visible')
        cy.get(rdbCustom).should('not.be.visible')
        cy.get(courseBuilderPage).scrollTo('bottom')
        cy.get(chkDayRange).should('not.be.visible')
        cy.get(txtNumberOfWeek).should('not.be.visible')
        cy.get(textHowManyItems).should('not.be.visible')
        cy.get(btnCreateCourse, { timeout: 40000 }).should('be.enabled')
        cy.get(previewSection).should('not.be.visible')
    }

    verifyTypeOfOrganization() {
        for (var i = 0; i <= typeOfOrganization.length; i++) {
            cy.get(typeOfOrganization[i]).check({ force: true }).should('be.checked')
            cy.get(textHowManyItems).should('have.text', 'How many ' + rdbOrganization[i] + 's' + ' do you need? *')
        }

    }

    selectCustomOption() {
        cy.get(rdbCustom).check({ force: true }).should('be.checked')
    }


    typeCustomValue(customValue) {
        this.selectCustomOption()
        cy.get(rdbCustomFolder).clear().type(customValue).should('have.value', customValue)
    }

    verifyCustomValue(customValue) {
        this.typeCustomValue(customValue)
        cy.get(textHowManyItems).should('have.text', 'How many ' + customValue + 's' + ' do you need? *')
    }

    selectAddDateRange() {
        cy.get(chkDayRange).check({ force: true }).should("be.checked")
    }

    unselectAddDateRange() {
        cy.get(chkDayRange).uncheck({ force: true })
    }

    verifyCalendarSection() {
        cy.get(courseBuilderPage).scrollTo('bottom')
        //Calendar is displayed when "add date range checkbox is selected"
        this.selectAddDateRange()
        cy.get(txtStartDate).should('be.visible').should('have.attr', 'placeholder', 'MM-DD-YYYY')
        cy.get(txtEndDate).should('be.disabled').should('have.attr', 'placeholder', 'MM-DD-YYYY')
        cy.get(previewSection).should("not.be.visible")
        //Calendar is NOT displayed when "add date range checkbox is selected"
        this.unselectAddDateRange()
        cy.get(txtStartDate).should('not.be.visible')
        cy.get(txtEndDate).should('not.be.visible')
        cy.get(previewSection).should("be.visible")
    }


    autoSelectEndDate(){
        cy.get(courseBuilderPage).scrollTo('bottom')
        cy.get(txtNumberOfWeek).clear().type('1')
        this.selectAddDateRange()
        cy.get(txtStartDate).type(startDate)
        cy.get(txtEndDate).should('have.value',endDate)
    
    }


}


export default CourseBuilderPage;