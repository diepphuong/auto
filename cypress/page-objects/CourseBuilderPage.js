
const txtCourseName = '#field-input-js-modal-focus'
const rdbCreateNewCourse = ':nth-child(1) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbCopyCourse = '.o-els-flex-layout > :nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbAutoCourse = ':nth-child(5) > :nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbManualCourse = ':nth-child(5) > :nth-child(3) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'

//Course structure

const rdbWeek = ':nth-child(2) > :nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbUnit = ':nth-child(2) > :nth-child(3) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbModule = ':nth-child(2) > :nth-child(4) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const rdbCustom = ':nth-child(2) > :nth-child(5) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const txtNumberOfWeek = '.c-els-field__wrap > #field-input-undefined'
const textHowManyItems = ':nth-child(1) > :nth-child(3) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text'
const chkDayRange = '.c-els-field--checkbox > :nth-child(1) > :nth-child(2) > .c-els-field__switch'


const startDate = ':nth-child(1) > #field-wrap-undefined > .c-els-field__label > .c-els-field__wrap > .o-els-icon-svg'
const endDate = ':nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__wrap > .o-els-icon-svg'
const btnCreateCourse = '.c-els-button'
//Error message
const errorEmptyCourseName = '.c-els-field__message'   

const courseBuilderData = require('../data/CourseBuilder.json');

class CourseBuilderPage {
    verifyCourseName(courseName){
        cy.get(txtCourseName).clear()
        cy.get(errorEmptyCourseName).should('contain', courseBuilderData.errorEmptyCourseName)
        cy.get(btnCreateCourse, {timeout: 40000 }).should('be.disabled')
        cy.get(txtCourseName).clear().type(courseName)
    }

}
export default CourseBuilderPage;