import React from 'react';
import { ButtonProps, DropEvent, TextAreaProps } from '@patternfly/react-core';
import { AutoTextArea } from 'react-textarea-auto-witdth-height';

// Import Chatbot components
import SendButton from './SendButton';
import MicrophoneButton from './MicrophoneButton';
import { AttachButton } from './AttachButton';
import AttachMenu from '../AttachMenu';
import StopButton from './StopButton';

export interface MessageBarWithAttachMenuProps {
  /** Flag to enable whether attach menu is open */
  isAttachMenuOpen: boolean;
  /** Callback to close attach menu */
  setIsAttachMenuOpen: (isOpen: boolean) => void;
  /** Items in menu */
  attachMenuItems: React.ReactNode;
  /** A callback for when the attachment menu toggle is clicked */
  onAttachMenuToggleClick: () => void;
  /** A callback for when the input value in the menu changes. */
  onAttachMenuInputChange: (value: string) => void;
  /** Function callback called when user selects item in menu. */
  onAttachMenuSelect?: (event?: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
  /** Placeholder for search input */
  attachMenuInputPlaceholder?: string;
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onAttachMenuOnOpenChangeKeys?: string[];
  /** Callback to change the open state of the menu. Triggered by clicking outside of the menu. */
  onAttachMenuOpenChange?: (isOpen: boolean) => void;
}

export interface MessageBarProps extends TextAreaProps {
  /** Callback to get the value of input message by user */
  onSendMessage: (message: string) => void;
  /** Class Name for the MessageBar component */
  className?: string;
  /** Flag to always to show the send button. By default send button is shown when there is a message in the input field */
  alwayShowSendButton?: boolean;
  /** Flag to disable/enable the Attach button  */
  hasAttachButton?: boolean;
  /** Flag to enable the Microphone button  */
  hasMicrophoneButton?: boolean;
  /** Flag to enable the Stop button, used for streaming content */
  hasStopButton?: boolean;
  /** Callback function for when stop button is clicked */
  handleStopButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback function for when attach button is used to upload a file */
  handleAttach?: (data: File[], event: DropEvent) => void;
  /** Props to enable a menu that opens when the Attach button is clicked, instead of the attachment window */
  attachMenuProps?: MessageBarWithAttachMenuProps;
  /** Flag to provide manual control over whether send button is disabled */
  isSendButtonDisabled?: boolean;
  /** Prop to allow passage of additional props to buttons */
  buttonProps?: {
    attach?: { tooltipContent?: string; props?: ButtonProps; inputTestId?: string };
    stop?: { tooltipContent?: string; props?: ButtonProps };
    send?: { tooltipContent?: string; props?: ButtonProps };
    microphone?: {
      tooltipContent?: { active?: string; inactive?: string };
      props?: ButtonProps;
    };
  };
  /** A callback for when the text area value changes. */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
}

export const MessageBar: React.FunctionComponent<MessageBarProps> = ({
  onSendMessage,
  className,
  alwayShowSendButton,
  hasAttachButton = true,
  hasMicrophoneButton,
  handleAttach,
  attachMenuProps,
  isSendButtonDisabled,
  handleStopButton,
  hasStopButton,
  buttonProps,
  onChange,
  ...props
}: MessageBarProps) => {
  // Text Input
  // --------------------------------------------------------------------------
  const [message, setMessage] = React.useState<string>('');
  const [isListeningMessage, setIsListeningMessage] = React.useState<boolean>(false);

  const textareaRef = React.useRef(null);
  const attachButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleChange = React.useCallback((event) => {
    onChange && onChange(event, event.target.value);
    setMessage(event.target.value);
  }, []);

  // Handle sending message
  const handleSend = React.useCallback(() => {
    setMessage((m) => {
      onSendMessage(m);
      return '';
    });
  }, [onSendMessage]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!isSendButtonDisabled && !hasStopButton) {
          handleSend();
        }
      }
    },
    [handleSend]
  );

  const handleAttachMenuToggle = () => {
    attachMenuProps?.setIsAttachMenuOpen && attachMenuProps?.setIsAttachMenuOpen(!attachMenuProps?.isAttachMenuOpen);
    attachMenuProps?.onAttachMenuToggleClick();
  };

  const renderButtons = () => {
    if (hasStopButton && handleStopButton) {
      return (
        <StopButton
          onClick={handleStopButton}
          tooltipContent={buttonProps?.stop?.tooltipContent}
          {...buttonProps?.stop?.props}
        />
      );
    }
    return (
      <>
        {attachMenuProps && (
          <AttachButton
            ref={attachButtonRef}
            onClick={handleAttachMenuToggle}
            isDisabled={isListeningMessage}
            tooltipContent={buttonProps?.attach?.tooltipContent}
            {...buttonProps?.attach?.props}
          />
        )}
        {!attachMenuProps && hasAttachButton && (
          <AttachButton
            onAttachAccepted={handleAttach}
            isDisabled={isListeningMessage}
            tooltipContent={buttonProps?.attach?.tooltipContent}
            inputTestId={buttonProps?.attach?.inputTestId}
            {...buttonProps?.attach?.props}
          />
        )}
        {hasMicrophoneButton && (
          <MicrophoneButton
            isListening={isListeningMessage}
            onIsListeningChange={setIsListeningMessage}
            onSpeechRecognition={setMessage}
            tooltipContent={buttonProps?.microphone?.tooltipContent}
            {...buttonProps?.microphone?.props}
          />
        )}
        {(alwayShowSendButton || message) && (
          <SendButton
            value={message}
            onClick={handleSend}
            isDisabled={isSendButtonDisabled}
            tooltipContent={buttonProps?.send?.tooltipContent}
            {...buttonProps?.send?.props}
          />
        )}
      </>
    );
  };

  const messageBarContents = (
    <>
      <div className="pf-chatbot__message-bar-input">
        <AutoTextArea
          ref={textareaRef}
          className="pf-chatbot__message-textarea"
          value={message as any} // Added any to make the third part TextArea component types happy. Remove when replced with PF TextArea
          onChange={handleChange as any} // Added any to make the third part TextArea component types happy. Remove when replced with PF TextArea
          onKeyDown={handleKeyDown}
          placeholder={isListeningMessage ? 'Listening' : 'Send a message...'}
          aria-label={isListeningMessage ? 'Listening' : 'Send a message...'}
          {...props}
        />
      </div>
      <div className="pf-chatbot__message-bar-actions">{renderButtons()}</div>
    </>
  );

  if (attachMenuProps) {
    return (
      <AttachMenu
        toggle={(toggleRef) => (
          <div ref={toggleRef} className={`pf-chatbot__message-bar ${className ?? ''}`}>
            {messageBarContents}
          </div>
        )}
        filteredItems={attachMenuProps?.attachMenuItems}
        {...(attachMenuProps && { isOpen: attachMenuProps.isAttachMenuOpen })}
        onOpenChange={(isAttachMenuOpen) => {
          attachButtonRef.current?.focus();
          attachMenuProps?.setIsAttachMenuOpen(isAttachMenuOpen);
          attachMenuProps?.onAttachMenuOpenChange && attachMenuProps?.onAttachMenuOpenChange(isAttachMenuOpen);
        }}
        onOpenChangeKeys={attachMenuProps?.onAttachMenuOnOpenChangeKeys}
        onSelect={attachMenuProps?.onAttachMenuSelect}
        {...(attachMenuProps && { handleTextInputChange: attachMenuProps.onAttachMenuInputChange })}
        popperProps={{ direction: 'up', distance: '8' }}
        searchInputPlaceholder={attachMenuProps?.attachMenuInputPlaceholder}
      />
    );
  }

  return <div className={`pf-chatbot__message-bar ${className ?? ''}`}>{messageBarContents}</div>;
};

export default MessageBar;
