import {
  Given,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";
import cypress from "cypress";
Given("I open the website", () => {
  cy.visit("https://www.saucedemo.com/"); // Replace with your website URL
});

Given("I go to {string} page", (page: string) => {
  cy.fixture("object/page").then((pages) => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(pages[page]);
  });
});
