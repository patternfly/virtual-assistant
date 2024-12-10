// ============================================================================
// Chatbot Header - Chatbot Conversation History Nav
// ============================================================================
import React from 'react';

// Import PatternFly components
import { MenuToggleElement, Tooltip, MenuToggle, Dropdown, DropdownProps } from '@patternfly/react-core';

import EllipsisIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export interface ChatbotConversationHistoryDropdownProps extends Omit<DropdownProps, 'toggle'> {
  /** Dropdown items rendered in conversation options dropdown */
  menuItems: React.ReactNode;
  /** Optional classname applied to conversation options dropdown */
  menuClassName?: string;
  /** Tooltip content and aria-label applied to conversation options dropdown */
  label?: string;
  /** Callback for when user selects item. */
  onSelect?: (event?: React.MouseEvent, value?: string | number) => void;
}

export const ChatbotConversationHistoryDropdown: React.FunctionComponent<ChatbotConversationHistoryDropdownProps> = ({
  menuItems,
  menuClassName,
  onSelect,
  label
}: ChatbotConversationHistoryDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <Tooltip className="pf-chatbot__tooltip" content={label ?? 'Conversation options'} position="bottom">
      <MenuToggle
        className="pf-chatbot__history-actions"
        variant="plain"
        aria-label={label ?? 'Conversation options'}
        ref={toggleRef}
        isExpanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        role="menuitem"
      >
        <EllipsisIcon />
      </MenuToggle>
    </Tooltip>
  );

  return (
    <Dropdown
      className={`pf-chatbot__selections ${menuClassName ?? ''}`}
      isOpen={isOpen}
      onSelect={(props) => {
        onSelect?.(props);
        setIsOpen((prev) => !prev);
      }}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      popperProps={{ position: 'right' }}
      shouldFocusToggleOnSelect
      shouldFocusFirstItemOnOpen
      toggle={toggle}
    >
      {menuItems}
    </Dropdown>
  );
};

export default ChatbotConversationHistoryDropdown;