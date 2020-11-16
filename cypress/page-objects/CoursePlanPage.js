const btnBulkEdit = 'span.c-els-slide-switch__switch'
const checkBoxSelectAll = ':nth-child(2) > #field-wrap-undefined > .c-els-field__label > .c-els-field__label-text > .c-els-field__switch'
const btnRemove = '#batch-remove-button > .c-els-button__text > .o-els-flex-layout > :nth-child(2) > div > .u-els-font-family-bold'

//Top menu
const btnAddEbookReading = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-ebook-reading'
const btnAddEAQ = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-adaptive-quiz'
const btnAddAdaptiveLesson = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-adaptive-lesson'
const btnAddSimchart = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-simchart'
const btnAddSkill = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-sherpath-skill'
const btnAddMoreResources = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-more-resources'
const btnAddaFolder = '.c-els-button.c-els-button--small.c-els-button--secondary.qe-scm-course-plan-action-button-add-folder'

class CoursePlanPage{
  goToResourceLibrary(){
    cy.get(btnAddMoreResources).click()
  }
}

export default CoursePlanPage