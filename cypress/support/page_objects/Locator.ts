class Locator {
    getCommon(
      elementType: string,
      elementName: string,
      timeout = Cypress.config().defaultCommandTimeout,
    ) {
      return cy.fixture("object/common").then((obj) => {
        return cy.get(obj[elementType][elementName], { timeout: timeout });
      });
    }
  
    getButton(featureName: string, elementName: string) {
      return cy.fixture("object/button").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    getIcon(featureName: string, elementName: string) {
      return cy.fixture("object/icon").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    getShip(featureName: string, elementName: string) {
      return cy.fixture("object/ship").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    getLabel(featureName: string, elementName: string) {
      return cy.fixture("object/label").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    getField(featureName: string, elementName: string) {
      return cy.fixture("object/textfield").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    getFieldValue(featureName: string, elementName: string) {
      return cy.fixture("object/textvalue").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    getSidebar(elementName: string) {
      return cy.fixture("object/sidebar").then((obj) => {
        return cy.get(obj[elementName]);
      });
    }
  
    getTable(tableName: string) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        return cy.get("#" + tableId + "-table");
      });
    }
  
    getTableColumn(tableName: string, columnName: string) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        const columnId = obj[tableName][columnName];
        return cy.get(`[id*='${tableId}.${columnId}']`);
      });
    }
  
    getTableChangePage(tableName: string, option: string) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        return cy.get(`#${tableId}-${option}-page-button`);
      });
    }
  
    getTableRowData(tableName: string, columnName: string, row: number) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        const columnId = obj[tableName][columnName];
        const result = "#" + row + "_" + tableId + "\\." + columnId;
        return cy.get(result);
      });
    }
  
    getTableHeaderLabel(tableName: string, columnName: string) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        const columnId = obj[tableName][columnName];
        const result = "#" + tableId + "\\." + columnId;
        return cy.get(result);
      });
    }
  
    getTableDatePicker(
      tableName: string,
      elementName: string,
      elementType?: string,
    ) {
      return cy.fixture("object/table").then((obj) => {
        if (elementType == null) {
          return cy.get("#" + obj[tableName][elementName] + "-datepicker");
        } else {
          return cy.get(
            "#" + obj[tableName][elementName] + "-datepicker-" + elementType,
          );
        }
      });
    }
  
    getProcessBuilder(section: string, elementName: string) {
      return cy.fixture("object/process").then((obj) => {
        return cy.get(obj[section][elementName]);
      });
    }
  
    getHelper(featureName: string, elementName: string) {
      return cy.fixture("object/helper").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
    getAlert(featureName: string, elementName: string) {
      return cy.fixture("object/alert").then((obj) => {
        return cy.get(obj[featureName][elementName]);
      });
    }
  
    isLeftAction(actionName: string) {
      return cy.fixture("object/process").then((obj) => {
        if (obj["Left Actions"].includes(actionName)) {
          return cy.wrap(true);
        } else return cy.wrap(false);
      });
    }
    getRowPerPage(tableName: string) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        const result = "#" + tableId + "-row-per-page-dropdown";
        return cy.get(result);
      });
    }
    getPageNumber(tableName: string) {
      return cy.fixture("object/table").then((obj) => {
        const tableId = obj.tableId[tableName];
        const result = "#" + tableId + "-page-number";
        return cy.get(result);
      });
    }
  
    getDatePicker(
      featureName: string,
      elementName: string,
      elementType?: string,
    ) {
      return cy.fixture("object/textfield").then((obj) => {
        if (elementType == null) {
          return cy.get(obj[featureName][elementName] + "-datepicker");
        } else {
          return cy.get(
            obj[featureName][elementName] + "-datepicker-" + elementType,
          );
        }
      });
    }
  
    getActionId(order: number, indent: number) {
      return this.getProcessBuilder("Section", "Process Details Action")
        .eq(order - 1)
        .should("have.class", `depth-${indent - 1}`)
        .invoke("attr", "id");
    }
  }
  
  export default Locator;
  