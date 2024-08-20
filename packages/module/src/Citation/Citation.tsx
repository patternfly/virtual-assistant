import React, { useState } from 'react';
import {
  AccordionItem,
  AccordionToggle,
  AccordionContent,
  AccordionItemProps,
} from '@patternfly/react-core';

export interface CitationProps extends AccordionItemProps {
  /** Citation ID passed to the toggle */
  id?: string;
  /** Citation title */
  title: React.ReactNode;
  /** Citation content */
  content: React.ReactNode;
  /** Citation OUIA ID */
  ouiaId?: string;
}

export const Citation:React.FunctionComponent<CitationProps> = ({
  id,
  title,
  content,
  ouiaId = 'Citation',
  ...props
}: CitationProps) => {
  const [ expanded, setExpanded ] = useState(false);
  return (
    <AccordionItem data-ouia-component-id={`${ouiaId}-item`} {...props}>
      <AccordionToggle
        data-ouia-component-id={`${ouiaId}-toggle`}
        id={id ?? String(title)}
        onClick={() => setExpanded(!expanded)}
        isExpanded={expanded}
      >
        {title}
      </AccordionToggle>
      <AccordionContent isHidden={!expanded} data-ouia-component-id={`${ouiaId}-content`}>
        { expanded ? content : null }
      </AccordionContent>
    </AccordionItem>
  );
};

export default Citation;
