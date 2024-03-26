import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import { From } from '@patternfly/virtual-assistant/dist/dynamic/types';

export const AssistantMessageWithFollowup: React.FunctionComponent = () => (
  <VirtualAssistant>
    <AssistantMessageEntry
      message={ { content: "Here are a few things I can help you with. Select an option below or type in your questions:", options: [ { title: "Change my personal information", payload: "This is Payload" }, { title: "Show my critical vulnerabilities", payload: "This is Payload 2" }, { title: "Get recommendations from Advisor", payload: "This is Payload 3" } ], messageId: "1", from: From.ASSISTANT, isLoading: false } }
      preview={true}
      blockInput={false}
      ask={(option: { title: "This is Title", payload: "This is Payload" }) => null}
    />
  </VirtualAssistant>
);
