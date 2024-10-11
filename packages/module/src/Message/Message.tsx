// ============================================================================
// Chatbot Main - Message
// ============================================================================

import React from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Avatar, Label, Timestamp } from '@patternfly/react-core';
import MessageLoading from './MessageLoading';
import CodeBlockMessage from './CodeBlockMessage/CodeBlockMessage';
import TextMessage from './TextMessage/TextMessage';
import FileDetailsLabel from '../FileDetailsLabel/FileDetailsLabel';
import ResponseActions, { ActionProps } from '../ResponseActions/ResponseActions';
import SourcesCard, { SourcesCardProps } from '../SourcesCard';

export interface MessageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'role'> {
  /** Unique id for message */
  id?: string;
  /** Role of the user sending the message */
  role: 'user' | 'bot';
  /** Message content */
  content?: string;
  /** Name of the user */
  name: string;
  /** Avatar src for the user */
  avatar: string;
  /** Alt text placed on the avatar */
  avatarAltText?: string;
  /** Timestamp for the message */
  timestamp?: string;
  /** Set this to true if message is being loaded */
  isLoading?: boolean;
  /** Unique identifier of file attached to the message */
  attachmentId?: string;
  /** Name of file attached to the message */
  attachmentName?: string;
  /** Callback for when attachment label is clicked */
  onAttachmentClick?: () => void;
  /** Callback for when attachment label is closed */
  onAttachmentClose?: (attachmentId: string) => void;
  /** Props for message actions, such as feedback (positive or negative), copy button, share, and listen */
  actions?: {
    positive?: ActionProps;
    negative?: ActionProps;
    copy?: ActionProps;
    share?: ActionProps;
    listen?: ActionProps;
  };
  sources?: SourcesCardProps;
}

export const Message: React.FunctionComponent<MessageProps> = ({
  role,
  content,
  name,
  avatar,
  timestamp,
  isLoading,
  attachmentId,
  attachmentName,
  onAttachmentClick,
  onAttachmentClose,
  actions,
  sources,
  avatarAltText,
  ...props
}: MessageProps) => {
  const onClose = () => {
    onAttachmentClose && attachmentId && onAttachmentClose(attachmentId);
  };

  return (
    <div className={`pf-chatbot__message pf-chatbot__message--${role}`} {...props}>
      <Avatar src={avatar} alt={avatarAltText || `Profile picture of ${role}`} />
      <div className="pf-chatbot__message-contents">
        <div className="pf-chatbot__message-meta">
          <span className="pf-chatbot__message-name">{name}</span>
          {role === 'bot' && (
            <Label variant="outline" isCompact>
              AI
            </Label>
          )}
          <Timestamp>{timestamp}</Timestamp>
        </div>
        <div className="pf-chatbot__message-response">
          <div className="pf-chatbot__message-and-actions">
            {isLoading ? (
              <MessageLoading />
            ) : (
              <Markdown components={{ p: TextMessage, code: CodeBlockMessage }} remarkPlugins={[remarkGfm]}>
                {content}
              </Markdown>
            )}
            {!isLoading && sources && <SourcesCard {...sources} />}
            {!isLoading && actions && <ResponseActions actions={actions} />}
          </div>
          {attachmentName && (
            <div className="pf-chatbot__message-attachment">
              <FileDetailsLabel fileName={attachmentName} onClick={onAttachmentClick} onClose={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
