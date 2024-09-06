import React from 'react';

import { Tooltip, TooltipProps, Dropdown, DropdownProps, MenuToggle, MenuToggleElement } from '@patternfly/react-core';

export interface ChatbotHeaderSelectorDropdownProps extends Omit<DropdownProps, 'toggle'> {
  /** Value of the selected dropdown item */
  value: string;
  /** Content to be displayed in the chatbot header */
  children: React.ReactNode;
  /** Custom classname for the header component */
  className?: string;
  /** Props spread to the PF Tooltip component wrapping the display mode dropdown */
  tooltipProps?: TooltipProps;
}

export const ChatbotHeaderSelectorDropdown: React.FunctionComponent<ChatbotHeaderSelectorDropdownProps> = ({
  value,
  className,
  children,
  onSelect,
  tooltipProps,
  ...props
}: ChatbotHeaderSelectorDropdownProps) => {
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <Tooltip className="pf-chatbot__tooltip" content="Chatbot selector" position="bottom" {...tooltipProps}>
      <MenuToggle
        variant="secondary"
        aria-label="Chatbot selector"
        ref={toggleRef}
        isExpanded={isOptionsMenuOpen}
        onClick={() => setIsOptionsMenuOpen(!isOptionsMenuOpen)}
      >
        {value}
      </MenuToggle>
    </Tooltip>
  );

  return (
    <Dropdown
      className={`pf-chatbot__options ${className ?? ''}`}
      isOpen={isOptionsMenuOpen}
      onSelect={(e, value) => {
        onSelect?.(e, value);
        setIsOptionsMenuOpen(false);
      }}
      onOpenChange={(isOpen) => setIsOptionsMenuOpen(isOpen)}
      popperProps={{ position: 'right' }}
      shouldFocusToggleOnSelect
      shouldFocusFirstItemOnOpen={false}
      toggle={toggle}
      {...props}
    >
      {children}
    </Dropdown>
  );
};

export default ChatbotHeaderSelectorDropdown;
