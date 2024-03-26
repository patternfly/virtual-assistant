import React, { PropsWithChildren } from 'react';
import { Icon, Label, Split, SplitItem, TextContent, LabelProps } from '@patternfly/react-core';
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
  }
})

interface AssistantMessageEntryProps {
  options?: {
    title: string;
    props?: LabelProps
  }[],
  icon?: React.ComponentClass;
}

export const AssistantMessageEntry = ({ children, options, icon: IconComponent = RobotIcon }: PropsWithChildren<AssistantMessageEntryProps>) => {
  const classes = useStyles();
  return (
    <div className="pf-v5-u-mb-md">
      <Split className={classes.chatbot}>
        <SplitItem>
          <Icon size="lg" className="pf-v5-u-mr-sm pf-v5-u-pt-md">
            <IconComponent />
          </Icon>
        </SplitItem>
        <SplitItem className={classnames(classes.bubble," pf-v5-u-background-color-200")}>
          <TextContent className="pf-v5-u-font-size-sm">
            {children}
          </TextContent>
        </SplitItem>
      </Split>
      {options ? ( 
        <Split>
          <SplitItem className={classnames(classes.chatbot,"pf-v5-u-ml-xl pf-v5-u-mt-md")}>
            {options.map((option, index) => (
              <Label key={index} className="pf-v5-u-m-xs" {...option.props}>
                {option.title}
              </Label>
            ))}
          </SplitItem>
        </Split>
      ) : null
      }
    </div>
  );
};

export default AssistantMessageEntry;