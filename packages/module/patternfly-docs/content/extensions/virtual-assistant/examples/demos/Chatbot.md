---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react-demos
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents:
  [
    'Chatbot',
    'ChatbotToggle',
    'ChatbotContent',
    'ChatbotWelcomePrompt',
    'ChatbotFooter',
    'MessageBar',
    'ChatbotFootnote',
    'MessageBox',
    'Message',
    'MessageBarWithAttachMenuProps'
  ]
---

import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import ChatbotFooter, { ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import MessageBar from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import ChatbotConversationHistoryNav from '@patternfly/virtual-assistant/dist/dynamic/ChatbotConversationHistoryNav';

import ChatbotHeader, {
ChatbotHeaderMain,
ChatbotHeaderMenu,
ChatbotHeaderTitle,
ChatbotHeaderActions,
ChatbotHeaderSelectorDropdown,
ChatbotHeaderOptionsDropdown
} from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';

import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import OpenDrawerRightIcon from '@patternfly/react-icons/dist/esm/icons/open-drawer-right-icon';
import OutlinedWindowRestoreIcon from '@patternfly/react-icons/dist/esm/icons/outlined-window-restore-icon';
import PFHorizontalLogoColor from '../ChatbotHeader/PF-HorizontalLogo-Color.svg';
import PFHorizontalLogoReverse from '../ChatbotHeader/PF-HorizontalLogo-Reverse.svg';
import PFIconLogoColor from '../ChatbotHeader/PF-IconLogo-Color.svg';
import PFIconLogoReverse from '../ChatbotHeader/PF-IconLogo-Reverse.svg';

### Basic chatbot

This demo displays a basic chatbot, which includes:
1. The [`<ChatbotToggle>`](/patternfly-ai/chatbot/chatbot-toggle) that controls the [`<Chatbot>`](/patternfly-ai/chatbot/chatbot) container.
2. A [`<ChatbotHeader>`](/patternfly-ai/chatbot/chatbot-header) with all built sub-components laid out, including a `<ChatbotHeaderTitle>` that changes its presentation depending on the display mode.
3. The ability to swap display modes via `<ChatbotHeaderOptionsDropdown>`
4. [`<ChatbotContent>` and `<MessageBox>`](/patternfly-ai/chatbot/chatbot#chatbot-content-and-message-box) with:
- A `<ChatbotWelcomePrompt>`
- An initial [user `<Message>`](/patternfly-ai/chatbot/chatbot-messages) and an initial bot message with [response actions.](/patternfly-ai/chatbot/chatbot-messages/#messages-actions)
- Logic for enabling auto-scrolling to the most recent message whenever a new message is sent or received using a `scrollToBottomRef`
5. A [`<ChatbotFooter>`](/patternfly-ai/chatbot/chatbot-footer) with a [`<ChatbotFootNote>`](/patternfly-ai/chatbot/chatbot-footer#footnote-with-popover) and a `<MessageBar>` that contains the abilities of:
- [Speech to text.](/patternfly-ai/chatbot/chatbot-footer#message-bar-with-speech-to-text)
- Sending a message to the chatbot.
- Receiving a response from a backend AI tool with a loading message state.
6. A [`<ChatbotConversationHistoryNav>`](/patternfly-ai/chatbot/chatbot-conversation-history-nav) toggled open and closed by the `<ChatbotHeaderMenu`> in the `<ChatbotHeader>`.

```js file="./Chatbot.tsx" isFullscreen

```
