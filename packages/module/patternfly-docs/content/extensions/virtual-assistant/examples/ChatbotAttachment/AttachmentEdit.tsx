import React from 'react';
import { Button } from '@patternfly/react-core';
import { AttachmentEdit } from '@patternfly/virtual-assistant/dist/dynamic/AttachmentEdit';

export const AttachmentEditModalExample: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: React.MouseEvent | MouseEvent | KeyboardEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button onClick={handleModalToggle}>Launch modal</Button>
      <AttachmentEdit
        code="I am a code snippet"
        fileName="test.yaml"
        handleModalToggle={handleModalToggle}
        isModalOpen={isModalOpen}
        onCancel={() => null}
        // eslint-disable-next-line no-console
        onSave={(_event, code) => console.log(`The new code is "${code}"`)}
      />
    </>
  );
};
