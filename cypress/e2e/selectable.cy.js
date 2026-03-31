import SelectablePage from '../pageObjects/SelectablePage';

describe('DemoQA Selectable Grid Test', () => {
  const page = new SelectablePage();

  beforeEach(() => {
    page.open();            // open the page
    page.getGridTab().click();  // switch to Grid
  });

  it('should select and verify specific grid items', () => {
    // Click "Two", "Four", "Six", "Eight"
    ['Two', 'Four', 'Six', 'Eight'].forEach(item => {
      page.getItem(item).click();
    });

    // Validate highlighted items
    page.getHighlightedItems().should('have.length', 4);
    ['Two', 'Four', 'Six', 'Eight'].forEach(item => {
      page.getHighlightedItems().contains(item).should('exist');
    });

    // Validate non-highlighted items
    ['One', 'Three', 'Five', 'Seven', 'Nine'].forEach(item => {
      page.getItem(item).should('not.have.class', 'ui-selected');
    });
  });
});