import React from 'react';

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';

export const AttachmentMenuExample: React.FunctionComponent = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Here is an inline code - \`() => void\``;

  return (
    <>
      <Message
        role="user"
        content="Example content with custom avatar image and updated timestamp text"
        timestamp="1 hour ago"
        avatar={customImage}
      />
      <Message role="user" content={markdown} />
    </>
  );
};
