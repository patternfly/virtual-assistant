import React from 'react';
import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Chatbot from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import ChatbotFooter, { ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import MessageBar from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import Message, { MessageProps } from '@patternfly/virtual-assistant/dist/dynamic/Message';
import FileDropZone from '@patternfly/virtual-assistant/dist/dynamic/FileDropZone';
import {
  Alert,
  AlertActionCloseButton,
  Divider,
  DropdownGroup,
  DropdownItem,
  DropdownList,
  DropEvent
} from '@patternfly/react-core';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import { BellIcon, CalendarAltIcon, ClipboardIcon, CodeIcon, UploadIcon } from '@patternfly/react-icons';
import AttachmentIcon from './AttachmentIcon.svg';
import { useDropzone } from 'react-dropzone';

const initialMenuItems = [
  <DropdownList key="list-1">
    <DropdownItem value="auth-operator Pod" id="0" icon={<img src={AttachmentIcon} alt="Pod icon" />}>
      <div className="pf-chatbot__menu-operator">
        auth-operator
        <div className="pf-v6-c-menu__item-description">Pod</div>
      </div>
    </DropdownItem>
  </DropdownList>,
  <DropdownGroup key="group2">
    <DropdownList>
      <DropdownItem value="Alerts" id="1" icon={<BellIcon />}>
        Alerts
      </DropdownItem>
      <DropdownItem value="Events" id="2" icon={<CalendarAltIcon />}>
        Events
      </DropdownItem>
      <DropdownItem value="Logs" id="3" icon={<ClipboardIcon />}>
        Logs
      </DropdownItem>
      <DropdownItem value="YAML - Status" id="4" icon={<CodeIcon />}>
        YAML - Status
      </DropdownItem>
      <DropdownItem value="YAML - All contents" id="5" icon={<CodeIcon />}>
        YAML - All contents
      </DropdownItem>
    </DropdownList>
  </DropdownGroup>
];

const footnoteProps = {
  label: 'Lightspeed uses AI. Check for mistakes.',
  popover: {
    title: 'Verify accuracy',
    description: `While Lightspeed strives for accuracy, there's always a possibility of errors. It's a good practice to verify critical information from reliable sources, especially if it's crucial for decision-making or actions.`,
    bannerImage: {
      src: 'https://cdn.dribbble.com/userupload/10651749/file/original-8a07b8e39d9e8bf002358c66fce1223e.gif',
      alt: 'Example image for footnote popover'
    },
    cta: {
      label: 'Got it',
      onClick: () => {
        alert('Do something!');
      }
    },
    link: {
      label: 'Learn more',
      url: 'https://www.redhat.com/'
    }
  }
};

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Here is an inline code - \`() => void\`

Here is some YAML code:

~~~yaml
apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
  name: azure-sample-repo0oooo00ooo
spec:
  connectionConfig:
  url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
~~~

Here is some JavaScript code:

~~~js
import React from 'react';

const MessageLoading = () => (
  <div className="pf-chatbot__message-loading">
    <span className="pf-chatbot__message-loading-dots">
      <span className="pf-v6-screen-reader">Loading message</span>
    </span>
  </div>
);

export default MessageLoading;

~~~
`;

const messages: MessageProps[] = [
  {
    role: 'user',
    content: 'Hello, can you give me an example of what you can do?',
    name: 'User'
  },
  {
    role: 'bot',
    content: markdown,
    name: 'Bot'
  }
];

const welcomePrompts = [
  {
    title: 'Topic 1',
    message: 'Helpful prompt for Topic 1'
  },
  {
    title: 'Topic 2',
    message: 'Helpful prompt for Topic 2'
  }
];

export const BasicDemo: React.FunctionComponent = () => {
  const [chatbotVisible, setChatbotVisible] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File>();
  const [isLoadingFile, setIsLoadingFile] = React.useState<boolean>(false);
  const [userFacingMenuItems, setUserFacingMenuItems] = React.useState<React.ReactNode>([]);
  const [error, setError] = React.useState<string>();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { open } = useDropzone({
    onDropAccepted: (files: File[]) => {
      setIsLoadingFile(true);
      setIsOpen(false);
      // any custom validation you may want
      if (files.length > 1) {
        setShowAlert(true);
        setFile(undefined);
        setError('Uploaded more than one file.');
        return;
      }
      // this is 25MB in bytes; size is in bytes
      if (files[0].size > 25000000) {
        setShowAlert(true);
        setFile(undefined);
        setError('File is larger than 25MB.');
        return;
      }

      setFile(files[0]);
      setShowAlert(false);
      setError(undefined);
      // this is just for demo purposes, to make the loading state really obvious
      setTimeout(() => {
        setIsLoadingFile(false);
      }, 1000);
    }
  });

  const handleSend = (message) => alert(message);

  // Attachments
  // --------------------------------------------------------------------------
  const handleFileDrop = (event: DropEvent, data: File[]) => {
    setFile(data[0]);
    setIsLoadingFile(true);
    setTimeout(() => {
      setIsLoadingFile(false);
    }, 1000);
  };

  const onClose = () => {
    setFile(undefined);
  };

  // Attachmenu menu
  // --------------------------------------------------------------------------
  const uploadMenuItems = [
    <Divider key="divider" />,
    <DropdownList key="list-2">
      <DropdownItem
        onClick={() => {
          open();
          setIsOpen(!isOpen);
        }}
        key="upload"
        value="upload"
        id="upload"
        icon={<UploadIcon />}
      >
        Upload from computer
      </DropdownItem>
    </DropdownList>
  ];

  const onToggleClick = () => {
    setUserFacingMenuItems(initialMenuItems.concat(uploadMenuItems));
  };

  const findMatchingElements = (elements: React.ReactNode[], targetValue: string) => {
    let matchingElements = [] as React.ReactNode[];

    elements.forEach((element) => {
      if (React.isValidElement(element)) {
        // Check if the element's value matches the targetValue
        if (element.props.value && element.props.value.toLowerCase().includes(targetValue.toLowerCase())) {
          matchingElements.push(element);
        }

        // Recursively check the element's children
        const children = React.Children.toArray(element.props.children);
        matchingElements = matchingElements.concat(findMatchingElements(children, targetValue));
      }
    });

    return matchingElements;
  };

  const onTextChange = (textValue: string) => {
    if (textValue === '') {
      setUserFacingMenuItems(initialMenuItems.concat(uploadMenuItems));
      return;
    }

    const newMenuItems = findMatchingElements(initialMenuItems, textValue);
    // this is necessary because the React nodes we find traversing the recursive search
    // aren't correctly wrapped in a DropdownList. This leads to problems with the
    // auth-operator item where it winds up floating in a bad place in the DOM and never
    // gets removed
    setUserFacingMenuItems(
      <>
        <DropdownList>
          {newMenuItems.map((item) => item)}
          {newMenuItems.length === 0 && <DropdownItem key="no-items">No results found</DropdownItem>}
        </DropdownList>
        {uploadMenuItems.map((item) => item)}
      </>
    );
  };

  // Main return statement
  // --------------------------------------------------------------------------
  return (
    <>
      <ChatbotToggle
        toolTipLabel="Chatbot"
        isChatbotVisible={chatbotVisible}
        onToggleChatbot={() => setChatbotVisible(!chatbotVisible)}
      />
      <Chatbot isVisible={chatbotVisible}>
        <FileDropZone onFileDrop={handleFileDrop}>
          <>
            <ChatbotContent>
              {showAlert && (
                <Alert
                  variant="danger"
                  actionClose={
                    <AlertActionCloseButton
                      onClose={() => {
                        setShowAlert(false);
                        setError(undefined);
                      }}
                    />
                  }
                  title="File upload failed"
                >
                  {error}
                </Alert>
              )}
              <MessageBox>
                <ChatbotWelcomePrompt
                  title="Hello, Chatbot User"
                  description="How may I help you today?"
                  prompts={welcomePrompts}
                />
                {messages.map((message) => (
                  <Message key={message.name} {...message} />
                ))}
              </MessageBox>
            </ChatbotContent>
            <ChatbotFooter>
              {file && (
                <div>
                  <FileDetailsLabel fileName={file.name} isLoading={isLoadingFile} onClose={onClose} />
                </div>
              )}
              <MessageBar
                onSendMessage={handleSend}
                hasMicrophoneButton
                attachMenuProps={{
                  isAttachMenuOpen: isOpen,
                  setIsAttachMenuOpen: setIsOpen,
                  attachMenuItems: userFacingMenuItems,
                  onAttachMenuSelect: (_ev, value) => {
                    // eslint-disable-next-line no-console
                    console.log('selected', value);
                  },
                  attachMenuInputPlaceholder: 'Search cluster resources...',
                  onAttachMenuInputChange: onTextChange,
                  onAttachMenuToggleClick: onToggleClick
                }}
              />
              <ChatbotFootnote {...footnoteProps} />
            </ChatbotFooter>
          </>
        </FileDropZone>
      </Chatbot>
    </>
  );
};
