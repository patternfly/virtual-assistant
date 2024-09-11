import React from 'react';

import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import { Radio } from '@patternfly/react-core/dist/dynamic/Radio';
import { FormGroup } from '@patternfly/react-core/dist/dynamic/FormGroup';
import { Stack } from '@patternfly/react-core/dist/dynamic/Stack';

export const ChatbotContainerDemo: React.FunctionComponent = () => {
  const [displayMode, setDisplayMode] = React.useState(ChatbotDisplayMode.embedded);
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div>
      <Stack hasGutter>
        <FormGroup role="radiogroup" isInline fieldId="displayModeRadios" label="Display mode">
          <Radio isChecked={variant === ChatbotDisplayMode.embedded} onChange={() => setVariant(ChatbotDisplayMode.embedded)} name="basic-inline-radio" label="Embedded" id="embedded" />
          <Radio isChecked={variant === ChatbotDisplayMode.docked} onChange={() => setVariant(ChatbotDisplayMode.docked)} name="basic-inline-radio" label="Docked" id="docked" />
          <Radio isChecked={variant === ChatbotDisplayMode.fullscreen} onChange={() => setVariant(ChatbotDisplayMode.fullscreen)} name="basic-inline-radio" label="Fullscreen" id="fullscreen" />
        </FormGroup>
      </Stack>
      <Checkbox
        label="Display chatbot container"
        isChecked={isVisible}
        onChange={() => setIsVisible(!isVisible)}
        id="container-visible"
        name="container-visible"
      />
    </div>
  )
}
