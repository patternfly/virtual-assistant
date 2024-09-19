import React from 'react';
import { Icon, Flex, Stack, StackItem } from '@patternfly/react-core';

export interface SourceDetailsMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Icon */
  icon: React.ReactNode;
  /** Name of source */
  name: string;
  /** Description of source */
  type?: string;
}

export const SourceDetailsMenuItem: React.FunctionComponent<SourceDetailsMenuItemProps> = ({
  icon,
  name,
  type,
  ...props
}: SourceDetailsMenuItemProps) => (
  <Flex className="pf-chatbot__source-details" gap={{ default: 'gapSm' }} {...props}>
    <Flex
      justifyContent={{ default: 'justifyContentCenter' }}
      alignItems={{ default: 'alignItemsCenter' }}
      alignSelf={{ default: 'alignSelfCenter' }}
    >
      <Icon className="pf-chatbot__source-details-icon">{icon}</Icon>
    </Flex>
    <Stack className="pf-chatbot__source-details-text">
      <StackItem>
        <span className="pf-chatbot__source-details-heading">{name}</span>
      </StackItem>
      {type && <StackItem className="pf-chatbot__source-details-subhead">{type}</StackItem>}
    </Stack>
  </Flex>
);

export default SourceDetailsMenuItem;
