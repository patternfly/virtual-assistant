import React from 'react';
import VirtualAssistant from '../../packages/module/src/VirtualAssistant';

describe('VirtualAssistant', () => {
  it('renders virtual assistant body', () => {
    cy.mount(<VirtualAssistant />);

    cy.get('[data-test-id="assistant-title"]').first().should('contain', 'Virtual Assistant');
    cy.get('[data-test-id="assistant-text-input"]').first().should('have.attr', 'placeholder', 'Send a message...');
    cy.get('[data-test-id="assistant-send-button"]').first().should('not.be.disabled');
  })

  it('renders a customized title and placeholder', () => {
    cy.mount(<VirtualAssistant title="PatternFly assistant" inputPlaceholder="You can ask anything in here." />);

    cy.get('[data-test-id="assistant-title"]').should('contain', 'PatternFly assistant');
    cy.get('[data-test-id="assistant-text-input"]').should('have.attr', 'placeholder', 'You can ask anything in here.');
    cy.get('[data-test-id="assistant-send-button"]').should('not.be.disabled');
  })

  it('listens to messages', () => {
    cy.mount(<VirtualAssistant onChangeMessage={cy.stub().as('change')} onSendMessage={cy.stub().as('send')} />);

    cy.get('[data-test-id="assistant-text-input"]').type('my message');
    cy.get('[data-test-id="assistant-send-button"]').click();
    cy.get('@change').should('have.been.called');
    cy.get('@send').should('have.been.called');
  })

  it('renders header with disabled send button', () => {
    cy.mount(<VirtualAssistant isSendButtonDisabled />);
    cy.get('[data-test-id="assistant-send-button"]').should('be.disabled');
  })
})