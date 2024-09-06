import React from 'react';

import { Bullseye, Brand, DropdownList, DropdownItem, DropdownGroup } from '@patternfly/react-core';

import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';
import Chatbot, { ChatbotDisplayMode } from '@patternfly/virtual-assistant/dist/dynamic/Chatbot';
import ChatbotContent from '@patternfly/virtual-assistant/dist/dynamic/ChatbotContent';
import ChatbotWelcomePrompt from '@patternfly/virtual-assistant/dist/dynamic/ChatbotWelcomePrompt';
import ChatbotFooter, { ChatbotFootnote } from '@patternfly/virtual-assistant/dist/dynamic/ChatbotFooter';
import MessageBar from '@patternfly/virtual-assistant/dist/dynamic/MessageBar';
import MessageBox from '@patternfly/virtual-assistant/dist/dynamic/MessageBox';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
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

import logo from '../ChatbotHeader/logo.svg';

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

const messages = [
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
] as any;

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

  const [selectedModel, setSelectedModel] = React.useState('Granite 7B');

  const [displayMode, setDisplayMode] = React.useState<ChatbotDisplayMode>(ChatbotDisplayMode.default);

  const onSelectModel = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined
  ) => {
    setSelectedModel(value as string);
  };

  const onSelectDisplayMode = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined
  ) => {
    setDisplayMode(value as ChatbotDisplayMode);
  };

  const handleSend = (message) => alert(message);

  return (
    <>
      <ChatbotToggle
        toolTipLabel="Chatbot"
        isChatbotVisible={chatbotVisible}
        onToggleChatbot={() => setChatbotVisible(!chatbotVisible)}
      />
      <Chatbot isVisible={chatbotVisible} displayMode={displayMode}>
        <ChatbotHeader>
          <ChatbotHeaderMenu onMenuToggle={() => alert('Menu toggle clicked')} />
          <ChatbotHeaderTitle>
            <Bullseye>
              <Brand src={logo} alt="Branding for chatbot" />
            </Bullseye>
          </ChatbotHeaderTitle>
          <ChatbotHeaderActions>
            <ChatbotHeaderSelectorDropdown value={selectedModel} onSelect={onSelectModel}>
              <DropdownList>
                <DropdownItem value="Granite 7B" key="granite">
                  Granite 7B
                </DropdownItem>
                <DropdownItem value="Llama 3.0" key="llama">
                  Llama 3.0
                </DropdownItem>
                <DropdownItem value="Mistral 3B" key="mistral">
                  Mistral 3B
                </DropdownItem>
              </DropdownList>
            </ChatbotHeaderSelectorDropdown>
            <ChatbotHeaderOptionsDropdown onSelect={onSelectDisplayMode}>
              <DropdownGroup label="Display mode">
                <DropdownList>
                  <DropdownItem
                    value={ChatbotDisplayMode.default}
                    key="switchDisplayOverlay"
                    icon={<OutlinedWindowRestoreIcon aria-hidden />}
                  >
                    <span>Overlay</span>
                  </DropdownItem>
                  <DropdownItem
                    value={ChatbotDisplayMode.docked}
                    key="switchDisplayDock"
                    icon={<OpenDrawerRightIcon aria-hidden />}
                  >
                    <span>Dock to window</span>
                  </DropdownItem>
                  <DropdownItem
                    value={ChatbotDisplayMode.fullscreen}
                    key="switchDisplayFullscreen"
                    icon={<ExpandIcon aria-hidden />}
                  >
                    <span>Fullscreen</span>
                  </DropdownItem>
                </DropdownList>
              </DropdownGroup>
            </ChatbotHeaderOptionsDropdown>
          </ChatbotHeaderActions>
        </ChatbotHeader>
        <ChatbotContent>
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
          <MessageBar onSendMessage={handleSend} hasMicrophoneButton />
          <ChatbotFootnote {...footnoteProps} />
        </ChatbotFooter>
      </Chatbot>
    </>
  );
};
