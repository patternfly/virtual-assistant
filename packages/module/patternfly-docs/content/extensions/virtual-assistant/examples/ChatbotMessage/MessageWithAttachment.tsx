import React from 'react';

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import PreviewAttachment from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';
import AttachmentEdit from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';
import userAvatar from './user_avatar.jpg';

export const AttachmentMenuExample: React.FunctionComponent = () => {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = React.useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState<boolean>(false);
  const [currentModalData, setCurrentModalData] = React.useState<ModalData>();

  return (
    <>
      <Message
        name="User"
        role="user"
        avatar={userAvatar}
        content="Here is an uploaded file"
        attachmentName="auth-operator.yml"
        attachmentId="1"
        onAttachmentClick={() => {
          setCurrentModalData({ fileName: 'auth-operator.yml', code: 'test' });
          setIsEditModalOpen(false);
          setIsPreviewModalOpen(true);
        }}
        onAttachmentClose={(id: string) => {
          // eslint-disable-next-line no-console
          console.log(`Closed attachment id ${id}`);
        }}
      />
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
