import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import UserMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/UserMessageEntry';
import { From } from '@patternfly/virtual-assistant/dist/dynamic/types';

export const UserMessage: React.FunctionComponent = () => (
  <VirtualAssistant>
    <UserMessageEntry
      message={ { content: "Get recommendations from Advisor", from: From.USER } }
    />
  </VirtualAssistant>
);
