---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot messages
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
propComponents: [
'Message',
'PreviewAttachment',
'AttachmentEdit',
'ActionProps'
]
---

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import PreviewAttachment from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import customImage from './custom_user_img.jpeg';
import { RobotIcon } from '@patternfly/react-icons/dist/esm/icons/robot-icon';

## Messages

The `content` prop of the Message component is passed to a `<Markdown>` component from [react-markdown](https://remarkjs.github.io/react-markdown/). The `<Markdown>` is configured to translate plain text strings into PatternFly [`<Content>`](/components/content) components and code blocks into PatternFly [`<CodeBlock>`](/components/code-block) components.

### Bot messages
```js file="./BotMessage.tsx"

```

### User messages
```js file="./UserMessage.tsx"

```

### Messages with attachments
If a `displayMode` is not passed to the `<PreviewAttachment>` or `<AttachmentEdit>` components, they both default to overlaying the default `displayMode` of the `<Chatbot>` component.

This example does not persist any updates to the attachment in the example. That logic depends on the implementation.

```js file="./MessageWithAttachment.tsx"

```

### Messages with feedback response actions

```js file="./MessageWithResponseActions.tsx"

```

