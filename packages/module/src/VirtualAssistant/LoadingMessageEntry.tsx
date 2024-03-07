import React from 'react';
import { Icon, Split, SplitItem } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import classnames from "clsx";

import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';

const useStyles = createUseStyles({
  chatbot: {
    marginBottom: "var(--pf-v5-global--spacer--md)",
    marginRight: "40px",
  },
  bubble: {
    border: "1px solid var(--pf-v5-global--BackgroundColor--dark-400)",
    borderRadius: "14px",
    padding: "var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md) var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md)",
    maxWidth: "100%",
    wordWrap: "break-word",
  },
  "@keyframes mercuryTypingAnimation": {
    "0%": {
      transform: "translateY(0px)",
      backgroundColor: "var(--pf-v5-global--palette--black-600)",
    },
    "28%": {
      transform: "translateY(-7px)",
      backgroundColor: "var(--pf-v5-global--palette--black-400)",
    },
    "44%": {
      transform: "translateY(0px)",
      backgroundColor: "var(--pf-v5-global--palette--black-200)",
    }
  },
  dot: {},
  typing: {
    height: "17px",
    "& $dot": {
      animation: "$mercuryTypingAnimation 1.8s infinite ease-in-out",
      borderRadius: "50%",
      display: "inline-block",
      height: "7px",
      marginRight: "4px",
      marginTop: "6px",
      verticalAlign: "middle",
      width: "7px",
      "&:nth-child(1)": {
        animationDelay: "200ms",
      },
      "&:nth-child(2)": {
        animationDelay: "300ms",
      },
      "&:nth-child(3)": {
        animationDelay: "400ms",
      },
      "&:last-child": {
        marginRight: "0",
      },
    }
  }
})

export const LoadingMessageEntry = () => {
  const classes = useStyles();
  return (
    <Split className={classes.chatbot}>
      <SplitItem>
        <Icon size="lg" className="pf-v5-u-mr-sm pf-v5-u-pt-md">
          <RobotIcon />
        </Icon>
      </SplitItem>
      <SplitItem className={classnames(classes.bubble," pf-u-background-color-200")} >
        <div className={classnames(classes.typing,"pf-v5-u-display-flex pf-u-align-items-center")}>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      </SplitItem>
    </Split>
  );
};
