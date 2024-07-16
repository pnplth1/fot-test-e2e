import {
  When,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";
import Locator from "../page_objects/locator";
import "@testing-library/cypress/add-commands";

const obj = new Locator();
When("I click on {string}", (elementName: string) =>
  obj.getBtn(elementName).click()
);
When("I enter {string} in {string}", (value: string, elementName: string) =>
  obj.getInput(elementName).clear().type(value).click()
);
