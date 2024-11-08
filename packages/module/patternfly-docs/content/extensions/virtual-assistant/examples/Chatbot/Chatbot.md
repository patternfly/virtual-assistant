---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot container
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: [
'Chatbot',
'ChatbotContent', 
'MessageBox',
'ChatbotWelcomePrompt',
'WelcomePrompt'
]
sortValue: 2
---

import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';

### Container

The PatternFly chatbot is a separate window that overlays or is embedded within other UI content. This container can be shown and hidden via [the chatbot toggle.](/patternfly-ai/chatbot/chatbot-toggle)

The `<Chatbot>` component is the container that encompasses the chatbot experience. It adapts to various display modes (overlay/default, docked, fullscreen, and embedded) and supports both light and dark themes.

The "embedded" display mode is meant to be used within a [PatternFly page](/components/page) or other container within your product.

```js file="./ChatbotContainer.tsx" isFullscreen

```

### Content and message box

The `<ChatbotContent>` component is the container that is placed within the `<Chatbot>`, between the [`<ChatbotHeader>`](/patternfly-ai/chatbot/chatbot-header) and [`<ChatbotFooter>`.](/patternfly-ai/chatbot/chatbot-footer)
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

**Note**: When messages update, it is important to announce new messages to users of assistive technology. To do this, make sure to set the `announcement` prop on `<MessageBox>` whenever you display a new message in `<MessageBox>`. You can view this in action in our [basic chatbot](/patternfly-ai/chatbot/chatbot-container/react-demos#basic-chatbot) and [embedded chatbot](/patternfly-ai/chatbot/chatbot-container/react-demos#embedded-chatbot) demos.

### Welcome prompt

To introduce users to the chatbot experience, a welcome prompt can fill the message box before they input their first message. This brief message should follow our [conversation design guidelines](/patternfly-ai/conversation-design) to welcome users to the chatbot experience and encourage them to interact.

To provide users with a more specific direction, you can also include optional welcome prompts.

```js file="./ChatbotWelcomePrompt.tsx"

```

### Skip to content

To provide page context, we recommend using a "skip to chatbot" button. This allows you to skip past other content on the page, directly to the chatbot content. The [PatternFly skip to content component](/components/skip-to-content) can be used for this purpose. To display this button, you must tab into the main window. We recommend putting focus on the toggle if the chatbot is closed, and the chatbot when it is open.

```js file="./SkipToContent.tsx" isFullscreen

```
