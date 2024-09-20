---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot
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
---

import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';

### Container

The `Chatbot` component is the chatbot container which adapts to various display modes, as well as both light and dark themes.

```js file="./ChatbotContainer.tsx" isFullscreen

```

### Chatbot content and message box

The `<ChatbotContent>` component is the container that is placed within the `<Chatbot>`, between the [`<ChatbotHeader>`](/extensions/chat-bots--ai/chatbot-header) and [`<ChatbotFooter>`](/extensions/chat-bots--ai/chatbot-footer).
It usually contains a `<ChatbotMessageBox>` for displaying messages.

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

### Welcome prompt

The welcome prompt fills the message box before the user has input their first message to the chatbot. This message should welcome users to the chatbot experience and encourage them to interact. It may be helpful to display predetermined prompts as a starting point.

```js file="./ChatbotWelcomePrompt.tsx"

```
