import React from 'react';

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';

export const AttachmentMenuExample: React.FunctionComponent = () => (
  <Message
    role="bot"
    content="Example content with updated timestamp text"
    timestamp="1 hour ago"
    actions={{
      // eslint-disable-next-line no-console
      positive: { onClick: () => console.log('Good response') },
      // eslint-disable-next-line no-console
      negative: { onClick: () => console.log('Bad response') },
      // eslint-disable-next-line no-console
      copy: { onClick: () => console.log('Copy') },
      // eslint-disable-next-line no-console
      share: { onClick: () => console.log('Share') },
      // eslint-disable-next-line no-console
      listen: { onClick: () => console.log('Listen') }
    }}
  />
);
