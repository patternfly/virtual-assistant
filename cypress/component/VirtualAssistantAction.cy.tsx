import React from 'react';
import { ThemeProvider } from 'react-jss';
import VirtualAssistantAction from '@patternfly/virtual-assistant/src/VirtualAssistantAction';
import { AngleDownIcon } from '@patternfly/react-icons';
import { defaultTheme } from '@patternfly/virtual-assistant/src/VirtualAssistantTheme';

describe('VirtualAssistantAction', () => {
  it('renders assistant action', () => {
    cy.mount(
      <ThemeProvider theme={defaultTheme}>
        <VirtualAssistantAction aria-label="Minimize virtual assistant" onClick={cy.stub().as('action')}>
          <AngleDownIcon/>
        </VirtualAssistantAction>
      </ThemeProvider>
    );
    cy.get('[aria-label="Minimize virtual assistant"]').click();
    cy.get('@action').should('have.been.called');
    cy.get('.pf-v5-svg').should('exist');
  })
})