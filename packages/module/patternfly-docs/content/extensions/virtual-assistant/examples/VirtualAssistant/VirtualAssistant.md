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
import { AngleDownIcon } from '@patternfly/react-icons';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import UserMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/UserMessageEntry';
import { From } from '@patternfly/virtual-assistant/dist/dynamic/types';

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

### Assistant Message

This is an example of a message sent by assistant. Message content is defined within `content` property.

```js file="./AssistantMessage.tsx"

```

### Assistant Message with follow-up options

This is an example of a message sent by assistant with follow-up options. Message content is defined within `content` property. Follow-up options are defined within `options` property.

```js file="./AssistantMessageWithFollowup.tsx"

```

### User Message

This is an example of a message sent by user. Message content is defined within `content` property.

```js file="./UserMessage.tsx"

```