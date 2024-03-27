import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import { From } from '@patternfly/virtual-assistant/dist/dynamic/types';

export const AssistantMessage: React.FunctionComponent = () => (
  <VirtualAssistant>
    <AssistantMessageEntry
      message={ { content: "Hi, I'm your virtual assistant for the Hybrid Cloud Console.", messageId: "1", from: From.ASSISTANT, isLoading: false } }
      preview={true}
      blockInput={false}
      ask={(option: { title: "This is Title", payload: "This is Payload" }) => null}
    />
  </VirtualAssistant>
);
