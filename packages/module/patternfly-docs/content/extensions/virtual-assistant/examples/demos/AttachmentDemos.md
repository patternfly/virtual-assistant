---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot attachments
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react-demos
sourceLink: https://github.com/patternfly/virtual-assistant/blob/main/packages/module/patternfly-docs/content/extensions/virtual-assistant/examples/demos/demos.md
---

import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import ChatbotFooter, { ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import MessageBar from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import SourceDetailsMenuItem from '@patternfly/virtual-assistant/dist/dynamic/SourceDetailsMenuItem';
import PreviewAttachment from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import { BellIcon, CalendarAltIcon, ClipboardIcon, CodeIcon, UploadIcon } from '@patternfly/react-icons';
import { useDropzone } from 'react-dropzone';
import PFHorizontalLogoColor from '../ChatbotHeader/PF-HorizontalLogo-Color.svg';
import PFHorizontalLogoReverse from '../ChatbotHeader/PF-HorizontalLogo-Reverse.svg';
import ChatbotHeader, {
ChatbotHeaderMenu,
ChatbotHeaderMain,
ChatbotHeaderTitle,
ChatbotHeaderActions,
ChatbotHeaderSelectorDropdown,
ChatbotHeaderOptionsDropdown
} from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';
import ChatbotAlert from '@patternfly/virtual-assistant/dist/dynamic/ChatbotAlert';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import OpenDrawerRightIcon from '@patternfly/react-icons/dist/esm/icons/open-drawer-right-icon';
import OutlinedWindowRestoreIcon from '@patternfly/react-icons/dist/esm/icons/outlined-window-restore-icon';
import PFIconLogoColor from '../ChatbotHeader/PF-IconLogo-Color.svg';
import PFIconLogoReverse from '../ChatbotHeader/PF-IconLogo-Reverse.svg';

# Demos

### Attach via upload button in message bar

The unique features demonstrated in this demo include:
This demo displays unique attachment features, including:
1. [`<ChatbotContent>` and `<MessageBox>`](/patternfly-ai/chatbot/chatbot#chatbot-content-and-message-box) components that contain:
- An initial [user `<Message>`](/patternfly-ai/chatbot/chatbot-messages/#user-messages) with an attachment.
- The ability to preview or edit the attachment using the [`<PreviewAttachment>` and `<AttachmentEdit>` components.](patternfly-ai/chatbot/chatbot-messages/#messages-with-attachments)
- A PatternFly [`<Alert>`](/components/alert) to provide success or error messages for attachments.
2. `<ChatbotContent>` and `<ChatbotFooter>`, wrapped in a `<FileDropZone>` component to support drag and drop attachments. The footer also:
- Displays attached files, using a [`<FileDetailsLabel>`](patternfly-ai/chatbot/chatbot-attachments#interactive-chip-representing-uploading-file) component.
- Demonstrates custom handling of file uploads, using the `handleAttach` in `<MessageBar>` and `handleFileDrop` in `<FileDropZone>`.

This demo includes broader chatbot features, including:
1. A [`<ChatbotToggle>`](/patternfly-ai/chatbot/chatbot-toggle) that controls the [`<Chatbot>`](/patternfly-ai/chatbot/chatbot) container.
2. A [`<ChatbotHeader>`](/patternfly-ai/chatbot/chatbot-header) that updates based on the display mode, with sub-components (including a `<ChatbotHeaderTitle>`).
3. The ability to swap display modes via the `<ChatbotHeaderOptionsDropdown>`
4. A `<ChatbotContent>` and [`<MessageBox>`](/patternfly-ai/chatbot/chatbot#chatbot-content-and-message-box) with:
- A `<ChatbotWelcomePrompt>`
- The ability to preview or edit the attachment.
- An initial bot message
- Logic for enabling auto-scrolling to the most recent message, whenever a new message is sent or received using `scrollToBottomRef`
5. A [`<ChatbotFooter>`](/patternfly-ai/chatbot/chatbot-footer) with a [`<ChatbotFootNote>`](/patternfly-ai/chatbot/chatbot-footer#footnote-with-popover) and a `<MessageBar>`

```js file="./ChatbotAttachment.tsx" isFullscreen

```

### Attach via menu of options in message bar

The unique features demonstrated in this demo include:
- The `<ChatbotContent>` and [`<MessageBox>`](/patternfly-ai/chatbot/chatbot#chatbot-content-and-message-box) components are housing:
  1. the ability to preview or edit the attachment using the `<PreviewAttachment>` and `<AttachmentEdit>` components
  2. a PatternFly [`<Alert>`](/components/alert) to provide success or error messages for attachments.
- The `<ChatbotContent>` and `<ChatbotFooter>` wrapped in a a `<FileDropZone>` component to enable attachments to be dragged into the chatbot.
  1. displaying attached files in the footer using a [`<FileDetailsLabel>`](patternfly-ai/chatbot/chatbot-attachments#interactive-chip-representing-uploading-file) component
  2. how to define the `attachMenuProps` in the `<MessageBar>` to create a menu for selecting the source of the item to attach to the chatbot conversation.

In addition to the unique features, this demo also includes:
- The [`<ChatbotToggle>`](/patternfly-ai/chatbot/chatbot-toggle) being able to toggle to the [`<Chatbot>`](/patternfly-ai/chatbot/chatbot) container.
- The `<ChatbotContent>` and [`<MessageBox>`](/patternfly-ai/chatbot/chatbot#chatbot-content-and-message-box) components are housing:
  1. an implemented `<ChatbotWelcomePrompt>`
  2. the ability to preview or edit the attachment using the `<PreviewAttachment>` and `<AttachmentEdit>` components
  3. an initial user message and an initial bot message 
  4. logic for enabling auto-scrolling to the most recent message whenever a new message is sent or received using a `scrollToBottomRef`
- A [`<ChatbotFooter>`](/patternfly-ai/chatbot/chatbot-footer) housing a [`<ChatbotFootNote>`](/patternfly-ai/chatbot/chatbot-footer#footnote-with-popover) and a `<MessageBar>`

```js file="./ChatbotAttachmentMenu.tsx" isFullscreen

```
