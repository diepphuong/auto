###General goals

Allow more agile front end automated testing.

Make it easy to write automated tests while working on tickets- keep things in JS when possible.

Cypress can complement Jasmine unit tests by verifying interfaces and workflows instead of just service calls. 


###Limitations

Cypress can take a while to boot up

Cannot handle tabbed browsing, so cannot deal with LMS launch, EAQ, EBooks, or verifying various multi-tab CITS tickets.

Cypress is a rather opinionated framework- no try/catch and difficult to work with conditionals, tends to push towards hardcoded values.
Can either run 1 test or all tests: no ability to run against a group of tests without some config workarounds. 



###How to run Cypress

0. Make sure Cypress is installed- in the command line or via IDE, make sure bower and npm packages are up to date by running `bower install` and  `npm install`

1. create `cypress.json` file in project root.
You can start by manually copy the `cypress/supoprt/cypress.tpl.json` file.
Make sure that the necessary context variables are set such as admin username and password, and course information

2. If you want to run against locally running application, make sure to run sherpath locally in desired environment: `npm run start -- --env test1`

3. In the console, run one of the following commands:
`npx cypress run` (runs the console version of the tests)
`npx cypress open` (opens a browser interface for running individual tests with a preview window displaying Sherpath's UI at the stages of the test)

Configuration settings can be changed in cypress.json, located in the root sherpath-app directory. Configuration settings are applied with this priority: config passed into a command > config set via sherCy.setConfig()> cypress.json. 


###Runtime walkthrough

0. Before running anything else, Cypress will pull the default environment variables from cypress.json. 

1. Cypress runs the before statement in `setup.js`. Currently, the only thing that is done is some error handling to prevent Sherpath exceptions from breaking the entire test. 

2. Cypress runs the test suite in the file order. It does following when running tests:
   * Run any `before` statements at the start of each file.
   * Before each test, run the `beforeEach` statement.
   * Run each test in the file as noted by the `it` function. Note that state is preserved across tests in a file, but is wiped in between files. 

  Typically, the before section of a file will either specify a pre-created course to use or create a new course, then log into the current course as defined by the Cypress environment variables. You can also launch into an arbitrary course by passing in the courseId, userId, and user emaill. 

 
###Other tips

If any routes need to be mocked such as global feature flags, use `cy.server()` then `cy.route(<url>, <returnValue>)` to mock the route.



