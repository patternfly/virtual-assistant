import React from 'react';
import { Button, ModalBody, ModalFooter, ModalHeader } from '@patternfly/react-core';
import { ChatbotModal } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotModal';
import { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';

export const ChatbotModalExample: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: React.MouseEvent | MouseEvent | KeyboardEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button onClick={handleModalToggle}>Launch modal</Button>
      <ChatbotModal
        isOpen={isModalOpen}
        displayMode={ChatbotDisplayMode.default}
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
