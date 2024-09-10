import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';

export const VirtualAssistantMessages: React.FunctionComponent = () => {
  const [message, setMessage] = React.useState<string>();
  const [lastMessage, setLastMessage] = React.useState<string>();

  return (
    <>
      <p data-test-id="assistant-example-message">
        <b>Last received message: </b> {lastMessage}
      </p>
      <VirtualAssistant
        message={message}
        onChangeMessage={(_event, value) => setMessage(value)}
        onSendMessage={(message: string) => {
          setLastMessage(message);
        }}
      />
    </>
  );
};
