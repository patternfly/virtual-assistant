---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot conversation history nav
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['ChatbotConversationHistoryNav', 'Conversation']
---

import { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotConversationHistoryNav from '@patternfly/virtual-assistant/dist/dynamic/ChatbotConversationHistoryNav';
import {
ChatbotHeader,
ChatbotHeaderMain,
ChatbotHeaderMenu,
ChatbotHeaderTitle,
} from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';
import { DropdownItem, DropdownList, Checkbox } from '@patternfly/react-core';
import { ChatbotContent } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';

The `<ChatbotConversationHistoryNav>` component is a wrapper placed within the `<Chatbot>`. It contains all other chatbot components in its `drawerContent` prop. `<ChatbotConversationHistoryNav>` creates a drawer that can be used to view and interact with conversation history, as well as start a new conversation. There is a focus trap so users can only tab within the drawer while it is open.

```
<Chatbot>
  <ChatbotConversationHistoryNav
    ...
    drawerContent={
        <>
            <ChatbotContent>
                <ChatbotMessageBox>
                ...
                <ChatbotMessageBox>
            </ChatbotContent>
            <ChatbotFooter ... />
        </>
    }>
  </ChatbotConversationHistoryNav>
</Chatbot>
```

It changes based on the displayMode of the parent Chatbot:

- Default and docked are on top of the content and have a PatternFly backdrop between the drawer panel and drawer content
- Fullscreen and embedded are inline with the drawer content

These states can be viewed in the [main chatbot demo](/patternfly-ai/chatbot/chatbot/react-demos#basic-chatbot).

### Drawer with search and "new chat" button

Conversations can be searched via an input field, and new conversations can be started via a "New chat" button. The input field and "New chat" button are both optional and configurable with props.

```js file="./ChatbotHeaderDrawer.tsx"

```

### Drawer with conversation actions

Actions can be added to conversations with the `menuItems` prop. Optionally, you can also add a className to the menu with `menuClassName`, change the default aria-label and tooltip content with `label`, and add an `onSelect` callback for when a user selects an item.

```js file="./ChatbotHeaderDrawerWithActions.tsx"

```

### Drawer in header

This example illustrates how to use `aria-expanded` and the `<ChatbotHeaderMenu>` with the drawer.

```js file="./ChatbotHeaderDrawerInHeader.tsx"

```
