import React from 'react';
import ChatbotAlert from '@patternfly/virtual-assistant/dist/dynamic/ChatbotAlert';

export const AttachmentErrorExample: React.FunctionComponent = () => (
  <ChatbotAlert
    variant="danger"
    // eslint-disable-next-line no-console
    onClose={() => console.log('Clicked the close button')}
    title="File upload failed"
  >
    Your file size is too large. Please ensure that your file is less than 25 MB.
  </ChatbotAlert>
);
