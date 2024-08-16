import 'cypress-mochawesome-reporter/cucumberSupport';
import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('precondition', () => {
  cy.visit('https://d23y8hilh9n8uv.cloudfront.net/');
});

When('attempt login with incorrect credentials', () => {
  cy.title().should('eq', 'Education Planet');
  cy.wait(3000);

  cy.get('button[type="submit"]').click();

  //INPUT SELECTIONS 
  cy.get('.MuiSelect-select').click();
  cy.wait(3000)
  cy.contains('.MuiButtonBase-root', 'Supervisor').click();
  cy.get('button[type="submit"]').click();
  cy.wait(3000)
  
  //INPUT MUST BE RE-WRITABLE
  cy.get('input[name="email"]').type('test@gmail.com');
  cy.wait(3000)
  cy.get('input[name="email"]').clear();
  cy.wait(3000)
  cy.get('input[name="password"]').type('Admin@123'); 
  cy.wait(3000)
  cy.get('input[name="password"]').clear();
  cy.wait(3000)
  
  //WRONG EMAIL
  cy.get('input[name="email"]').type('John Doe');
  cy.wait(3000)
  cy.get('input[name="email"]').clear();
  cy.wait(3000)
  
  //WRONG PASSWORD
  cy.get('input[name="email"]').type('test@gmail.com');
  cy.wait(3000)
  cy.get('input[name="password"]').type('SuperAdmin@123');
  cy.wait(3000)
  cy.get('button[type="button"]').click();
  cy.wait(3000)

  // Enter incorrect email and password
  

  // Capture screenshot of the failed attempt
  cy.screenshot('login-failed-incorrect-credentials');

  // Verify error message
  // cy.contains('Invalid email or password').should('be.visible');

  // Clear inputs
  cy.get('input[name="email"]').clear();
  cy.get('input[name="password"]').clear();
});

When('retry login with correct credentials', () => {
  // Enter correct email and password
  cy.wait(3000)
  cy.get('button[type="submit"]').click();

//INPUT SELECTIONS 
cy.get('.MuiSelect-select').click();
cy.wait(3000)
cy.contains('.MuiButtonBase-root', 'Supervisor').click();
cy.get('button[type="submit"]').click();
cy.wait(3000)

//INPUT MUST BE RE-WRITABLE
cy.get('input[name="email"]').type('test@gmail.com');
cy.wait(3000)
cy.get('input[name="email"]').clear();
cy.wait(3000)
cy.get('input[name="password"]').type('Admin@123'); 
cy.wait(3000)
cy.get('input[name="password"]').clear();
cy.wait(3000)

//WRONG EMAIL
// cy.get('input[name="email"]').type('John Doe');
// cy.wait(3000)
// cy.get('input[name="email"]').clear();
// cy.wait(3000)

//WRONG PASSWORD
// cy.get('input[name="email"]').type('test@gmail.com');
// cy.wait(3000)
// cy.get('input[name="password"]').type('SuperAdmin@123');
// cy.wait(3000)
// cy.get('button[type="button"]').click();
// cy.wait(3000)
// cy.get('input[name="password"]').clear();
// cy.wait(3000)
// cy.get('input[name="email"]').clear();
// cy.wait(3000)

//FORGOT PASSWORD
cy.get('p.MuiTypography-root.MuiTypography-body1.loginForgotPasswordText.css-1ydpzpe').click();
cy.wait(3)

//NAVIGATE BACK TO LOGIN PAGE
cy.reload()
cy.wait(3000)
cy.get('.MuiSelect-select').click();
cy.wait(3000)
cy.contains('.MuiButtonBase-root', 'Supervisor').click();
cy.wait(3000)

//CORRECT EMAIL & CORRECT PASSWORD
cy.get('input[name="email"]').type('test@gmail.com');
cy.wait(3000)
cy.get('input[name="password"]').type('Admin@123'); 
cy.wait(300)

//EYE ICON VISIBILITY PASSWORD
cy.get('button[type="button"]').click();
cy.wait(5000)
cy.get('button[type="button"]').click();
cy.wait(5000)

//CHECKBOX 'REMEMBER ME'
cy.get('input[type="checkbox"]').check();
cy.wait(3000)
cy.get('input[type="checkbox"]').uncheck();
cy.wait(3000)

//HIT LOGIN BUTTON
cy.get('button[type="submit"]').click();
cy.wait(3000)

//PAPER NO MANAGEMENT TEST CASE #2

describe("Create Paper No", ()=>{
//CLICK ON PAPER NO MANAGMENT
cy.xpath('/html/body/div[1]/div[2]/div[2]/div/div[1]/div[2]/div[7]').click();
cy.wait(3000)
//CLICK ON 'CREATE NEW PAPER'
cy.xpath("/html/body/div[1]/div[2]/div[2]/div/div/div[2]/div/button[1]").click()
cy.wait(3000)
//SELECT BOARD
cy.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div[2]/form/div/div[3]/button').click()
cy.wait(3000)
cy.xpath('//*[@id="mui-component-select-boardId"]').click()
cy.wait(3000)
//SELECT SUB-BOARD
cy.xpath('/html/body/div[4]/div[3]/ul/li[2]').click()
cy.wait(3000)
cy.xpath('//*[@id="mui-component-select-subBoardId"]').click()
cy.wait(3000)
//SELECT GRADE
cy.xpath('/html/body/div[4]/div[3]/ul/li[3]').click()
// cy.xpath('/html/body/div[4]/div[3]/ul/li[3]').click()

cy.wait(3000)
cy.xpath('//*[@id="mui-component-select-grade"]').click()
cy.wait(3000)
//SELECT SUBJECT
cy.xpath('/html/body/div[4]/div[3]/ul/li[2]').click()
cy.wait(3000)
cy.xpath('//*[@id="mui-component-select-subjectId"]').click()



cy.wait(3000)
//RESOURCES TEXT FIELD
cy.xpath('/html/body/div[4]/div[3]/ul/li[2]').click()
cy.wait(3000)
cy.xpath('//*[@id=":r7:"]').type('www.educationplanet.com')
cy.wait(3000)
cy.xpath('//*[@id=":r7:"]').clear()
cy.xpath('//*[@id=":r7:"]').type('https://www.youtube.com/');
//DESCRIPTION TEXT FIELD
cy.xpath('//*[@id=":r8:"]').type('AUTOMATION RUN WITH CYPRESS DONE.')
cy.wait(3000)
//HIT SUBMIT BUTTON
cy.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div[2]/form/div/div[3]/button').click()
})
});

Then('verify the error message and capture screenshot', () => {
  // Verify that error message is displayed
  // cy.contains('Invalid email or password').should('be.visible');
  // Capture screenshot
  cy.screenshot('error-message');
});

Then('verify successful login and capture screenshot', () => {
  // Verify successful login
  // cy.get('.dashboard-element-selector')
  //   .should('be.visible');
  
  // cy.screenshot('successful-login');
});
