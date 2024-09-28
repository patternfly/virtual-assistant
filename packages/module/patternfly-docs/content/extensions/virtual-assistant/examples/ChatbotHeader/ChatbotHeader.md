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

### Overall structure

The header of the chatbot has two primary sections, the `<ChatbotHeaderMain>` and the `<ChatbotHeaderActions>`.
- The `<ChatbotHeaderMain>` can have an optional menu on the left to toggle open and closed a chat history menu. It can also have a `<ChatbotHeaderTitle>` which handles the layout and display of a title or image at different responsive sizes.
- The `<ChatbotHeaderActions>` can be passed any controls to the header. Specifically, the `<ChatbotHeaderSelectorDropdown>` is a standard PatternFly dropdown styled to match the chatbot styles. The `<ChatbotHeaderOptionsDropdown>` is a dropdown with a kebab toggle. It is intended to be used to update the settings of the chatbot such as the display mode.

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

### Chatbot header with controls

```js file="./ChatbotHeaderBasic.tsx"

```

### Chatbot header title

By default, HeaderTitle renders whatever children are passed in. Optionally, you can pass in a displayMode and props showOnEmbedded, showOnDocked, showOnFullScreen, and/or showOnDefault to render content conditionally.

```js file="./ChatbotHeaderTitle.tsx"

```
