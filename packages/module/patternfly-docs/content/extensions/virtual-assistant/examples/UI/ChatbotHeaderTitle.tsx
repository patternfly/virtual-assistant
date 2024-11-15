import React from 'react';
import { FormGroup, Radio } from '@patternfly/react-core';
import { ChatbotHeaderTitle } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';
import { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';

export const ChatbotHeaderTitleDemo: React.FunctionComponent = () => {
  const [displayMode, setDisplayMode] = React.useState(ChatbotDisplayMode.default);

  return (
    <>
      <FormGroup role="radiogroup" isInline fieldId="header-title-variants-form-radio-group" label="Display mode">
        <Radio
          isChecked={displayMode === ChatbotDisplayMode.default}
          onChange={() => setDisplayMode(ChatbotDisplayMode.default)}
          name="basic-inline-radio"
          label="Default"
          id="default"
        />
        <Radio
          isChecked={displayMode === ChatbotDisplayMode.embedded}
          onChange={() => setDisplayMode(ChatbotDisplayMode.embedded)}
          name="basic-inline-radio"
          label="Embedded"
          id="embedded"
        />
        <Radio
          isChecked={displayMode === ChatbotDisplayMode.docked}
          onChange={() => setDisplayMode(ChatbotDisplayMode.docked)}
          name="basic-inline-radio"
          label="Docked"
          id="docked"
        />
        <Radio
          isChecked={displayMode === ChatbotDisplayMode.fullscreen}
          onChange={() => setDisplayMode(ChatbotDisplayMode.fullscreen)}
          name="basic-inline-radio"
          label="Full screen"
          id="full-screen"
        />
      </FormGroup>
      <ChatbotHeaderTitle
        displayMode={displayMode}
        showOnEmbedded="Embedded"
        showOnDocked="Docked"
        showOnFullScreen="Full screen"
        showOnDefault="Default"
      />
    </>
  );
};
