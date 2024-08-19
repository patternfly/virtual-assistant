import React from 'react';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';

export interface SystemMessageEntryProps {
  /** Message rendered within the system message entry */
  children: React.ReactNode;
}

const useStyles = createUseStyles({
  systemMessageText: {
    paddingBottom: "var(--pf-v5-global--spacer--md)",
    textAlign: "center",
  }
})

export const SystemMessageEntry: React.FunctionComponent<SystemMessageEntryProps> = (props: SystemMessageEntryProps) => {
  const classes = useStyles();
  return (
    <TextContent>
      <Text data-test-id="assistant-system-message-entry" component={TextVariants.small} className={classes.systemMessageText}>
        {props.children}
      </Text>
    </TextContent>
  );
};

export default SystemMessageEntry;