---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Chat bots / AI
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot Footer
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents:
  [
    'ChatbotFooter',
    'MessageBar',
    'ChatbotFootnote',
    'ChatbotFootnotePopover',
    'ChatbotFootnotePopoverCTA',
    'ChatbotFootnotePopoverBannerImage',
    'ChatbotFootnotePopoverLink',
    'MessageBarWithAttachMenuProps'
  ]
---

import { ChatbotFooter, ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import { MessageBar } from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';

### Basic example

```js file="./ChatbotFooter.tsx"

```
