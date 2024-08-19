import React from 'react';
import LoadingMessage from '../../packages/module/src/LoadingMessage';
import GrinIcon from '@patternfly/react-icons/dist/dynamic/icons/grin-icon';
import { AssistantProvider } from '@patternfly/virtual-assistant/src/AssistantContext';

describe('LoadingMessage', () => {
  it('renders default loading message', () => {
    cy.mount(
      <AssistantProvider assistantIcon={GrinIcon} removeBorderRadius={false}>
        <LoadingMessage />
      </AssistantProvider>
    );

    cy.get('[data-test-id="assistant-loading-icon"]').should('have.length', 1);
    cy.get('[data-test-id="assistant-loading-dots"]').should('have.length', 1);
  })

  it('renders custom loading message', () => {
    cy.mount(
      <AssistantProvider assistantIcon={GrinIcon} removeBorderRadius={false}>
        <LoadingMessage icon={GrinIcon} />
      </AssistantProvider>
    );

    cy.get('[data-test-id="assistant-loading-icon"]').should('have.length', 1);
    cy.get('[data-test-id="assistant-loading-dots"]').should('have.length', 1);
  })
})

