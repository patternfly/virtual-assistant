import React, { FunctionComponent } from 'react';
import { Icon, Split, SplitItem, TextContent } from '@patternfly/react-core';
import OutlinedUserIcon from '@patternfly/react-icons/dist/dynamic/icons/outlined-user-icon';
import { MessageProps } from '../types/MessageProps';
import { UserMessage } from '../types/Message';

export const UserMessageEntry: FunctionComponent<MessageProps<UserMessage>> = ({ message }) => (
  <React.Fragment>
    <Split className="astro-user pf-v5-u-mb-md pf-v5-u-align-items-flex-start pf-v5-u-justify-content-flex-end">
      <SplitItem className="bubble bubble-user">
        <TextContent className="pf-v5-u-color-300 pf-v5-u-font-size-sm">{message.content}</TextContent>
      </SplitItem>
      <SplitItem>
        <Icon size="lg" className="pf-v5-u-ml-sm pf-v5-u-pt-xs">
          <OutlinedUserIcon />
        </Icon>
      </SplitItem>
    </Split>
  </React.Fragment>
);

export default UserMessageEntry;