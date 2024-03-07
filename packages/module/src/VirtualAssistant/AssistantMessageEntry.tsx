
import React from 'react';
import { Icon, Label, Split, SplitItem, TextContent } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import classnames from "clsx";

import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';

const useStyles = createUseStyles({
  chatbot: {
    marginRight: "40px",
  },
  bubble: {
    border: "1px solid var(--pf-v5-global--BackgroundColor--dark-400)",
    borderRadius: "14px",
    padding: "var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md) var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md)",
    maxWidth: "100%",
    wordWrap: "break-word",
  },
  label: {
    // not working
    "BorderColor": "var(--pf-v5-c-label--m-red__icon--Color)",
  }
})

export const AssistantMessageEntry = () => {
  const classes = useStyles();
  return (
    <div className="pf-v5-u-mb-md">
      <Split className={classes.chatbot}>
        <SplitItem>
          <Icon size="lg" className="pf-v5-u-mr-sm pf-v5-u-pt-md">
            <RobotIcon />
          </Icon>
        </SplitItem>
        <SplitItem className={classnames(classes.bubble," pf-u-background-color-200")}>
          <TextContent className="pf-v5-u-font-size-sm">
            How many I help you today? Do you have some question for me?
          </TextContent>
        </SplitItem>
      </Split>
      {/* Options*/}
      <Split>
        <SplitItem className={classnames(classes.chatbot,"pf-v5-u-ml-xl pf-v5-u-mt-md")}>
          <Label className={classnames(classes.label,"pf-v5-u-m-xs")}>
            Option #1
          </Label>
          <Label className={classnames(classes.label,"pf-v5-u-m-xs")}>
            Option #2
          </Label>
          <Label className={classnames(classes.label,"pf-v5-u-m-xs")}>
            Option #3
          </Label>
        </SplitItem>
      </Split>
      {/* Options*/}
    </div>
  );
};
