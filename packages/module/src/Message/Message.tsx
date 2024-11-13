// ============================================================================
// Chatbot Main - Message
// ============================================================================

import React from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Avatar, Label, LabelGroup, LabelGroupProps, LabelProps, Timestamp, Truncate } from '@patternfly/react-core';
import MessageLoading from './MessageLoading';
import CodeBlockMessage from './CodeBlockMessage/CodeBlockMessage';
import TextMessage from './TextMessage/TextMessage';
import FileDetailsLabel from '../FileDetailsLabel/FileDetailsLabel';
import ResponseActions, { ActionProps } from '../ResponseActions/ResponseActions';
import SourcesCard, { SourcesCardProps } from '../SourcesCard';
import ListItemMessage from './ListMessage/ListItemMessage';
import UnorderedListMessage from './ListMessage/UnorderedListMessage';
import OrderedListMessage from './ListMessage/OrderedListMessage';

export interface QuickResponse extends Omit<LabelProps, 'children'> {
  content: string;
  id: string;
  onClick: () => void;
}
export interface MessageAttachment {
  /** Name of file attached to the message */
  name: string;
  /** Unique identifier of file attached to the message */
  id?: string | number;
  /** Callback for when attachment label is clicked */
  onClick?: (event: React.MouseEvent, name: string, id?: string | number) => void;
  /** Callback for when attachment label is closed */
  onClose?: (event: React.MouseEvent, name: string, id?: string | number) => void;
  /** Whether file is loading */
  isLoading?: boolean;
  /** Aria label for attachment close button */
  closeButtonAriaLabel?: string;
  /** Custom test id for the language in the attachment component */
  languageTestId?: string;
  /** Custom test id for the loading spinner in the attachment component */
  spinnerTestId?: string;
}

export interface MessageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'role'> {
  /** Unique id for message */
  id?: string;
  /** Role of the user sending the message */
  role: 'user' | 'bot';
  /** Message content */
  content: string;
  /** Name of the user */
  name?: string;
  /** Avatar src for the user */
  avatar?: string;
  /** Timestamp for the message */
  timestamp?: string;
  /** Set this to true if message is being loaded */
  isLoading?: boolean;
  /** Array of attachments attached to a message */
  attachments?: MessageAttachment[];
  /** Props for message actions, such as feedback (positive or negative), copy button, share, and listen */
  actions?: {
    [key: string]: ActionProps;
  };
  /** Sources for message */
  sources?: SourcesCardProps;
  /** Label for the English word "AI," used to tag messages with role "bot" */
  botWord?: string;
  /** Label for the English "Loading message," displayed to screenreaders when loading a message */
  loadingWord?: string;
  codeBlockProps?: {
    'aria-label'?: string;
    className?: string;
  };
  /** Props for quick responses */
  quickResponses?: QuickResponse[];
  /** Props for quick responses container */
  quickResponseContainerProps?: Omit<LabelGroupProps, 'ref'>;
}

export const Message: React.FunctionComponent<MessageProps> = ({
  role,
  content,
  name,
  avatar,
  timestamp,
  isLoading,
  actions,
  sources,
  botWord = 'AI',
  loadingWord = 'Loading message',
  codeBlockProps,
  quickResponses,
  quickResponseContainerProps = { numLabels: 5 },
  attachments,
  ...props
}: MessageProps) => {
  // Configure default values
  const DEFAULTS = {
    user: {
      name: 'User',
      avatar: 'https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg'
    },
    bot: {
      name: 'Bot',
      avatar:
        'https://yt3.googleusercontent.com/ej8uvIe1AIFiJQXBwY9cfJmt0kO1cAeWxpBqG_cJndGHx95mFq1F8WakSoXIjtcprTbMQJoqH5M=s900-c-k-c0x00ffffff-no-rj'
    }
  };

  // Keep timestamps consistent between Timestamp component and aria-label
  const date = new Date();
  const dateString = timestamp ?? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <section
      aria-label={`Message from ${role} - ${dateString}`}
      className={`pf-chatbot__message pf-chatbot__message--${role}`}
      {...props}
    >
      {/* We are using an empty alt tag intentionally in order to reduce noise on screen readers */}
      <Avatar src={avatar ?? DEFAULTS[role].avatar} alt="" />
      <div className="pf-chatbot__message-contents">
        <div className="pf-chatbot__message-meta">
          {name && (
            <span className="pf-chatbot__message-name">
              <Truncate content={name} />
            </span>
          )}
          {role === 'bot' && (
            <Label variant="outline" isCompact>
              {botWord}
            </Label>
          )}
          <Timestamp date={date}>{timestamp}</Timestamp>
        </div>
        <div className="pf-chatbot__message-response">
          <div className="pf-chatbot__message-and-actions">
            {isLoading ? (
              <MessageLoading loadingWord={loadingWord} />
            ) : (
              <Markdown
                components={{
                  p: TextMessage,
                  code: ({ children }) => <CodeBlockMessage {...codeBlockProps}>{children}</CodeBlockMessage>,
                  ul: UnorderedListMessage,
                  ol: OrderedListMessage,
                  li: ListItemMessage
                }}
                remarkPlugins={[remarkGfm]}
              >
                {content}
              </Markdown>
            )}
            {!isLoading && sources && <SourcesCard {...sources} />}
            {!isLoading && actions && <ResponseActions actions={actions} />}
            {!isLoading && quickResponses && (
              <LabelGroup
                className={`pf-chatbot__message-quick-response ${quickResponseContainerProps?.className}`}
                {...quickResponseContainerProps}
              >
                {quickResponses.map(({ id, onClick, content, ...props }: QuickResponse) => (
                  <Label variant="outline" color="blue" key={id} onClick={onClick} {...props}>
                    {content}
                  </Label>
                ))}
              </LabelGroup>
            )}
          </div>
          {attachments && (
            <div className="pf-chatbot__message-attachments-container">
              {attachments.map((attachment) => (
                <div key={attachment.id ?? attachment.name} className="pf-chatbot__message-attachment">
                  <FileDetailsLabel
                    fileName={attachment.name}
                    fileId={attachment.id}
                    onClose={attachment.onClose}
                    onClick={attachment.onClick}
                    isLoading={attachment.isLoading}
                    closeButtonAriaLabel={attachment.closeButtonAriaLabel}
                    languageTestId={attachment.languageTestId}
                    spinnerTestId={attachment.spinnerTestId}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Message;
