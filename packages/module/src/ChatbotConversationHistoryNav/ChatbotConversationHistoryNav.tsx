// ============================================================================
// Chatbot Header - Chatbot Conversation History Nav
// ============================================================================
import React from 'react';

// Import PatternFly components
import {
  Button,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerPanelBody,
  DrawerProps,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerContentBody,
  SearchInput,
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuContent
} from '@patternfly/react-core';

import { OutlinedCommentAltIcon } from '@patternfly/react-icons';
import { ChatbotDisplayMode } from '../Chatbot/Chatbot';
import ConversationHistoryDropdown from './ChatbotConversationHistoryDropdown';

export interface Conversation {
  /** Conversation id */
  id: string;
  /** Connversation icon */
  icon?: React.ReactNode;
  /** Conversation */
  text: string;
  /** Dropdown items rendered in conversation options dropdown */
  menuItems?: React.ReactNode;
  /** Optional classname applied to conversation options dropdown */
  menuClassName?: string;
  /** Tooltip content and aria-label applied to conversation options dropdown */
  label?: string;
  /** Callback for when user selects item. */
  onSelectItem?: (event?: React.MouseEvent, value?: string | number) => void;
}
export interface ChatbotConversationHistoryNavProps extends DrawerProps {
  /** Function called to toggle drawer */
  onDrawerToggle: (event: React.KeyboardEvent | React.MouseEvent | React.TransitionEvent) => void;
  /** Flag to indicate whether drawer is open */
  isDrawerOpen: boolean;
  /** ID of active item */
  activeItemId: string | number;
  /** Callback function for when an item is selected */
  onSelectActiveItem?: (event?: React.MouseEvent, itemId?: string | number) => void;
  /** Items shown in conversation history */
  conversations: Conversation[] | { [key: string]: Conversation[] };
  /** Text shown in blue button */
  newChatButtonText?: string;
  /** Callback function for when blue button is clicked */
  onNewChat?: () => void;
  /** Content wrapped by conversation history nav */
  drawerContent?: React.ReactNode;
  /** Placeholder for search input */
  searchInputPlaceholder?: string;
  /** A callback for when the input value changes. */
  handleTextInputChange?: (value: string) => void;
  /** Display mode of chatbot */
  displayMode: ChatbotDisplayMode;
}

export const ChatbotConversationHistoryNav: React.FunctionComponent<ChatbotConversationHistoryNavProps> = ({
  onDrawerToggle,
  isDrawerOpen,
  activeItemId,
  onSelectActiveItem,
  conversations,
  newChatButtonText = 'New chat',
  drawerContent,
  onNewChat,
  searchInputPlaceholder,
  handleTextInputChange,
  displayMode,
  ...props
}: ChatbotConversationHistoryNavProps) => {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const getNavItem = (conversation: Conversation) => (
    <MenuItem
      className="pf-chatbot__menu-item"
      itemId={conversation.id}
      key={conversation.id}
      icon={conversation.icon ?? <OutlinedCommentAltIcon />}
      /* eslint-disable indent */
      {...(conversation.menuItems
        ? {
            actions: (
              <ConversationHistoryDropdown
                menuClassName={conversation.menuClassName}
                onSelectItem={conversation.onSelectItem}
                menuItems={conversation.menuItems}
                label={conversation.label}
              />
            )
          }
        : {})}
      /* eslint-enable indent */
    >
      {conversation.text}
    </MenuItem>
  );

  const buildMenu = () => {
    if (Array.isArray(conversations)) {
      // Render for array of MenuItemObject
      return (
        <MenuList>
          {conversations.map((conversation) => (
            <React.Fragment key={conversation.id}>{getNavItem(conversation)}</React.Fragment>
          ))}
        </MenuList>
      );
    } else {
      // Render for object with NavItemObject arrays as values
      return (
        <>
          {Object.keys(conversations).map((navGroup) => (
            <MenuGroup className="pf-chatbot__menu-item-header" label={navGroup} key={navGroup}>
              <MenuList>
                {conversations[navGroup].map((conversation) => (
                  <React.Fragment key={conversation.id}>{getNavItem(conversation)}</React.Fragment>
                ))}
              </MenuList>
            </MenuGroup>
          ))}
        </>
      );
    }
  };

  // Menu Content
  // - Consumers should pass an array to <Chatbot> of the list of conversations
  // - Groups could be optional, but items need to be ordered by date
  const menuContent = (
    <Menu isPlain onSelect={onSelectActiveItem} activeItemId={activeItemId}>
      <MenuContent>{buildMenu()}</MenuContent>
    </Menu>
  );

  const panelContent = (
    <DrawerPanelContent focusTrap={{ enabled: true }} minSize="384px" maxSize="384px">
      <DrawerHead>
        <DrawerActions>
          <DrawerCloseButton onClick={onDrawerToggle} />
          <Button onClick={onNewChat}>{newChatButtonText}</Button>
        </DrawerActions>
      </DrawerHead>
      {handleTextInputChange && (
        <div className="pf-chatbot__input">
          <SearchInput
            aria-label="Filter menu items"
            onChange={(_event, value) => handleTextInputChange(value)}
            placeholder={searchInputPlaceholder ?? 'Search...'}
          />
        </div>
      )}
      <DrawerPanelBody>{menuContent}</DrawerPanelBody>
    </DrawerPanelContent>
  );

  // An onKeyDown property must be passed to the Drawer component to handle closing
  // the drawer panel and deactivating the focus trap via the Escape key.
  const onEscape = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onDrawerToggle(event);
    }
  };

  // Prevent 'Escape' key usage in main chatbot from toggling drawer; only panel content should work
  const onChildKeyDown = (event: React.KeyboardEvent) => {
    event.stopPropagation();
  };

  return (
    <Drawer
      className="pf-chatbot__history"
      isExpanded={isDrawerOpen}
      onExpand={onExpand}
      position="start"
      onKeyDown={onEscape}
      isInline={displayMode === ChatbotDisplayMode.fullscreen || displayMode === ChatbotDisplayMode.embedded}
      {...props}
    >
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody onKeyDown={onChildKeyDown}>
          {isDrawerOpen && (displayMode === ChatbotDisplayMode.default || displayMode === ChatbotDisplayMode.docked) ? (
            <>
              <div className="pf-v6-c-backdrop pf-chatbot__drawer-backdrop"></div>
              {drawerContent}
            </>
          ) : (
            drawerContent
          )}
        </DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatbotConversationHistoryNav;
