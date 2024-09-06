import React from 'react';

import { Split, Flex, Divider } from '@patternfly/react-core';

export interface ChatbotHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content to be displayed in the chatbot header */
  children: React.ReactNode;
  /** Custom classname for the header component */
  className?: string;
}

export const ChatbotHeader: React.FunctionComponent<ChatbotHeaderProps> = ({
  className,
  children,
  ...props
}: ChatbotHeaderProps) => (
  <Flex direction={{ default: 'column' }} rowGap={{ default: 'rowGapMd' }}>
    <Split className={`pf-chatbot__header ${className ?? ''}`} hasGutter {...props}>
      {children}
    </Split>
    <Divider className="pf-chatbot__header__divider" />
  </Flex>
);

export default ChatbotHeader;
