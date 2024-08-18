import React, { PropsWithChildren } from 'react';
import { Dropdown, DropdownItem, DropdownList, Icon, Label, MenuToggle, MenuToggleElement, Split, SplitItem, TextContent, LabelProps, DropdownItemProps, DropdownProps } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import classnames from "clsx";

import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';

const useStyles = createUseStyles({
  chatbot: {
    marginRight: "40px",
  },
  bubble: {
    borderRadius: ({ removeBorderRadius }: { removeBorderRadius: boolean }) => removeBorderRadius ? "0" : "14px",
    padding: "var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md) var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--md)",
    maxWidth: "100%",
    wordWrap: "break-word",
  },
  dropdownBlock: {
    marginTop: "var(--pf-v5-global--spacer--sm)"
  },
  label: {
    backgroundColor: "var(--pf-v5-global--BackgroundColor--100)",
    "--pf-v5-c-label--BorderRadius": ({ removeBorderRadius }: { removeBorderRadius: boolean }) => removeBorderRadius ? "0" : "var(--pf-v5-global--BorderRadius--lg)",
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
  inactiveOption: {
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
  /** message title for the assistant */
  title?: React.ReactNode;
  options?: {
    title: React.ReactNode;
    props?: LabelProps;
  }[];
  icon?: React.ComponentType;
  dropdown?: {
    items: { label: React.ReactNode; props?: DropdownItemProps; }[];
    dropdownProps?: DropdownProps;
  };
}

export const AssistantMessageEntry = ({
  children,
  options,
  title = 'Virtual Assistant',
  icon: IconComponent = RobotIcon,
  dropdown,
}: PropsWithChildren<AssistantMessageEntryProps>) => {
  const [ selectedOptionIndex, setSelectedOptionIndex ] = React.useState<number>();
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ selected, setSelected ] = React.useState<string | number | undefined>();
  const classes = useStyles();

  const handleOptionClick = (event: React.MouseEvent, index: number, customOnClick?: (event: React.MouseEvent) => void) => {
    setSelectedOptionIndex(index);
    if (customOnClick) {
      customOnClick(event);
    }
  };

  const handleDropdownClick = (event: React.MouseEvent, index: number, customOnClick?: (event: React.MouseEvent) => void) => {
    if (customOnClick) {
      customOnClick(event);
    }
  };

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="pf-v5-u-mb-md">
      <Split className={classes.chatbot}>
        <SplitItem>
          <Icon size="lg" className="pf-v5-u-mr-sm pf-v5-u-pt-md">
            <IconComponent />
          </Icon>
        </SplitItem>
        <SplitItem>
          <TextContent className="pf-v5-u-font-size-xs pf-v5-u-font-weight-bold pf-v5-u-py-xs" data-test-id="assistant-title">
            {title}
          </TextContent>
          <div className={classnames(classes.bubble, "pf-v5-u-background-color-200")}>
            <TextContent className="pf-v5-u-font-size-sm">
              {children}
            </TextContent>
            {dropdown ? (
              <div className={classnames(classes.dropdownBlock," pf-v5-u-background-color-100")}>
                <Dropdown
                  isScrollable
                  isOpen={isOpen}
                  onSelect={onSelect}
                  onOpenChange={setIsOpen}
                  {...dropdown.dropdownProps}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
                      {selected ? selected : "A few things I can help you with" }
                    </MenuToggle>
                  )}>
                  <DropdownList>
                    {dropdown.items.map((option, key) => {
                      const { onClick: customOnClick, ...dropdownProps } = option.props || {};
                      return (
                        <DropdownItem
                          {...dropdownProps}
                          key={key}
                          onClick={(event) => handleDropdownClick(event, key, customOnClick)}>
                          {option.label}
                        </DropdownItem>
                      );
                    })}
                  </DropdownList>
                </Dropdown>
              </div>
            ) : null}
          </div>
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
                  {...restProps}
                  className={classnames(classes.label, 'pf-v5-u-m-xs pf-m-red', {
                    [classes.activeOption]: selectedOptionIndex === index,
                    [classes.inactiveOption]: selectedOptionIndex !== undefined && selectedOptionIndex !== index
                  }, restProps.className)}
                  onClick={(event) => handleOptionClick(event, index, customOnClick)}
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
