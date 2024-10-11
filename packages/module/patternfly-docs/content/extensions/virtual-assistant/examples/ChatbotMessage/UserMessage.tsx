import React from 'react';

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import userAvatar from './user_avatar.jpg';
import customImage from './custom_user_img.jpeg';

export const AttachmentMenuExample: React.FunctionComponent = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Here is an inline code - \`() => void\``;

  return (
    <>
      <Message
        name="User"
        role="user"
        content="Example content with custom avatar image and updated timestamp text"
        timestamp="1 hour ago"
        avatar={customImage}
      />
      <Message name="User" role="user" content={markdown} avatar={userAvatar} />
    </>
  );
};
