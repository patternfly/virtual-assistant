---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot toggle
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['ChatbotToggle']
---

import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';

### Basic example

```js file="./ChatbotToggleBasic.tsx" isFullscreen

```

### Custom closed icon 

A custom icon can be passed to the toggle. It's recommended that an SVG which uses `fill="currentColor"` be used to allow for the image to be visible in both light and dark theme.

```js file="./CustomClosedIcon.tsx" isFullscreen

```
