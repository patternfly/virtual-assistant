// ============================================================================
// Chatbot Footer - Message Bar
// ============================================================================
import React from 'react';
import { TextArea, TextAreaProps, Flex, FlexItem } from '@patternfly/react-core';
import { AutoTextArea } from 'react-textarea-auto-witdth-height';

// Import Chatbot components
import AttachButton from './AttachButton';
import MicrophoneButton from './MicrophoneButton';
import SendButton from './SendButton';

export interface MessageBarProps extends TextAreaProps {
  /** Callback to get the value of input message by user */
  onSendMessage: (message: string) => void;
  /** Class Name for the MessageBar component */
  className?: string;
  /** Flag to always to show the send button. By default send button is shown when there is a message in the input field */
  alwayShowSendButton?: boolean;
  /** Flag to enable the Attach button  */
  hasAttachButton?: boolean;
  /** Flag to enable the Microphone button  */
  hasMicrophoneButton?: boolean;
  /** Callback function for when attach button is clicked */
  handleAttach?: (event: React.MouseEvent | MouseEvent | KeyboardEvent) => void;
}

export const MessageBar: React.FunctionComponent<MessageBarProps> = ({
  onSendMessage,
  className,
  alwayShowSendButton,
  hasAttachButton,
  hasMicrophoneButton,
  handleAttach,
  ...props
}: MessageBarProps) => {
  // Text Input
  // --------------------------------------------------------------------------
  const [message, setMessage] = React.useState<string>('');
  const [isListeningMessage, setIsListeningMessage] = React.useState<boolean>(false);

  const textareaRef = React.useRef(null);

  const handleChange = React.useCallback((event) => {
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
    (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <Flex className={`pf-chatbot__message-bar ${className ?? ''}`} alignItems={{default:'alignItemsCenter'}} justifyContent={{default: 'justifyContentFlexEnd'}} flexWrap={{default:'wrap'}}>
      <FlexItem flex={{default: 'flex_1'}} className="pf-chatbot__message-bar-input">
        <TextArea
          ref={textareaRef}
          className="pf-chatbot__message-textarea"
          value={message as any} // Added any to make the third part TextArea component types happy. Remove when replced with PF TextArea
          onChange={handleChange as any} // Added any to make the third part TextArea component types happy. Remove when replced with PF TextArea
          onKeyDown={handleKeyDown}
          placeholder={isListeningMessage ? 'Listening' : 'Send a message...'}
          aria-label={isListeningMessage ? 'Listening' : 'Send a message...'}
          {...props}
        />
      </FlexItem>

      <FlexItem className="pf-chatbot__message-bar-actions">
        {hasAttachButton && <AttachButton onClick={handleAttach} isDisabled={isListeningMessage} />}
        {hasMicrophoneButton && (
          <MicrophoneButton
            isListening={isListeningMessage}
            onIsListeningChange={setIsListeningMessage}
            onSpeechRecognition={setMessage}
          />
        )}
        <SendButton value={message} onClick={handleSend} />
      </FlexItem>
    </Flex>
  );
};

export default MessageBar;
