describe('Test the Virtual assistant docs page', () => {

  xit('renders listening to messages', () => {
    cy.visit('http://localhost:8006/extensions/chat-bots--ai/virtual-assistant');
    cy.wait(1000);

    cy.get('[data-test-id="assistant-example-message"]').should('contain', 'Last received message: ');
    cy.get('[data-test-id="assistant-text-input"]').eq(2).type('my message');
    cy.get('[data-test-id="assistant-send-button"]').eq(2).click({ force: true });
    cy.get('[data-test-id="assistant-example-message"]').should('contain', 'Last received message: my message');
  })

  xit('renders header with actions', () => {
    cy.visit('http://localhost:8006/extensions/chat-bots--ai/virtual-assistant', { onBeforeLoad: (win) => {cy.stub(win.console, 'log').as('consoleLog');} });
    cy.wait(1000);
    cy.get('[aria-label="Minimize virtual assistant"]').click({ force: true });
    cy.wait(1000);
    cy.get('@consoleLog').should('be.calledWith', 'Minimize button clicked');
  })
})
