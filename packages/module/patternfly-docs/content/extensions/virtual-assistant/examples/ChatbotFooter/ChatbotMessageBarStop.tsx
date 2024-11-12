import React from 'react';
import { MessageBar } from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';

export const ChatbotMessageBarStop: React.FunctionComponent = () => {
  const handleSend = (message) => alert(message);

  const handleStopButton = () => alert('Stop button clicked');

  return <MessageBar handleStopButton={handleStopButton} hasStopButton onSendMessage={handleSend} />;
};
