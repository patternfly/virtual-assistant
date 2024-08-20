import React, { useState } from 'react';
import {
  Accordion,
  AccordionProps,
  ExpandableSection,
  ExpandableSectionProps,
} from '@patternfly/react-core';
import Citation, { CitationProps } from '../Citation';

export interface CitationsProps extends Omit<ExpandableSectionProps, 'ref'> {
  /** Citations to be displayed in an accordion */
  citations: CitationProps[];
  /** Citations OUIA ID */
  ouiaId?: string;
  /** Citations accordion props */
  accordionProps?: AccordionProps;
}

export const Citations:React.FunctionComponent<CitationsProps> = ({
  toggleText = "Citations",
  citations,
  ouiaId,
  accordionProps,
  ...props
}: CitationsProps) => {
  const [ expanded, setExpanded ] = useState(false);
  return (
    <ExpandableSection
      data-ouia-component-id={`${ouiaId}-expandable-section`}
      isExpanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      toggleText={toggleText}
      {...props}
    >
      <Accordion data-ouia-component-id={`${ouiaId}-accordion`} {...accordionProps}>{citations.map((citation, index) => <Citation key={index} {...citation} />)}</Accordion>
    </ExpandableSection>
  );
};

export default Citations;
