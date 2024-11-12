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
sortValue: 5
---

import { ChatbotFooter, ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import { MessageBar } from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import SourceDetailsMenuItem from '@patternfly/virtual-assistant/dist/dynamic/SourceDetailsMenuItem';
import { BellIcon, CalendarAltIcon, ClipboardIcon, CodeIcon, UploadIcon } from '@patternfly/react-icons';
import { useDropzone } from 'react-dropzone';

### Footnote with popover

A footnote can be placed in the chatbot footer to communicate any legal disclaimers or information about the chatbot.
Footnotes can be static text or a button that opens a popover.

```js file="./ChatbotFootnote.tsx"

```

### Message bar with speech recognition and file attachment

In Safari and Chrome, you will see a microphone button in the message bar if `hasMicrophoneButton` is passed to `<MessageBar>`. The button will only appear if `'SpeechRecognition'` or `'webkitSpeechRecognition'` are available in `window`. This does not currently work in Firefox.

By default the message bar supports file uploads via an attach button. Setting `hasAttachButton` to `false` will disable that feature.

```js file="./ChatbotMessageBar.tsx"

```

### Message bar with attach menu appended to attach button

You can change the behavior of the attach button to open a menu, rather than the default file viewer for your operating system. This menu can display different actions related to attachments.

Attachments can also be added to the chatbot via [drag and drop.](/patternfly-ai/chatbot/chatbot-attachments#attachment-dropzone)

```js file="./ChatbotMessageBarAttach.tsx"

```

### Message bar with stop button

If you are using streaming, you can add a stop button to the message bar that allows users to stop a response from a chatbot.

To enable the stop button, set `hasStopButton` to `true` and pass in a `handleStopButton` callback function. You can use this callback to trigger an [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) configured as part of your API call.

```js file="./ChatbotMessageBarStop.tsx"

```

### Footer with message bar and footnote

A simple footer with a message bar and footnote would have this code structure:

```noLive
<ChatbotFooter>
  <MessageBar ... />
  <ChatbotFootnote .../>
</ChatbotFooter>
```

```js file="./ChatbotFooter.tsx"

```
