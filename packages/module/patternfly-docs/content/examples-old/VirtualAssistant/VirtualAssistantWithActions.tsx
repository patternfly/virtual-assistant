import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import VirtualAssistantAction from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistantAction';
import { AngleDownIcon } from '@patternfly/react-icons';

export const VirtualAssistantWithActions: React.FunctionComponent = () => (
  <VirtualAssistant
    actions={
      <>
        {/* eslint-disable-next-line no-console */}
        <VirtualAssistantAction
          aria-label="Minimize virtual assistant"
          // eslint-disable-next-line no-console
          onClick={() => console.log('Minimize button clicked')}
        >
          <AngleDownIcon />
        </VirtualAssistantAction>
      </>
    }
  />
);
