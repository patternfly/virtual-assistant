import React from 'react';
import { Button, FormGroup, ModalBody, ModalFooter, ModalHeader, Radio } from '@patternfly/react-core';
import { ChatbotModal } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotModal';
import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';

export const ChatbotModalExample: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [displayMode, setDisplayMode] = React.useState(ChatbotDisplayMode.default);

  const handleModalToggle = (_event: React.MouseEvent | MouseEvent | KeyboardEvent) => {
    setIsModalOpen(!isModalOpen);
  };

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
        <FormGroup role="radiogroup" isInline fieldId="basic-form-radio-group" label="Display mode">
          <Radio
            isChecked={displayMode === ChatbotDisplayMode.default}
            onChange={() => setDisplayMode(ChatbotDisplayMode.default)}
            name="basic-inline-radio"
            label="Default"
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
          <Radio
            isChecked={displayMode === ChatbotDisplayMode.embedded}
            onChange={() => setDisplayMode(ChatbotDisplayMode.embedded)}
            name="basic-inline-radio"
            label="Embedded"
            id="embedded"
          />
        </FormGroup>
        <Button onClick={handleModalToggle}>Launch modal</Button>
      </div>
      <Chatbot displayMode={displayMode} isVisible></Chatbot>
      <ChatbotModal
        isOpen={isModalOpen}
        displayMode={displayMode}
        onClose={handleModalToggle}
        ouiaId="ChatbotModal"
        aria-labelledby="basic-modal-title"
        aria-describedby="modal-box-body-basic"
      >
        <ModalHeader title="Basic modal" labelId="basic-modal-title" />
        <ModalBody id="modal-box-body-basic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ChatbotModal>
    </>
  );
};
