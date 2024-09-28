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

export interface MessageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'role'> {
  /** Role of the user sending the message */
  role: 'user' | 'bot';
  /** Message content */
  content: string;
  /** Name of the user */
  name?: string;
  /** Avatar src for the user */
  avatar?: string;
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
  avatarAltText,
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

  const onClose = () => {
    onAttachmentClose && attachmentId && onAttachmentClose(attachmentId);
  };

  return (
    <div className={`pf-chatbot__message pf-chatbot__message--${role}`} {...props}>
      <Avatar src={avatar ?? DEFAULTS[role].avatar} alt={avatarAltText || `Profile picture of ${role}`} />
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
