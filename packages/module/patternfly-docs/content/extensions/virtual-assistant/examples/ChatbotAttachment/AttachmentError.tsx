import React from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

export const AttachmentErrorExample: React.FunctionComponent = () => (
  <Alert
    variant="danger"
    // eslint-disable-next-line no-console
    actionClose={<AlertActionCloseButton onClose={() => console.log('Clicked the close button')} />}
    title="File upload failed"
  >
    Your file size is too large. Please ensure that your file is less than 25 MB.
  </Alert>
);
