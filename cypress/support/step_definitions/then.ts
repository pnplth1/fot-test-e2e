import {
  Then,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";

Then("I should be in {string} page", (page: string) => {
  cy.fixture("object/page").then((endpoint) => {
    cy.url().should("eq", endpoint[page]);
  });
});
