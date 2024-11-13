---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: UI
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: [
  'Chatbot',
  'ChatbotContent', 
  'MessageBox',
  'ChatbotWelcomePrompt',
  'WelcomePrompt',
  'ChatbotToggle',
  'ChatbotHeader',
  'ChatbotHeaderMain',
  'ChatbotHeaderMenu',
  'ChatbotHeaderActions',
  'ChatbotHeaderTitle',
  'ChatbotHeaderOptionsDropdown',
  'ChatbotHeaderSelectorDropdown',
  'ChatbotFooter',
  'MessageBar',
  'ChatbotFootnote',
  'ChatbotFootnotePopover',
  'ChatbotFootnotePopoverCTA',
  'ChatbotFootnotePopoverBannerImage',
  'ChatbotFootnotePopoverLink',
  'MessageBarWithAttachMenuProps',
  'SourceDetailsMenuItem',
  'ChatbotConversationHistoryNav', 
  'Conversation'
]
sortValue: 2
---

import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import FileDetails from '@patternfly/virtual-assistant/dist/dynamic/FileDetails';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import { PreviewAttachment } from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import ChatbotAlert from '@patternfly/virtual-assistant/dist/dynamic/ChatbotAlert';
import {
ChatbotHeader,
ChatbotHeaderMain,
ChatbotHeaderMenu,
ChatbotHeaderActions,
ChatbotHeaderTitle,
ChatbotHeaderOptionsDropdown,
ChatbotHeaderSelectorDropdown
} from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';
import { ChatbotFooter, ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import { MessageBar } from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import SourceDetailsMenuItem from '@patternfly/virtual-assistant/dist/dynamic/SourceDetailsMenuItem';
import { BellIcon, CalendarAltIcon, ClipboardIcon, CodeIcon, UploadIcon } from '@patternfly/react-icons';
import { useDropzone } from 'react-dropzone';

import ChatbotConversationHistoryNav from '@patternfly/virtual-assistant/dist/dynamic/ChatbotConversationHistoryNav';
import { DropdownItem, DropdownList, Checkbox } from '@patternfly/react-core';

import OutlinedWindowRestoreIcon from '@patternfly/react-icons/dist/esm/icons/outlined-window-restore-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import OpenDrawerRightIcon from '@patternfly/react-icons/dist/esm/icons/open-drawer-right-icon';
import PFHorizontalLogoColor from './PF-HorizontalLogo-Color.svg';
import PFHorizontalLogoReverse from './PF-HorizontalLogo-Reverse.svg';

## Structure

### Container

The PatternFly chatbot is a separate window that overlays or is embedded within other UI content. This container can be shown and hidden via [the chatbot toggle.](/patternfly-ai/chatbot/ui#toggle)

The `<Chatbot>` component is the container that encompasses the chatbot experience. It adapts to various display modes (overlay/default, docked, fullscreen, and embedded) and supports both light and dark themes.

The "embedded" display mode is meant to be used within a [PatternFly page](/components/page) or other container within your product.

```js file="./ChatbotContainer.tsx" isFullscreen

```

### Content and message box

The `<ChatbotContent>` component is the container that is placed within the `<Chatbot>`, between the [`<ChatbotHeader>`](/patternfly-ai/chatbot/ui#header) and [`<ChatbotFooter>`.](/patternfly-ai/chatbot/ui#footer)
<br />
<br />
`<ChatbotContent>` usually contains a `<ChatbotMessageBox>` for displaying messages.
<br />
<br />
Your code structure should look like this:

```noLive
<Chatbot>
  <ChatbotHeader ... />
  <ChatbotContent>
    <ChatbotMessageBox>
    ...
    <ChatbotMessageBox>
  </ChatbotContent>
  <ChatbotFooter ... />
</Chatbot>
```

**Note**: When messages update, it is important to announce new messages to users of assistive technology. To do this, make sure to set the `announcement` prop on `<MessageBox>` whenever you display a new message in `<MessageBox>`. You can view this in action in our [basic chatbot](/patternfly-ai/chatbot/overview/demo#basic-chatbot) and [embedded chatbot](/patternfly-ai/chatbot/overview/demo#embedded-chatbot) demos.

### Welcome prompt

To introduce users to the chatbot experience, a welcome prompt can fill the message box before they input their first message. This brief message should follow our [conversation design guidelines](/patternfly-ai/conversation-design) to welcome users to the chatbot experience and encourage them to interact.

To provide users with a more specific direction, you can also include optional welcome prompts.

```js file="./ChatbotWelcomePrompt.tsx"

```

### Skip to content

To provide page context, we recommend using a "skip to chatbot" button. This allows you to skip past other content on the page, directly to the chatbot content, using a [PatternFly skip to content component](/components/skip-to-content). To display this button, you must tab into the main window.
<br />
<br />
When using default or docked modes, we recommend putting focus on the toggle if the chatbot is closed, and the chatbot when it is open. For fullscreen and embedded, we recommend putting the focus on the first focusable item in the chatbot, such as a menu toggle. This can be seen in our more fully-featured demos for the [default, embedded, and fullscreen chatbot](patternfly-ai/chatbot/overview/demo#basic-chatbot) and the [embedded chatbot](/patternfly-ai/chatbot/overview/demo#embedded-chatbot).

```js file="./SkipToContent.tsx" isFullscreen

```

## Toggle

### Basic toggle

To allow users to open and close the chatbot window as needed, add a toggle.

```js file="./ChatbotToggleBasic.tsx" isFullscreen

```

### Custom toggle icon

A custom icon can be passed to the toggle. To ensure the icon is visible in both light and dark themes, use an SVG image and set `fill="currentColor"`.

```js file="./CustomClosedIcon.tsx" isFullscreen

```

## Header

### Header sections

The chatbot header is persistent, and contains the title for the chatbot window, as well as any related controls and actions.

The `<ChatbotHeader>` has 2 sections:

- `<ChatbotHeaderMain>` contains the title and an optional menu toggle:
  - `<ChatbotHeaderTitle>` handles the layout and display of a title or image at different responsive sizes.
  - `<ChatbotHeaderMenu>` (optional) is placed on the left side of the header and used to toggle a chat history menu.
- `<ChatbotHeaderActions>` contains any additional controls:
  - The `<ChatbotHeaderSelectorDropdown>` component is a standard PatternFly dropdown that matches the chatbot styles.
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

### Header title

By default, `<HeaderTitle>` renders any children that are passed in. Optionally, you can pass in a `displayMode`, `showOnEmbedded`, `showOnDocked`, `showOnFullScreen`, and/or `showOnDefault` to render content conditionally.

```js file="./ChatbotHeaderTitle.tsx"

```

### Header options

There are a variety of options and customizations you can make to the header, to adjust how information is displayed, or to add additional controls.

In this example, select the respective checkbox to toggle these features:

- **Menu:** Users can select the menu toggle to open a menu of additional options or actions.
- **Left-aligned logo**
- **Centered logo**
- **Selector dropdown:** Users can choose from preselected options in a dropdown menu. For example, they can toggle between AI models.
- **Options dropdown:** Users can select chatbot options from a menu. For example, they can switch between chatbot display modes.

```js file="./ChatbotHeaderBasic.tsx"

```

## Footer

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

Attachments can also be added to the chatbot via [drag and drop.](/patternfly-ai/chatbot/messages#attachment-dropzone)

```js file="./ChatbotMessageBarAttach.tsx"

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

### Message bar with stop button

If you are using streaming, you can add a stop button to the message bar that allows users to stop a response from a chatbot.

To enable the stop button, set `hasStopButton` to `true` and pass in a `handleStopButton` callback function. You can use this callback to trigger an [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) configured as part of your API call.

```js file="./ChatbotMessageBarStop.tsx"

```

## Navigation

### Side nav in a drawer
The chatbot conversation history is contained in an interactive drawer, where users can interact with previous conversations or start a new conversation.

The `<ChatbotConversationHistoryNav>` component is a wrapper placed within `<Chatbot>`, which contains all other chatbot components in `drawerContent`. There is a focus trap so users can only tab within the drawer while it is open.

The code structure will look like this:

```noLive
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

The conversation history drawer looks different depending on the `displayMode` of the parent `<Chatbot>`. (As shown in the [main chatbot demo](/patternfly-ai/chatbot/overview/demo#basic-chatbot).):

- `Default` and `docked` display modes display the conversation history on top of the rest of the chatbot content, with a PatternFly backdrop between the drawer panel and drawer content.
- `Fullscreen` and `embedded` display modes display the conversation history in line with the drawer content.

### Drawer with search and "new chat" button

In the conversation history drawer, users can search previous chatbot conversations via an input field. To customize the placeholder text, use `searchInputPlaceholder`. Provide an aria label via `searchInputAriaLabel`.

They can also start new conversations via a "New chat" button. To customize the button label, use `newChatButtonText`.

Both the search input field and "New chat" buttons are optional.

```js file="./ChatbotHeaderDrawer.tsx"

```

### Drawer with conversation actions

Actions can be added to conversations with `menuItems`. Optionally, you can also add a `className` to the menu via `menuClassName`, change the default aria-label and tooltip content via `label`, or add an `onSelect` callback for when a user selects an item.

```js file="./ChatbotHeaderDrawerWithActions.tsx"

```
