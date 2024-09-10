---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Chat bots / AI
# Sidenav secondary level section
# should be the same for all markdown files
id: Virtual assistant
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['VirtualAssistant', 'VirtualAssistantAction']
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
