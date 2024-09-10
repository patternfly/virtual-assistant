import React from 'react';
import ConversationAlert from '@patternfly/virtual-assistant/dist/esm/ConversationAlert';

export const BasicExample: React.FunctionComponent = () => (
  <ConversationAlert title="You can start a new conversation at any time by typing below.">
    You can add any body content
  </ConversationAlert>
);
