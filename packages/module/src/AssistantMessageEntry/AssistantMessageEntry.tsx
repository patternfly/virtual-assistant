import { MessageProps } from '../types/MessageProps';
import React, { FunctionComponent } from 'react';
import { Icon, Label, Split, SplitItem, TextContent } from '@patternfly/react-core';
import ChatbotIcon from '../ChatbotIcon';

import { AssistantMessage, MessageOption } from '../types/Message';
import { TextEntry } from '../TextEntry';

interface AssistantMessageProps extends MessageProps<AssistantMessage> {
  ask: (option: MessageOption) => unknown;
  preview: boolean;
  blockInput: boolean;
}

const OPTION_COLORS = [ 'red' ] as const;

export const AssistantMessageEntry: FunctionComponent<AssistantMessageProps> = ({ message, ask, preview, blockInput }) => {
  if (!message.content && !message.options) {
    return null;
  }

  return (
    <div className="pf-v5-u-mb-md">
      {message.content && (
        <Split className="astro-chatbot">
          <SplitItem>
            <Icon size="lg" className="pf-v5-u-mr-sm pf-v5-u-pt-md">
              <ChatbotIcon />
            </Icon>
          </SplitItem>
          <SplitItem className="bubble pf-u-background-color-200">
            <TextContent className="pf-v5-u-font-size-sm">
              <TextEntry content={message.content} preview={preview} />
            </TextContent>
          </SplitItem>
        </Split>
      )}

      {message.options && (
        <Split>
          <SplitItem className="astro-chatbot pf-v5-u-ml-xl pf-v5-u-mt-md">
            {message.options.map((option, index) => (
              <Label
                className="pf-u-m-xs"
                key={option.title}
                color={OPTION_COLORS[index % OPTION_COLORS.length]}
                render={({ className, content, componentRef }) => (
                  <a
                    className={`${className} ${blockInput ? 'astro-option-disabled' : ''}`}
                    ref={componentRef}
                    onClick={() => blockInput || ask(option)}
                  >
                    {content}
                  </a>
                )}
              >
                {option.title}
              </Label>
            ))}
          </SplitItem>
        </Split>
      )}
    </div>
  );
};

export default AssistantMessageEntry;