import React from 'react';

import { Split, SplitItem } from '@patternfly/react-core';

export interface ChatbotHeaderActionsProps {
  /** Content to be displayed in the chatbot header */
  children: React.ReactNode;
  /** Custom classname for the header component */
  className?: string;
}

export const ChatbotHeaderActions: React.FunctionComponent<ChatbotHeaderActionsProps> = ({
  className,
  children
}: ChatbotHeaderActionsProps) => (
  <SplitItem className={`pf-chatbot__actions ${className || ''}`}>
    <Split hasGutter>{children}</Split>
  </SplitItem>
);

export default ChatbotHeaderActions;
