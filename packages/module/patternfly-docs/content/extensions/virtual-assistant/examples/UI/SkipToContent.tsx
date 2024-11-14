import React from 'react';

import { SkipToContent } from '@patternfly/react-core';
import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';

export const ChatbotDemo: React.FunctionComponent = () => {
  const [chatbotVisible, setChatbotVisible] = React.useState<boolean>(true);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const chatbotRef = React.useRef<HTMLDivElement>(null);
  const displayMode = ChatbotDisplayMode.default;

  const handleSkipToContent = (e) => {
    e.preventDefault();
    if (!chatbotVisible && toggleRef.current) {
      toggleRef.current.focus();
    }
    if (chatbotVisible && chatbotRef.current) {
      chatbotRef.current.focus();
    }
  };

  return (
    <>
      <SkipToContent onClick={handleSkipToContent} href="#">
        Skip to chatbot
      </SkipToContent>
      <ChatbotToggle
        toolTipLabel="Chatbot"
        isChatbotVisible={chatbotVisible}
        onToggleChatbot={() => setChatbotVisible(!chatbotVisible)}
        id="chatbot-toggle"
        ref={toggleRef}
      />
      <Chatbot isVisible={chatbotVisible} displayMode={displayMode} ref={chatbotRef}>
        &nbsp;
      </Chatbot>
    </>
  );
};
