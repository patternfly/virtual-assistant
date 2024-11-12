// ============================================================================
// Chatbot Main - Message - Content - List
// ============================================================================

import React from 'react';
import { ExtraProps } from 'react-markdown';
import { List } from '@patternfly/react-core';

const UnorderedListMessage = ({ children }: JSX.IntrinsicElements['ul'] & ExtraProps) => (
  <div className="pf-chatbot__message-unordered-list">
    <List>{children}</List>
  </div>
);

export default UnorderedListMessage;
