import React from 'react';
import UserMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/UserMessageEntry';
import GrinIcon from '@patternfly/react-icons/dist/js/icons/bacon-icon';

export const UserMessage: React.FunctionComponent = () => (
  <>
    <UserMessageEntry>Hello, can you help me?</UserMessageEntry>
    <UserMessageEntry icon={GrinIcon}>User message example with custom icon</UserMessageEntry>
  </>
);
