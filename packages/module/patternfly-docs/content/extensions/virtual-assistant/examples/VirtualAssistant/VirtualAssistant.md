---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Virtual assistant
# Sidenav secondary level section
# should be the same for all markdown files
id: Virtual assistant
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['VirtualAssistant']
sourceLink: https://github.com/patternfly/virtual-assistant/blob/main/packages/module/patternfly-docs/content/extensions/virtual-assistant/examples/VirtualAssistant/VirtualAssistant.md
---

import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import VirtualAssistantAction from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistantAction';
import SystemMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/SystemMessageEntry';
import LoadingMessage from '@patternfly/virtual-assistant/dist/dynamic/LoadingMessage';
import { GrinIcon } from '@patternfly/react-icons';
import { AngleDownIcon } from '@patternfly/react-icons';
import ConversationAlert from '@patternfly/virtual-assistant/dist/dynamic/ConversationAlert';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import UserMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/UserMessageEntry';

The **virtual assistant** component renders body of the virtual assistant window.

### Basic example

A blank example of the virtual assistant body.

```js file="./VirtualAssistantExample.tsx"

```

### Customizing input title and placeholder

You can configure a custom title and placeholder input value using `title` and `inputPlaceholder` props.


```js file="./VirtualAssistantCustomText.tsx"

```

### Listening to messages

The `onSendMessage` property can be used for listening to the send button click.

```js file="./VirtualAssistantMessages.tsx"

```

### Disabling send button

Disabling the send button using `isSendButtonDisabled` prevents it from being clicked.

```js file="./VirtualAssistantDisableOnEmptyText.tsx"

```

### Using custom actions

Custom actions can be added to the assistant body using the `actions` property.


```js file="./VirtualAssistantWithActions.tsx"

```

### Conversation Alert

You can configure a custom title and variant input value using `title` and `variant` props.

```js file="./VirtualAssistantConversationAlert.tsx"

```

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

### Assistant Message with dropdown options

This is an example of a message sent by assistant with dropdown options. Follow-up options are defined within `dropdown` property.

```js file="./AssistantMessageWithDropdown.tsx"

```

### User Message

This is an example of a message sent by user. 

```js file="./UserMessage.tsx"

```
