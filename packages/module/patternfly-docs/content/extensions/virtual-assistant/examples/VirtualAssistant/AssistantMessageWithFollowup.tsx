import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';

export const AssistantMessage: React.FunctionComponent = () => (
  <VirtualAssistant>
    <AssistantMessageEntry
      // eslint-disable-next-line no-console
      options={[ { title: "Option #1", props: { onClick: () => {console.log('This is an example of onClick event')} } }, { title: "Option #2" }, { title: "Option #3" } ]}
    >
      How may I help you today? Do you have some question for me?
    </AssistantMessageEntry>
  </VirtualAssistant>
);
