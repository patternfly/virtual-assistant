import React, { PropsWithChildren } from 'react';
import { Split, SplitItem, TextContent } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import clsx from "clsx";
import { useAssistantContext } from '../AssistantContext';

const useStyles = createUseStyles({
  user: {
    margin: "0 0 12px 40px",
  },
  bubbleUser: {
    backgroundColor: "var(--pf-v5-global--danger-color--100)",
    borderRadius: ({ removeBorderRadius }: { removeBorderRadius: boolean }) => 
      removeBorderRadius ? "0" : "14px",
    color: "#fff",
    padding: "var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md) var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md)",
    maxWidth: "100%",
    wordWrap: "break-word",
  }
})

interface UserMessageEntryProps {
  /** User message entry icon */
  icon?: React.ComponentType;
}

const UserMessageEntry = ({ children }: PropsWithChildren<UserMessageEntryProps>) => {
  const { removeBorderRadius } = useAssistantContext();
  const classes = useStyles({ removeBorderRadius });

  return (
    <Split className={clsx(classes.user, "pf-v5-u-mb-md pf-v5-u-align-items-flex-start pf-v5-u-justify-content-flex-end")}>
      <SplitItem className={classes.bubbleUser}>
        <TextContent className="pf-v5-u-color-light-100 pf-v5-u-font-size-sm">
          {children}
        </TextContent>
      </SplitItem>
    </Split>
  );
};

export default UserMessageEntry;
