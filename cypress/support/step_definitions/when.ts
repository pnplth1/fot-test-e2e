import {
  When,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";

When("I click Try Test Manager free", () => {
  cy.get(".MultiBodyHeroHeader-CTAs > .jbDatY").click();
});
