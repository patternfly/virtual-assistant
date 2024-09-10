---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Chat bots / AI
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot attachment
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents:
  [
    'AttachMenu',
    'AttachmentEdit',
    'FileDetails',
    'FileDetailsLabel',
    'FileDropZone',
    'PreviewAttachment'
  ]
---

import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import AttachMenu from '@patternfly/virtual-assistant/dist/dynamic/AttachMenu';
import FileDetails from '@patternfly/virtual-assistant/dist/dynamic/FileDetails';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import { PreviewAttachment } from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';

import { BellIcon, UploadIcon, CodeIcon, ClipboardIcon, CalendarAltIcon } from '@patternfly/react-icons';
import PaperclipIcon from './PaperclipIcon.svg';
import AttachmentIcon from './AttachmentIcon.svg';

### Attach menu for appending to attach icon

```js file="./AttachMenu.tsx"

```

### Dialog for editing attachments

```js file="./AttachmentEdit.tsx"

```

### Error displayed when attachment fails

```js file="./AttachmentError.tsx"

```

### Details of file attached to chat conversation

The file extension on the upladed file is reflected in the text below the file name.

```js file="./FileDetails.tsx"

```

### Interactive chip representing uploading file

```js file="./FileDetailsLabel.tsx"

```

### Dropzone for uploading files via drag and drop

```js file="./FileDropZone.tsx"

```

### Preview attachment in modal

```js file="./PreviewAttachment.tsx"

```
