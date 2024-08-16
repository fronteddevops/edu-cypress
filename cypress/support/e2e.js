import 'cypress-mochawesome-reporter/register';

// Optionally, add this to take screenshots on failure
// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//     const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
//     cy.screenshot(screenshotFileName);
//   }
// });


//*[@id="menu-subjectId"]/div[3]/ul/li[2]
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');