import React from 'react';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import GrinIcon from '@patternfly/react-icons/dist/js/icons/bacon-icon';

export const AssistantMessage: React.FunctionComponent = () => (
  <>
    <AssistantMessageEntry>How may I help you today? Do you have some question for me?</AssistantMessageEntry>
    <AssistantMessageEntry icon={GrinIcon}>Assistant message example with custom icon</AssistantMessageEntry>
  </>
);
