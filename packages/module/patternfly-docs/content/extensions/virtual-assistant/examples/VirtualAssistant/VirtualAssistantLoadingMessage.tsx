import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import LoadingMessage from '@patternfly/virtual-assistant/dist/esm/LoadingMessage'

export const BasicExample: React.FunctionComponent = () => (
  <VirtualAssistant >
    <LoadingMessage />
  </VirtualAssistant>
);
