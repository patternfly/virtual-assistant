import React from 'react';
import { ThemeProvider } from 'react-jss';
import GrinIcon from '@patternfly/react-icons/dist/dynamic/icons/grin-icon';
import LoadingMessage from '@patternfly/virtual-assistant/src/LoadingMessage';
import { VirtualAssistantProvider } from '@patternfly/virtual-assistant/src/VirtualAssistantContext';
import { defaultTheme } from '@patternfly/virtual-assistant/src/VirtualAssistantTheme';

describe('LoadingMessage', () => {
  it('renders default loading message', () => {
    cy.mount(
      <ThemeProvider theme={defaultTheme}>
        <VirtualAssistantProvider assistantIcon={GrinIcon}>
          <LoadingMessage />
        </VirtualAssistantProvider>
      </ThemeProvider>
    );

    cy.get('[data-test-id="assistant-loading-icon"]').should('have.length', 1);
    cy.get('[data-test-id="assistant-loading-dots"]').should('have.length', 1);
  })

  it('renders custom loading message', () => {
    cy.mount(
      <ThemeProvider theme={defaultTheme}>
        <VirtualAssistantProvider assistantIcon={GrinIcon}>
          <LoadingMessage icon={GrinIcon} />
        </VirtualAssistantProvider>
      </ThemeProvider>
    );

    cy.get('[data-test-id="assistant-loading-icon"]').should('have.length', 1);
    cy.get('[data-test-id="assistant-loading-dots"]').should('have.length', 1);
  })
})

