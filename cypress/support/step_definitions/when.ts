import {
  When,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";

When("I enter {string} into {string}", (value: string, elementName: string) => {
  cy.get(elementName).type(value);
});
