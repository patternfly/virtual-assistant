---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot footer
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
    'MessageBarWithAttachMenuProps',
    'SourceDetailsMenuItem'
  ]
---

import { ChatbotFooter, ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import { MessageBar } from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import SourceDetailsMenuItem from '@patternfly/virtual-assistant/dist/dynamic/SourceDetailsMenuItem';
import { BellIcon, CalendarAltIcon, ClipboardIcon, CodeIcon, UploadIcon } from '@patternfly/react-icons';
import { useDropzone } from 'react-dropzone';

### Footnote with popover

A footnote can be placed in a chatbot footer to display any legal disclaimers or information about the chatbot.
Footnotes can be static text or a button which triggers a popover.

```js file="./ChatbotFootnote.tsx"

```

### Message bar with speech to text

In Safari and Chrome, you will see a microphone button in the message bar if the prop `hasMicrophoneButton` is passed in. The button will only appear if `'SpeechRecognition'` or `'webkitSpeechRecognition'` are available in `window`. This does not currently work in Firefox. By default the message bar enables uploading files. Setting the `hasAttachButton` to `false` will disable that feature.

```js file="./ChatbotMessageBar.tsx"

```

### Message bar with attach menu appended to attach button

Depending on the implementation, the event handlers attached to the `attachMenuItems` within the `<MessageBar>`'s `attachMenuProps` prop could trigger a variety of side effects. For example, selecting a menu item could open a modal of more options, could navigate to a particular page, or could drill down into a sub menu.
<br/>
<br/>
Attachments can also be added to the chatbot via drag and drop. Attachments can also be previewed, edited or deleted. See the [chatbot attachment](/patternfly-ai/chatbot/chatbot-attachment) documentation for more features.

```js file="./ChatbotMessageBarAttach.tsx"

```

### Simple footer with Message bar and footnote

Footers contain the message bar and optional interactive footnote

```noLive
<ChatbotFooter>
  <MessageBar ... />
  <ChatbotFootnote .../>
</ChatbotFooter>
```

```js file="./ChatbotFooter.tsx"

```
