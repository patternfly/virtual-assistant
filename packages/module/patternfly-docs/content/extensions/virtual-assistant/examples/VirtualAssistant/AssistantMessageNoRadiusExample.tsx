import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';

const noRadiusTheme = {
  global: {
    borderRadiusBubble: '0'
  },
  components: {
    VirtualAssistant: {
      card: {
        borderRadius: '0',
      },
      textArea: {
        borderRadius: "0",
      }
    },
    AssistantMessageEntry: {
      label: {
        borderRadius: '0'
      }
    }
  }
}

export const BasicExample: React.FunctionComponent = () => (
  <VirtualAssistant theme={noRadiusTheme}>
    <AssistantMessageEntry
      // eslint-disable-next-line no-console
      options={[ { title: "Option #1", props: { onClick: () => {console.log('This is an example of onClick event')} } }, { title: "Option #2" }, { title: "Option #3" } ]}
    >
      How may I help you today? Do you have some question for me?
    </AssistantMessageEntry>
  </VirtualAssistant>
);
