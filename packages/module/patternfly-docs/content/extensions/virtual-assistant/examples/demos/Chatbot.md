---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly AI
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

import ChatbotHeader, {
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

### Basic chatbot

```js file="./Chatbot.tsx" isFullscreen

```
