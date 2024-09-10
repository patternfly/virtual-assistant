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
import { Alert, AlertActionCloseButton, DropEvent } from '@patternfly/react-core';
import FileDetailsLabel from '@patternfly/virtual-assistant/dist/dynamic/FileDetailsLabel';
import PreviewAttachment from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';

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

interface ModalData {
  code: string;
  fileName: string;
}

export const BasicDemo: React.FunctionComponent = () => {
  const onAttachmentClose = (attachmentId: string) => {
    const index = messages.findIndex((message) => message.attachmentId === attachmentId);
    const updatedMessages: MessageProps[] = [];
    if (index >= 0) {
      messages.forEach((message) => updatedMessages.push(message));
      delete updatedMessages[index].attachmentName;
      delete updatedMessages[index].attachmentId;
      delete updatedMessages[index].onAttachmentClick;
      delete updatedMessages[index].onAttachmentClose;
      setMessages(updatedMessages);
    }
  };
  const initialMessages: MessageProps[] = [
    {
      role: 'user',
      content: "I'm referring to this attachment for added context in our conversation.",
      name: 'User',
      attachmentName: 'auth-operator.yml',
      attachmentId: '1',
      onAttachmentClose,
      onAttachmentClick: () => {
        setCurrentModalData({ fileName: 'auth-operator.yml', code: 'test' });
        setIsEditModalOpen(false);
        setIsPreviewModalOpen(true);
      }
    },
    {
      role: 'bot',
      content: 'Great, I can reference this attachment throughout our conversation.',
      name: 'Bot'
    }
  ];

  const [error, setError] = React.useState<string>();
  const [chatbotVisible, setChatbotVisible] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File>();
  const [isLoadingFile, setIsLoadingFile] = React.useState<boolean>(false);
  const [messages, setMessages] = React.useState<MessageProps[]>(initialMessages);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = React.useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState<boolean>(false);
  const [currentModalData, setCurrentModalData] = React.useState<ModalData>();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const handleSend = (message) => alert(message);

  // Attachments
  // --------------------------------------------------------------------------
  // example of how you can read a text file
  const readFile = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
      // you can use reader.readAsText(file) for human-readable file types;
    });

  // handle file drop/selection
  const handleFile = (fileArr: File[]) => {
    setIsLoadingFile(true);
    // any custom validation you may want
    if (fileArr.length > 1) {
      setShowAlert(true);
      setFile(undefined);
      setError('Uploaded more than one file.');
      return;
    }
    // this is 25MB in bytes; size is in bytes
    if (fileArr[0].size > 25000000) {
      setShowAlert(true);
      setFile(undefined);
      setError('File is larger than 25MB.');
      return;
    }

    readFile(fileArr[0])
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        setFile(fileArr[0]);
        setShowAlert(false);
        setError(undefined);
        // this is just for demo purposes, to make the loading state really obvious
        setTimeout(() => {
          setIsLoadingFile(false);
        }, 1000);
      })
      .catch((error: DOMException) => {
        setError(`Failed to read file: ${error.message}`);
      });
  };

  const handleFileDrop = (event: DropEvent, data: File[]) => {
    handleFile(data);
  };

  const handleAttach = (data: File[]) => {
    handleFile(data);
  };

  const onClose = () => {
    setFile(undefined);
  };

  return (
    <>
      <ChatbotToggle
        toolTipLabel="Chatbot"
        isChatbotVisible={chatbotVisible}
        onToggleChatbot={() => {
          setChatbotVisible(!chatbotVisible);
          setIsEditModalOpen(false);
          setIsPreviewModalOpen(false);
        }}
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
              <MessageBar onSendMessage={handleSend} hasMicrophoneButton hasAttachButton handleAttach={handleAttach} />
              <ChatbotFootnote {...footnoteProps} />
            </ChatbotFooter>
          </>
        </FileDropZone>
      </Chatbot>
      {currentModalData && (
        <PreviewAttachment
          code={currentModalData?.code}
          fileName={currentModalData?.fileName}
          isModalOpen={isPreviewModalOpen}
          onEdit={() => {
            setIsPreviewModalOpen(false);
            setIsEditModalOpen(true);
          }}
          onDismiss={() => setCurrentModalData(undefined)}
          handleModalToggle={() => setIsPreviewModalOpen(false)}
        />
      )}
      {currentModalData && (
        <AttachmentEdit
          code={currentModalData?.code}
          fileName={currentModalData?.fileName}
          isModalOpen={isEditModalOpen}
          onSave={() => {
            setIsEditModalOpen(false);
          }}
          onCancel={() => setCurrentModalData(undefined)}
          handleModalToggle={() => setIsEditModalOpen(false)}
        />
      )}
    </>
  );
};
