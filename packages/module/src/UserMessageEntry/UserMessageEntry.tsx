import React, { PropsWithChildren } from 'react';
import { Icon, Split, SplitItem, TextContent } from '@patternfly/react-core';
import OutlinedUserIcon from '@patternfly/react-icons/dist/js/icons/outlined-user-icon';
import { createUseStyles } from 'react-jss';
import classnames from "clsx";

const useStyles = createUseStyles({
  user: {
    margin: "0 0 12px 40px",
  },
  bubbleUser: {
    border: "1px solid var(--pf-v5-global--BackgroundColor--dark-400)",
    borderRadius: "14px",
    padding: "var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md) var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md)",
    maxWidth: "100%",
    wordWrap: "break-word",
  }
})

interface UserMessageEntryProps {
  icon?: React.ComponentClass;
}

const UserMessageEntry = ({ children, icon: IconComponent = OutlinedUserIcon }: PropsWithChildren<UserMessageEntryProps>) => {
  const classes = useStyles();

  return (
    <>
      <Split className={classnames(classes.user,"pf-v5-u-mb-md pf-v5-u-align-items-flex-start pf-v5-u-justify-content-flex-end")}>
        <SplitItem className={classes.bubbleUser}>
          <TextContent className="pf-v5-u-color-300 pf-v5-u-font-size-sm">
            {children}
          </TextContent>
        </SplitItem>
        <SplitItem>
          <Icon size="lg" className="pf-v5-u-ml-sm pf-v5-u-pt-xs">
            <IconComponent />
          </Icon>
        </SplitItem>
      </Split>
    </>
  );
};

export default UserMessageEntry;