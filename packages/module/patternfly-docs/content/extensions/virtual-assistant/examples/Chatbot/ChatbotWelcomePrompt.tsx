import React from 'react';

import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';

export const ChatbotWelcomePromptExample: React.FunctionComponent = () => {
  const welcomePrompts = [
    {
      title: 'Topic 1',
      message: 'Helpful prompt for Topic 1'
    },
    {
      title: 'Topic 2',
      message: 'Helpful prompt for Topic 2'
    }
  ];

  return (
    <ChatbotWelcomePrompt
      title="Hello, Chatbot User"
      description="How may I help you today?"
      prompts={welcomePrompts}
    />
  );
};
