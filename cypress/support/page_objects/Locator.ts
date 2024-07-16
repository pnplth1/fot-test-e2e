class Locator {
  getBtn(elementName: string) {
    return cy.fixture("object/common").then((obj) => {
      return cy.get(obj[elementName]);
    });
  }
  getInput(elementName: string) {
    return cy.fixture("object/common").then((obj) => {
      return cy.get(obj[elementName]);
    });
  }
}

export default Locator;
