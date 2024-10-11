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
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content="Example content" isLoading />
    </>
  );
};
