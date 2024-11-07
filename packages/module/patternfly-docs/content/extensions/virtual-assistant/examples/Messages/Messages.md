---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Messages
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: [
    'AttachMenu', 
    'AttachmentEdit', 
    'FileDetails', 
    'FileDetailsLabel', 
    'FileDropZone', 
    'PreviewAttachment',
    'Message',
    'PreviewAttachment',
    'ActionProps',
    'SourcesCardProps'
]
sortValue: 3
---

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import SourcesCard from '@patternfly/virtual-assistant/dist/dynamic/SourcesCard';
import { RobotIcon } from '@patternfly/react-icons/dist/esm/icons/robot-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import RedoIcon from '@patternfly/react-icons/dist/esm/icons/redo-icon';
import patternflyAvatar from './patternfly_avatar.jpg';
import userAvatar from './user_avatar.jpg';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import FileDetails from '@patternfly/virtual-assistant/dist/dynamic/FileDetails';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import { PreviewAttachment } from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import ChatbotAlert from '@patternfly/virtual-assistant/dist/dynamic/ChatbotAlert';

The `content` prop of the `<Message>` component is passed to a `<Markdown>` component (from [react-markdown](https://remarkjs.github.io/react-markdown/)), which is configured to translate plain text strings into PatternFly [`<Content>` components](/components/content) and code blocks into PatternFly [`<CodeBlock>` components.](/components/code-block)

## Messages

### Bot messages

Messages from the chatbot will be marked with an "AI" label to clearly communicate the use of AI to users. The chatbot can display different `content` types, including plain text, code, or a loading animation (via `isLoading`).

<br />

By default, a date and timestamp is displayed with each message. We recommend using the `timestamp` prop in real chatbots, since it will allow you to set persistent dates and times on messages, even if the messages re-render. You can update `timestamp` with a different [date and time format](/ux-writing/numerics) as needed.

```js file="./BotMessage.tsx"

```

### Messages actions

You can add actions to a message, to allow users to interact with the message content. These actions can include:

- Feedback responses that allow users to rate a message as "good" or "bad".
- Copy and share controls that allow users to share the message content with others.
- A listen action, that will read the message content out loud.

**Note:** The logic for the actions is not built into the component and must be implemented by the consuming application.

```js file="./MessageWithResponseActions.tsx"

```

### Custom message actions

Beyond the standard message actions (positive, negative, copy, share, or listen), you can add custom actions to a bot message by passing an `actions` object to the `<Message>` component. This object can contain the following customizations: `ariaLabel`, `onClick`, `className`, `isDisabled`, `tooltipContent`, `tooltipProps`, and `icon`.

```js file="./MessageWithCustomResponseActions.tsx"

```

### Messages with quick responses

You can offer convenient, clickable responses to messages in the form of quick actions. Quick actions are [PatternFly labels](/components/label/) in a label group, configured to display up to 5 visible labels.

To add quick actions, pass `quickResponses` to `<Message>`. This can be overridden by passing additional `<LabelGroup>` props to `quickResponseContainerProps`, or additional `<Label>` props to `quickResponses`.

```js file="./MessageWithQuickResponses.tsx"

```

### Messages with sources

If you are using Retrieval-Augmented Generation, you may want to display sources in a message. Passing `sources` to `<Message>` allows you to paginate between the sources you provide.

The API for a source requires a link at minimum, but we strongly recommend providing a more descriptive title and body description so users have enough context. The title is limited to 1 line and the body is limited to 2 lines.

```js file="./MessageWithSources.tsx"

```

### User messages

Messages from users have a different background color to differentiate them from bot messages. You can also display a custom avatar that is uploaded by the user.

```js file="./UserMessage.tsx"

```

## File attachments

### Messages with attachments

When [attachments](/patternfly-ai/chatbot/messages#file-attachments) are shared and displayed in the chatbot window, users will see a selectable and dismissible message that contains file details in a label. Selecting the file label can open a preview modal, which allows users to view or make edits to the file contents.

The `<PreviewAttachment>` component displays a modal with a read-only view of the attached file's contents. Selecting the "edit" button will open the `<AttachmentEdit>` component, which provides an interactive environment where users can make changes to the file.

If a `displayMode` is not passed to `<PreviewAttachment>` or `<AttachmentEdit>`, they both default to overlaying the default `displayMode` of the `<Chatbot>` component.

**Note:** This example does not actually apply any edits to the attached file. That logic depends on the implementation.

```js file="./MessageWithAttachment.tsx"

```

We are using [react-dropzone](https://react-dropzone.js.org) for opening the file dialog and handling drag and drop. It does not process files or provide any way to make HTTP requests to a server. If you need this, [react-dropzone](https://react-dropzone.js.org) suggests [filepond](https://pqina.nl/filepond/) or [uppy.io.](https://uppy.io/)

### Attachment label

When an attachment is successfully uploaded, a label will appear in the message box. There are several label variants that cover different attachment states, including:

- **Plain:** Default attachment labels, which display the filename and extension.
- **Closeable:** Attachments that can be dismissed.
- **Clickable:** Attachments that can be selected, typically to open file details.
- **Loading:** Attachments that are still being uploaded.

```js file="./FileDetailsLabel.tsx"

```

### Attachment preview

To allow users to preview the contents of an attachment, load a read-only view of the file contents in a new modal.

```js file="./PreviewAttachment.tsx"

```

### Editable attachments

To allow users to edit an attached file, load a new code editor within the chatbot window. On this screen, you can allow users to edit a file and save changes if they'd like. Return users to the main chatbot window once they dismiss the editor.

```js file="./AttachmentEdit.tsx"

```

### Failed attachment error

When an attachment upload fails, a [danger alert](/components/alert) is displayed to provide details about the reason for failure.

```js file="./AttachmentError.tsx"

```

### Attachment dropzone

An attachment dropzone allows users to upload files via drag and drop.

```js file="./FileDropZone.tsx"

```
