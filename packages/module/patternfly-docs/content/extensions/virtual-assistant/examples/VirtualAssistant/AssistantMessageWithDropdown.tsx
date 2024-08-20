import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';

export const AssistantMessage: React.FunctionComponent = () => (
  <VirtualAssistant>
    <AssistantMessageEntry
      dropdown={
        // eslint-disable-next-line no-console
        { items: [ { label: 'chicken' }, { label: 'beef', props: { onClick: () => {console.log('This is an example of onClick event')} } } ] }
      }
    >
      Here are a few things I can help you with. Select an option below or type in your questions. 
    </AssistantMessageEntry>
  </VirtualAssistant>
);
