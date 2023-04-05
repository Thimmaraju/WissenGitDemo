import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../../pageobjects/login/loginpage.po'
import DashBoardPage from '../../pageobjects/login/dashboardpage.po'

import data from "../../fixtures/logincreds.json"

const login = new LoginPage()

const dash = new DashBoardPage()

Given('User Launch Application', () => {
    cy.visit('/web/index.php/auth/login')
  })

  When(`User enter username as {string} and Password as {string}`, (username, Password) => {
      
     
       cy.xpath(login.usernameinput()).type(username)
       cy.get(login.passwordInput()).type(Password)

  })


  When('User click on login button', () => {
    
       cy.get(login.loginBtn()).click()
  })


  Then('User should be navigated to dashboard page', () => {
    
    cy.url().should("eq",data.dashboardurl)

      cy.url().should("include", data.partialdashboardurl)

      //or
      cy.contains(dash.dashboradpageheader()).should("be.visible")

})




Then('User should get error message', () => {
    
    cy.contains(login.loginerrormessage()).should("be.visible")
})