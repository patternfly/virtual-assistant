---
# Sidenav top-level section
# should be the same for all markdown files
section: PatternFly AI
subsection: Chatbot
# Sidenav secondary level section
# should be the same for all markdown files
id: Chatbot attachment
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react-demos
sourceLink: https://github.com/patternfly/virtual-assistant/blob/main/packages/module/patternfly-docs/content/extensions/virtual-assistant/examples/demos/demos.md
---

import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import ChatbotFooter, { ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import MessageBar from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import SourceDetailsMenuItem from '@patternfly/virtual-assistant/dist/dynamic/SourceDetailsMenuItem';
import PreviewAttachment from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import { BellIcon, CalendarAltIcon, ClipboardIcon, CodeIcon, UploadIcon } from '@patternfly/react-icons';
import { useDropzone } from 'react-dropzone';
import PFHorizontalLogoColor from '../ChatbotHeader/PF-HorizontalLogo-Color.svg';
import PFHorizontalLogoReverse from '../ChatbotHeader/PF-HorizontalLogo-Reverse.svg';
import ChatbotHeader, {
ChatbotHeaderMenu,
ChatbotHeaderTitle,
ChatbotHeaderActions,
ChatbotHeaderSelectorDropdown,
ChatbotHeaderOptionsDropdown
} from '@patternfly/virtual-assistant/dist/dynamic/ChatbotHeader';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import OpenDrawerRightIcon from '@patternfly/react-icons/dist/esm/icons/open-drawer-right-icon';
import OutlinedWindowRestoreIcon from '@patternfly/react-icons/dist/esm/icons/outlined-window-restore-icon';

# Demos

### Attach via upload button in message bar

```js file="./ChatbotAttachment.tsx" isFullscreen

```

### Attach via menu of options in message bar

```js file="./ChatbotAttachmentMenu.tsx" isFullscreen

```
