//Cypress - Spec
/// <reference types = "cypress"/> 

//const { each } = require("cypress/types/bluebird");

describe ('My First Suite ', function(){
it('My First Test case!' , ()=> {
//   it('throws a cross origin error' , ()=> {

// cy.visit('https://ddva.qa.keyspring.com/member/')
// //cy.get('#usernameInput').click().type('testbrown3')
// cy.origin('https://uat-auth.deltadental.com/login', () => {
// cy.wait(9000);
// cy.get('#usernameInput').click().type('testbrown3')

//   })
// })  

// })
// // cy.visit('https://saucedemo.com/',{timeout: 15000}).should('be.visible');
// // cy.wait(9000);
// // cy.get('.input_error.form_input#user-name:visible',{ timeout: 15000 }).should('be.visible').click().type('standard_user')
// // cy.get('.input_error.form_input#password:visible',{ timeout: 15000 }).should('be.visible').click().type('secret_sauce')
// //   //#password
// // cy.get('#login-button').click();



cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
cy.wait(15000);
cy.get('input.search-keyword:visible').type('ca')
cy.wait(9000);
//cy.get('.product').should('have.length', 4)
cy.get('.products').find('.product').should('have.length', 4)
//cy.get('.product:nth-child(2)').should('have.length', 1)

//cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()

cy.get('.products').find('.product').each(($el, index, $list) => {
cy.log(('.products'))
const textveg = $el.find('h4.product-name').text();

  if(textveg.includes('Cashews')){

   //cy.wrap($el).find('.button').click();
    const button = $el.find('button').trigger('click')
    
  }

})

cy.get('.brand').then(function(logoelement)
{
  cy.log(logoelement.text())
})


})
// //   cy.origin('https://ddva.qa.keyspring.com/member/', () => {  

// //     cy.get('#usernameInput', { timeout: 15000 }).should('be.visible').click();
// //     cy.get('#usernameInput').type('testbrown3');
// // })

// // // cy.visit('https://ddva.qa.keyspring.com/benefitservices/');
// // // cy.wait(9000);


// // //cy.get("div[class='modal-body'] div div div div div form[name='loginWithIdentityProvider'] div input[value='ddva-adfs-provider']").click();


// // })
// // it('navigates to new origin', () => {
// // cy.visit('https://ddva.qa.keyspring.com/member/')

// // //cy.visit('https://uat-auth.deltadental.com/login?state=hKFo2SBiNHZMaC11MnRkTnozeERoTGdva0F2VUJFOWwyVVpQQ6FupWxvZ2luo3RpZNkgaFdSdDJNTWVhdWhEclhVWEU5Qi1TMEdXeGw0T3lrODGjY2lk2SBhQW5WOVNIblFYcUpGRnFoUTJGbnJHblN6WXlkZ0UzMQ&client=aAnV9SHnQXqJFFqhQ2FnrGnSzYydgE31&protocol=oauth2&scope=email%20openid%20phone%20profile&response_type=id_token&redirect_uri=https%3A%2F%2Fuat-ddva-auth.deltadental.com%2Flogin%2Fcallback&response_mode=form_post&nonce=q7d0Hwj6uKB9jS0oFnKnW5z-6X-Za-T4GIevIIXyoYQ');
// // cy.get('#usernameInput', { timeout: 15000 }).should('be.visible').click();

// // cy.get('type').type('testbrown3');
// //     //test steps

//   //   //cy.visit('https://ddva.qa.keyspring.com/');
//   //    cy.visit('https://ddva.qa.keyspring.com/members.html')
//   //    cy.get('nav a').contains('Members').click()
//   //   //cy.get('a[aria-label="Members primary navigation"]').click();
//   //   //cy.scrollIntoView('button[name="button"]')
//   //    cy.wait(9000);
//   //   //cy.get('button.login-btn.submit-btn.block').scrollIntoView()
//   //   //cy.wait(9000);
//   //   cy.get('.login-btn', { timeout: 10000 }).should('be.visible').click();
//   //   cy.wait(9000);
//   //   console.log("reached the login button")
//   //   // cy.visit('https://ddva.qa.keyspring.com/')
//   //   // cy.wait(9000);
//   //   // cy.get('input[id=usernameInput]', { timeout: 15000 }).should('be.visible').click();
//   //   // cy.get('input[id=usernameInput]').type('testbrown3');

//   //   it('navigates to new origin', () => {
//   //     cy.visit('https://ddva.qa.keyspring.com/member/')

//   //     cy.get('input[id=usernameInput]', { timeout: 15000 }).should('be.visible').click();
//   //     cy.get('input[id=usernameInput]').type('testbrown3');
//   //   })


//   //   // cy.origin('https://ddva.qa.keyspring.com/member/', () =>{
//   //   //   cy.get('input[id=usernameInput]', { timeout: 15000 }).should('be.visible').click();
//   //   //   cy.get('input[id=usernameInput]').type('testbrown3');
//   //   //cy.visit('https://ddva.qa.keyspring.com/member/')  
//   // //   cy.get('#usernameInput', { timeout: 15000 }).should('be.visible').click();
//   // //   cy.get('#usernameInput').type('testbrown3');
//   // //   cy.get('#verify-user').click();
//   // //   cy.get('#usernameForm').submit();
//   // //   cy.get('#passwordInput').click();
//   // // //})
})

