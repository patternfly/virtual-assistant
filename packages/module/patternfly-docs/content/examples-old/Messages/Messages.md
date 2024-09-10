---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Chat bots / AI
# Sidenav secondary level section
# should be the same for all markdown files
id: Messages
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['UserMessageEntry', 'AssistantMessageEntry', 'LoadingMessage', 'SystemMessageEntry',]
sourceLink: https://github.com/patternfly/virtual-assistant/blob/main/packages/module/patternfly-docs/content/extensions/virtual-assistant/examples/Messages/Messages.md
---

import SystemMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/SystemMessageEntry';
import LoadingMessage from '@patternfly/virtual-assistant/dist/dynamic/LoadingMessage';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import UserMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/UserMessageEntry';
import { GrinIcon } from '@patternfly/react-icons';
import { AngleDownIcon } from '@patternfly/react-icons';


### System Message Entry

The `SystemMessageEntry` component provides a simple system message with an option for text links.


```js file="./VirtualAssistantSystemMessageEntry.tsx"

```

### Loading Messages

The `LoadingMessage` component shows a typing indicator for messages still being processed, introducing an intentional delay to simulate a smoother flow of conversation. Additionally, it allows for the use of a custom icon through the `icon` property.


```js file="./VirtualAssistantLoadingMessage.tsx"

```

### Assistant Message

This is an example of a message sent by assistant. Additionally, it allows for the use of a custom icon through the `icon` property.

```js file="./AssistantMessage.tsx"

```

### Assistant Message with follow-up options

This is an example of a message sent by assistant with follow-up options. Follow-up options are defined within `options` property.

```js file="./AssistantMessageWithFollowup.tsx"

```

### User Message

This is an example of a message sent by user. Additionally, it allows for the use of a custom icon through the `icon` property.

```js file="./UserMessage.tsx"

```
