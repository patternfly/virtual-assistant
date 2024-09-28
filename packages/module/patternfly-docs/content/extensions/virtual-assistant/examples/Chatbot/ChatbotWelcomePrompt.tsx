import React from 'react';

import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import Checkbox from '@patternfly/react-core';

export const ChatbotWelcomePromptExample: React.FunctionComponent = () => {
  const [showWelcomePrompts, setShowWelcomePrompts] = React.useState(true);

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
    <>
      <Checkbox
        isChecked={showWelcomePrompts}
        onChange={() => {
          setShowWelcomePrompts(!showWelcomePrompts);
        }}
        name="showWelcomePrompts"
        label="Show welcome prompts"
        id="showWelcomePrompts"
      />
      <ChatbotWelcomePrompt
        title="Hello, Chatbot User"
        description="How may I help you today?"
        {...(showWelcomePrompts && { prompts: welcomePrompts })}
      />
    </>
  );
};
