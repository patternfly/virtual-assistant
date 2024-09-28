---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly-AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot attachments
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['AttachMenu', 'AttachmentEdit', 'FileDetails', 'FileDetailsLabel', 'FileDropZone', 'PreviewAttachment']
---

import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import FileDetails from '@patternfly/virtual-assistant/dist/dynamic/FileDetails';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import { PreviewAttachment } from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import ChatbotAlert from '@patternfly/virtual-assistant/dist/dynamic/ChatbotAlert';

We are using [react-dropzone](https://react-dropzone.js.org) for opening the file dialog and handling drag and drop. It does not process files or provide any way to make HTTP requests to a server. If you need this, [react-dropzone](https://react-dropzone.js.org) suggests [filepond](https://pqina.nl/filepond/) or [uppy.io](https://uppy.io/).

### Dialog for editing attachments

```js file="./AttachmentEdit.tsx"

```

### Error displayed when attachment fails

```js file="./AttachmentError.tsx"

```

### Details of file attached to chat conversation

The file extension on the uploaded file is reflected in the text below the file name.

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
