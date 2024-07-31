//describe('LoginTest', function() 

import 'cypress-xpath';
describe('LoginTest', () => {

    beforeEach(() => {
        cy.fixture('config.json').then((config) => {
            // Ensure config is loaded correctly
           /* if (!config || !config.url) {
                throw new Error('Config file is missing or does not contain a URL property');
            }*/
            // Call cy.visit() with the URL from the config.json file
            cy.visit(config.url);
            cy.title().should('eq', 'Login | Salesforce');

        /*}, (error) => {
            throw new Error(`Error loading config file: ${error.message}`);
        });*/
      });
    })

 it('loginerrormessage_test1', () =>{

  cy.fixture('config.json').then((user)=> {
  
    cy.get('#username').type(user.username);
    cy.get('#password').clear();
    cy.get('#Login').click();
    cy.contains(user.errormessage).should('be.visible');
     })
 
     })

      it('logintosalesForceUsingValidCredential_test2', () =>{

      cy.fixture('config.json').then((user)=> {
      //cy.title().should('eq', 'Login | Salesforce');
      cy.get('#username').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#Login').click();
      cy.title().should('eq',user.suceesmessage);
      })
   
     })

     it('Check RemeberMe_test3', () =>{

        cy.fixture('config.json').then((user)=> {
          //cy.title().should('eq', 'Login | Salesforce');
          cy.get('#username').type(user.username);
          cy.get('#password').type(user.password);
          cy.get('#rememberUn').click();
          cy.get('#Login').click();
           
       })
      })
       it('logintosalesForceUsingWrongPassword_test4', () => {
        cy.fixture('config.json').then((user) => {
          cy.get('#username').type(user.username);
          cy.get('#password').type(user.wrongPassword);
          cy.get('#Login').click();
          cy.contains(user.errormessage1).should('be.visible');
            
       })
        
         })

         it('forgetPassword_test5', () => {
          cy.fixture('config.json').then((user) => {
            cy.contains('Forgot Your Password?').click();
            cy.url().should('include', '/secur/forgotpassword.jsp');
            cy.get('#un').type(user.username);
            cy.get('#continue').click();
            // Adjust the assertion as per the actual behavior of the page
            cy.contains('Check Your Email').should('be.visible');
          });

        })   

      })
