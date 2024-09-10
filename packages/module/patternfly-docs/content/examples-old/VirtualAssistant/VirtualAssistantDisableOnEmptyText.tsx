import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';

export const VirtualAssistantDisableOnEmptyText: React.FunctionComponent = () => {
  const [message, setMessage] = React.useState<string>('');

  return (
    <>
      <VirtualAssistant
        message={message}
        onChangeMessage={(_event, value) => setMessage(value)}
        isSendButtonDisabled={message.trim() === ''}
      />
    </>
  );
};
