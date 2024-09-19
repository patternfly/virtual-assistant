import React from 'react';

import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import { Radio } from '@patternfly/react-core/dist/dynamic/Radio';
import { Checkbox } from '@patternfly/react-core/dist/dynamic/Checkbox';
import { FormGroup } from '@patternfly/react-core/dist/dynamic/FormGroup';
import { Stack } from '@patternfly/react-core/dist/dynamic/Stack';

export const ChatbotContainerDemo: React.FunctionComponent = () => {
  const [displayMode, setDisplayMode] = React.useState(ChatbotDisplayMode.default);
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          padding: 'var(--pf-t--global--spacer--lg)',
          zIndex: '601',
          boxShadow: 'var(--pf-t--global--box-shadow--lg)'
        }}
      >
        <Stack hasGutter>
          <FormGroup role="radiogroup" isInline fieldId="displayModeRadios" label="Display mode">
            <Radio
              isChecked={displayMode === ChatbotDisplayMode.default}
              onChange={() => setDisplayMode(ChatbotDisplayMode.default)}
              name="basic-inline-radio"
              label="Overlay / default"
              id="default"
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
              label="Fullscreen"
              id="fullscreen"
            />
          </FormGroup>
          <Checkbox
            label="Display chatbot container"
            isChecked={isVisible}
            onChange={() => setIsVisible(!isVisible)}
            id="container-visible"
            name="container-visible"
          />
        </Stack>
      </div>
      <Chatbot displayMode={displayMode} isVisible={isVisible}></Chatbot>
    </>
  );
};
