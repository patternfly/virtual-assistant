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
    borderRadius: "14px",
    padding: "var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md) var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md)",
    maxWidth: "100%",
    wordWrap: "break-word",
  },
  label: {
    backgroundColor: "var(--pf-v5-global--BackgroundColor--100)",
    "--pf-v5-c-label__content--before--BorderColor": "var(--pf-v5-global--danger-color--100)",
    "--pf-v5-c-label--PaddingBottom": ".3rem",
    "--pf-v5-c-label--PaddingRight": "1rem",
    "--pf-v5-c-label--PaddingLeft": "1rem",
    "--pf-v5-c-label--PaddingTop": ".3rem",
  },
  activeOption: {
    background: "var(--pf-v5-global--danger-color--100)",
    pointerEvents: "none",
    "--pf-v5-c-label__content--before--BorderColor": "var(--pf-v5-global--danger-color--100)",
    "--pf-v5-c-label--m-outline__content--link--hover--before--BorderColor": "var(--pf-v5-global--danger-color--100)",
    "--pf-v5-c-label__content--link--focus--before--BorderColor": "var(--pf-v5-global--danger-color--100)",
    "& .pf-v5-c-label__content": {
      color: "var(--pf-v5-global--BackgroundColor--100)",
    },
  },
  disabledOption: {
    background: "var(--pf-v5-c-label--m-red--BackgroundColor)",
    opacity: "0.6",
    pointerEvents: "none",
    "--pf-v5-c-label__content--before--BorderColor": "var(--pf-v5-c-label--m-red--BackgroundColor) !important",
    "& .pf-v5-c-label__content": {
      color: "var(--pf-v5-c-label--m-red__content--Color)",
    },
  }
})

interface AssistantMessageEntryProps {
  options?: {
    title: React.ReactNode;
    props?: LabelProps & { onClick?: () => void };
  }[];
  icon?: React.ComponentType;
}

export const AssistantMessageEntry = ({
  children,
  options,
  icon: IconComponent = RobotIcon
}: PropsWithChildren<AssistantMessageEntryProps>) => {
  const [ selectedOptionIndex, setSelectedOptionIndex ] = React.useState<number | null>(null);
  const classes = useStyles();

  const handleOptionClick = (index: number, customOnClick?: () => void) => {
    setSelectedOptionIndex(index);
    if (customOnClick) {
      customOnClick();
    }
  };

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
          <SplitItem className={classnames(classes.chatbot, "pf-v5-u-ml-xl pf-v5-u-mt-md")}>
            {options.map((option, index) => {
              const { onClick: customOnClick, ...restProps } = option.props || {};
              return (
                <Label
                  key={index}
                  className={classnames(classes.label, "pf-v5-u-m-xs pf-m-red", {
                    [classes.activeOption]: selectedOptionIndex === index,
                    [classes.disabledOption]: selectedOptionIndex !== null && selectedOptionIndex !== index
                  })}
                  onClick={() => handleOptionClick(index, customOnClick)}
                  {...restProps}
                >
                  {option.title}
                </Label>
              );
            })}
          </SplitItem>
        </Split>
      ) : null}
    </div>
  );
};

export default AssistantMessageEntry;
