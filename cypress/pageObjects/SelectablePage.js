class SelectablePage {
  open() {
    cy.visit('https://demoqa.com/selectable');
  }

  // More specific selector with timeout to ensure it appears
  getGridTab() {
    return cy.get('#demo-tab-grid').should('be.visible'); // ID of Grid tab
  }

  getItem(number) {
    return cy.get('#gridContainer li').contains(number); // Grid container
  }

  getHighlightedItems() {
    return cy.get('#gridContainer li.active'); // class changes when selected
  }
}

export default SelectablePage;