import React from 'react';
import Citations, { CitationsProps } from '../../packages/module/src/Citations';

const testCitations: CitationsProps['citations'] = [
  {
    id: 'citation-1',
    title: 'Understanding PatternFly Layouts',
    content: 'Content explaining the use of various layouts in PatternFly.',
    ouiaId: 'citation-1',
  },
  {
    id: 'citation-2',
    title: 'PatternFly Design Guidelines',
    content: 'Content about design guidelines.',
    ouiaId: 'citation-2',
  },
  {
    id: 'citation-3',
    title: 'Accessibility in PatternFly',
    content: 'Content about accessibility practices.',
    ouiaId: 'citation-3',
  },
];

describe('Citations', () => {
  it('renders expandable section with citations', () => {
    cy.mount(<Citations citations={testCitations} toggleText="Show Citations" ouiaId="test-citations" />);

    cy.get('[data-ouia-component-id="test-citations-expandable-section"]').should('have.length', 1);
    cy.get('[data-ouia-component-id="test-citations-accordion"]').should('not.be.visible');
  });

  it('expands and displays citations on toggle', () => {
    cy.mount(<Citations citations={testCitations} toggleText="Show Citations" ouiaId="test-citations" />);

    cy.get('[data-ouia-component-id="test-citations-expandable-section"] button').first().click();
    cy.get('[data-ouia-component-id="test-citations-accordion"]').should('be.visible');

    cy.get('[data-ouia-component-id="citation-1-toggle"]').should('have.length', 1);
    cy.get('[data-ouia-component-id="citation-2-toggle"]').should('have.length', 1);
    cy.get('[data-ouia-component-id="citation-3-toggle"]').should('have.length', 1);
  });

  it('toggles citations within the accordion', () => {
    cy.mount(<Citations citations={testCitations} toggleText="Show Citations" ouiaId="test-citations" />);

    cy.get('[data-ouia-component-id="test-citations-expandable-section"] button').first().click();

    cy.get('[data-ouia-component-id="citation-1-toggle"]').click();
    cy.get('[data-ouia-component-id="citation-1-content"]').should('be.visible');

    cy.get('[data-ouia-component-id="citation-2-toggle"]').click();
    cy.get('[data-ouia-component-id="citation-1-content"]').should('be.visible');
    cy.get('[data-ouia-component-id="citation-1-toggle"]').click();
    cy.get('[data-ouia-component-id="citation-1-content"]').should('not.be.visible');
    cy.get('[data-ouia-component-id="citation-2-content"]').should('be.visible');
  });
});