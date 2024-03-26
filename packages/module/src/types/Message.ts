import { Command } from './Command';

export enum From {
  ASSISTANT = 'assistant',
  USER = 'user',
  FEEDBACK = 'feedback',
  SYSTEM = 'system',
  INTERFACE = 'interface',
  THUMBS = 'thumbs',
}

// Base
interface BaseMessage {
  from: unknown;
  content: string;
}

export interface MessageOption {
  title?: string;
  payload: string;
}

// Brand Assistant
export interface AssistantMessage extends BaseMessage {
  messageId: string;
  from: From.ASSISTANT;
  options?: MessageOption[];
  command?: Command;
  isLoading: boolean;
}

// Brand User
export interface UserMessage extends BaseMessage {
  from: From.USER;
}

// Brand feedback
export interface FeedbackMessage extends BaseMessage {
  messageId: string;
  from: From.FEEDBACK;
  isLoading: boolean;
}

// System messages
export interface SystemMessage extends BaseMessage {
  from: From.SYSTEM;
  type: string;
  additionalContent?: string[];
}

// Banners
export interface Banner extends BaseMessage {
  from: From.INTERFACE;
  type: string;
  additionalContent?: string[];
}

export interface Thumbs {
  from: From.THUMBS;
}

export type Message = AssistantMessage | UserMessage | FeedbackMessage | SystemMessage | Banner | Thumbs;