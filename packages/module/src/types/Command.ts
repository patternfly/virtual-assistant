export enum CommandType {
  REDIRECT = 'redirect',
  FINISH_CONVERSATION = 'core_finish_conversation',
  TOUR_START = 'tour_start',
  FEEDBACK_MODAL = 'feedback_modal',
  FEEDBACK = 'feedback',
  THUMBS = 'thumbs',
}

interface BaseCommand {
  type: unknown;
  params: unknown;
}

export interface FinishConversationCommand extends BaseCommand {
  type: CommandType.FINISH_CONVERSATION;
}

export interface RedirectCommand extends BaseCommand {
  type: CommandType.REDIRECT;
  params: {
    url: string;
  };
}

export interface TourStartCommand extends BaseCommand {
  type: CommandType.TOUR_START;
}

export interface FeedbackModalCommand extends BaseCommand {
  type: CommandType.FEEDBACK_MODAL;
}

export interface FeedbackCommand extends BaseCommand {
  type: CommandType.FEEDBACK;
  params: {
    summary: string;
    description: string;
    labels: string[];
  };
}

export interface ThumbsCommand extends BaseCommand {
  type: CommandType.THUMBS;
}

export type Command = FinishConversationCommand | RedirectCommand | TourStartCommand | FeedbackCommand | FeedbackModalCommand | ThumbsCommand;