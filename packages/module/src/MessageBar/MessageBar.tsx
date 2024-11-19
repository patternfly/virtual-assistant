import React from 'react';
import { ButtonProps, DropEvent } from '@patternfly/react-core';

// Import Chatbot components
import SendButton from './SendButton';
import MicrophoneButton from './MicrophoneButton';
import { AttachButton } from './AttachButton';
import AttachMenu from '../AttachMenu';
import StopButton from './StopButton';
import DOMPurify from 'dompurify';

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

export interface MessageBarProps {
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
  onChange?: (event: React.ChangeEvent<HTMLDivElement>, value: string) => void;
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
  const [showPlaceholder, setShowPlaceholder] = React.useState(true);
  const textareaRef = React.useRef<HTMLDivElement>(null);
  const attachButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleInput = (event) => {
    // newMessage === '' doesn't work unless we trim, which causes other problems
    // textContent seems to work, but doesn't allow for markdown, so we need both
    const messageText = DOMPurify.sanitize(event.target.textContent);
    if (messageText === '') {
      setShowPlaceholder(true);
      setMessage('');
      onChange && onChange(event, '');
    } else {
      setShowPlaceholder(false);
      // this is so that tests work; RTL doesn't seem to like event.target.innerText, but browsers don't pick up markdown without it
      let newMessage = messageText;
      if (event.target.innerText) {
        newMessage = DOMPurify.sanitize(event.target.innerText);
      }
      setMessage(newMessage);
      onChange && onChange(event, newMessage);
    }
  };

  // Handle sending message
  const handleSend = React.useCallback(() => {
    setMessage((m) => {
      onSendMessage(m);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.innerText = '';
        setShowPlaceholder(true);
        textareaRef.current.blur();
      }
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

  const placeholder = isListeningMessage ? 'Listening' : 'Send a message...';

  const messageBarContents = (
    <>
      <div className="pf-chatbot__message-bar-input">
        {(showPlaceholder || message === '') && (
          <div className="pf-chatbot__message-bar-placeholder">{placeholder}</div>
        )}
        <div
          contentEditable
          suppressContentEditableWarning={true}
          role="textbox"
          aria-multiline="false"
          className="pf-chatbot__message-textarea"
          onInput={handleInput}
          onFocus={() => setShowPlaceholder(false)}
          onBlur={() => {
            if (message === '') {
              setShowPlaceholder(!showPlaceholder);
            }
          }}
          aria-label={placeholder}
          ref={textareaRef}
          onKeyDown={handleKeyDown}
          {...props}
        ></div>
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
