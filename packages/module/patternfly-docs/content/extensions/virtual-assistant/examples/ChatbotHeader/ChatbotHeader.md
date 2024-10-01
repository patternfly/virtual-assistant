---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot header
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents:
  [
    'ChatbotHeader',
    'ChatbotHeaderMain',
    'ChatbotHeaderMenu',
    'ChatbotHeaderActions',
    'ChatbotHeaderTitle',
    'ChatbotHeaderOptionsDropdown',
    'ChatbotHeaderSelectorDropdown'
  ]
---

import {
ChatbotHeader,
ChatbotHeaderMain,
ChatbotHeaderMenu,
ChatbotHeaderActions,
ChatbotHeaderTitle,
ChatbotHeaderOptionsDropdown,
ChatbotHeaderSelectorDropdown
} from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';
import {
ChatbotDisplayMode
} from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import OutlinedWindowRestoreIcon from '@patternfly/react-icons/dist/esm/icons/outlined-window-restore-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import OpenDrawerRightIcon from '@patternfly/react-icons/dist/esm/icons/open-drawer-right-icon';
import PFHorizontalLogoColor from './PF-HorizontalLogo-Color.svg';
import PFHorizontalLogoReverse from './PF-HorizontalLogo-Reverse.svg';

### Header sections

The chatbot header is persistent, and contains the title for the chatbot window, as well as any related controls and actions.
The `<ChatbotHeader>` has 2 sections:
- `<ChatbotHeaderMain>`: Contains the title and an optional menu toggle
  - `<ChatbotHeaderTitle>` handles the layout and display of a title or image at different responsive sizes.
  - `<ChatbotHeaderMenu>` (optional) is placed on the left side of the header and used to toggle a chat history menu.
- `<ChatbotHeaderActions>`: Contains any additional controls.
  - The `<ChatbotHeaderSelectorDropdown>` component is a standard PatternFly dropdown that is matches the chatbot styles.
  - The `<ChatbotHeaderOptionsDropdown>` component is a dropdown with a menu toggle that is intended to be used to update chatbot settings (like the display mode).

Your `<ChatbotHeader>` code structure should look like this:
```noLive
<ChatbotHeader>
  <ChatbotHeaderMain>
    <ChatbotHeaderMenu ... />
    <ChatbotHeaderTitle ... />
  </ChatbotHeaderMain>
  <ChatbotHeaderActions>
    <ChatbotHeaderSelectorDropdown ... />
    <ChatbotHeaderOptionsDropdown ... />
  </ChatbotHeaderActions>
</ChatbotHeader>
```

### Header controls

```js file="./ChatbotHeaderBasic.tsx"

```

### Header title

By default, HeaderTitle renders whatever children are passed in. Optionally, you can pass in a displayMode and props showOnEmbedded, showOnDocked, showOnFullScreen, and/or showOnDefault to render content conditionally.

```js file="./ChatbotHeaderTitle.tsx"

```
