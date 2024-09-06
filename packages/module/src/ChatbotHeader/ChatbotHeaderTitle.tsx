import React from 'react';

import { SplitItem } from '@patternfly/react-core';

export interface ChatbotHeaderTitleProps {
  /** Content to be displayed in the chatbot header */
  children: React.ReactNode;
  /** Custom classname for the header component */
  className?: string;
}

export const ChatbotHeaderTitle: React.FunctionComponent<ChatbotHeaderTitleProps> = ({
  className,
  children
}: ChatbotHeaderTitleProps) => (
  <SplitItem isFilled className={`pf-chatbot__title ${className || ''}`}>
    {children}
  </SplitItem>
);

export default ChatbotHeaderTitle;
