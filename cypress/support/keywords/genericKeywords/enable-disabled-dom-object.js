import * as selectors from '../../step_definitions/mappings-importer';

Cypress.Commands.add('checkButtonDisabled', (elementSelectorKey, shouldBeDisabled) => {
  if (shouldBeDisabled) {
    cy.get(selectors[elementSelectorKey]).should('be.disabled');
  } else {
    cy.get(selectors[elementSelectorKey]).should('not.be.disabled');
  }
});

Cypress.Commands.add("scrollToBottom", () => {
  cy.document().then((doc) => {
    return new Cypress.Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = doc.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
});


