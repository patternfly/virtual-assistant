import React from 'react';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import patternflyAvatar from './patternfly_avatar.jpg';

export const AttachmentMenuExample: React.FunctionComponent = () => {
  const markdown = `
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

  const orderedList = `
  Here is an ordered list:

  1. Item 1
  2. Item 2
  3. Item 3`;

  const unorderedList = `
  Here is an unordered list:

  * Item 1
  * Item 2
  * Item 3`;

  return (
    <>
      <Message
        name="Bot"
        role="bot"
        avatar={patternflyAvatar}
        content="Example content with updated timestamp text"
        timestamp="1 hour ago"
      />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={markdown} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={orderedList} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={unorderedList} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content="Example content" isLoading />
    </>
  );
};
