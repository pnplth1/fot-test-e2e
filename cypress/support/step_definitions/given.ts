import {
  Given,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";
Given("I open the website", () => {
  cy.visit("https://www.uipath.com/product/test-manager"); // Replace with your website URL
});
