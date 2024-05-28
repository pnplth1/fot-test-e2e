import {When,defineStep as And } from "@badeball/cypress-cucumber-preprocessor";
import {Locator} from "../page_objects/Locator";

When(
    "I enter {string} into {string}",
    (value: string,elementName: string) => {
        cy.getField(elementName).type(value);
    },
  );