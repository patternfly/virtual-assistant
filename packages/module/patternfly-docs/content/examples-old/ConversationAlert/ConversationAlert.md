---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Chat bots / AI
# Sidenav secondary level section
# should be the same for all markdown files
id: Conversation alert
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['ConversationAlert']
sourceLink: https://github.com/patternfly/virtual-assistant/blob/main/packages/module/patternfly-docs/content/extensions/virtual-assistant/examples/ConversationAlert/ConversationAlert.md
---

import ConversationAlert from '@patternfly/virtual-assistant/dist/dynamic/ConversationAlert';

The **conversation alert** component renders an alert to be used in the body of the virtual assistant.

### Conversation Alert

You can configure a custom title and variant input value using `title` and `variant` props.

```js file="./ConversationAlertBasic.tsx"

```
