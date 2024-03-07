import React from 'react';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  systemMessageText: {
    paddingBottom: "var(--pf-v5-global--spacer--md)",
    textAlign: "center",
  }
})

export const SystemMessageEntry = () => {
  const classes = useStyles();
  return (
    <TextContent>
      <Text component={TextVariants.small} className={classes.systemMessageText}>
        End of conversation
      </Text>
    </TextContent>
  );
};
