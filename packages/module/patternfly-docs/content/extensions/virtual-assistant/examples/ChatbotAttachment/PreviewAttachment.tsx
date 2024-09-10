import React from 'react';
import { Button } from '@patternfly/react-core';
import { PreviewAttachment } from '@patternfly/virtual-assistant/dist/dynamic/PreviewAttachment';

export const PreviewAttachmentExample: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: React.MouseEvent | MouseEvent | KeyboardEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button onClick={handleModalToggle}>Launch modal</Button>
      <PreviewAttachment
        code="I am a code snippet"
        fileName="test.yaml"
        handleModalToggle={handleModalToggle}
        isModalOpen={isModalOpen}
        onDismiss={() => null}
        onEdit={() => null}
      />
    </>
  );
};
