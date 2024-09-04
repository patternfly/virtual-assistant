// ============================================================================
// Chatbot Footer
// ============================================================================

// Global footer component
// Supports:
// - Message bar
// - Footnote
// - Footnote popover

import React from 'react';

import { Flex, Divider } from '@patternfly/react-core';

export interface ChatbotFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Children for the Footer that supports MessageBar and FootNote components*/
  children?: React.ReactNode;
  /** Custom classname for the Footer component */
  className?: string;
}

export const ChatbotFooter: React.FunctionComponent<ChatbotFooterProps> = ({
  children,
  className,
  ...props
}: ChatbotFooterProps) => (
  <Flex className={`pf-chatbot__footer ${className ?? ''}`} direction={{ default: 'column' }} rowGap={{ default: 'rowGapMd' }} {...props}>
    <Divider />
    {children}
  </Flex>
);

export default ChatbotFooter;
