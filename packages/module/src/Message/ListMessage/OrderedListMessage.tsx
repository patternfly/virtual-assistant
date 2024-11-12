// ============================================================================
// Chatbot Main - Message - Content - List
// ============================================================================

import React from 'react';
import { ExtraProps } from 'react-markdown';
import { List, ListComponent, OrderType } from '@patternfly/react-core';

const OrderedListMessage = ({ children }: JSX.IntrinsicElements['ol'] & ExtraProps) => (
  <div className="pf-chatbot__message-ordered-list">
    <List component={ListComponent.ol} type={OrderType.number}>
      {children}
    </List>
  </div>
);

export default OrderedListMessage;
