import React from 'react';
import ChatbotModal from '../ChatbotModal';
import { ModalBody, ModalHeader, ModalProps } from '@patternfly/react-core';
import { ChatbotDisplayMode } from '../Chatbot';

export interface SettingsProps extends Omit<ModalProps, 'children'> {
  /** Class applied to modal */
  className?: string;
  /** Function that handles modal toggle */
  handleModalToggle: (event: React.MouseEvent | MouseEvent | KeyboardEvent) => void;
  /** Whether modal is open */
  isModalOpen: boolean;
  /** Title of modal */
  title?: string;
  /** Display mode for the Chatbot parent; this influences the styles applied */
  displayMode?: ChatbotDisplayMode;
  /** Array of fields to display in the settings layout */
  fields?: { id: string; label: string; field: React.ReactElement }[];
}

export const Settings: React.FunctionComponent<SettingsProps> = ({
  handleModalToggle,
  isModalOpen,
  title = 'Settings',
  displayMode = ChatbotDisplayMode.default,
  className,
  fields = [],
  ...props
}) => (
  <ChatbotModal
    onClose={handleModalToggle}
    isOpen={isModalOpen}
    ouiaId="Settings"
    aria-labelledby="settings-title"
    aria-describedby="settings-modal"
    className={`pf-chatbot__settings ${className ? className : ''}`}
    displayMode={displayMode}
    {...props}
  >
    <ModalHeader>
      <div className="pf-chatbot__settings--header">
        <h1 className="pf-chatbot__settings--title">{title}</h1>
      </div>
    </ModalHeader>
    <ModalBody>
      <form className="pf-chatbot__settings-form">
        {fields.map((field) => (
          <div className="pf-chatbot__settings-form-row" key={field.label}>
            <label className="pf-chatbot__settings-label" htmlFor={field.id}>
              {field.label}
            </label>
            {field.field}
          </div>
        ))}
      </form>
    </ModalBody>
  </ChatbotModal>
);

export default Settings;
