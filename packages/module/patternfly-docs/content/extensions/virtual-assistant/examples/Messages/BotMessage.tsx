import React from 'react';
import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import patternflyAvatar from './patternfly_avatar.jpg';

export const BotMessageExample: React.FunctionComponent = () => {
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

  const moreComplexList = `You may be wondering whether you can display more complex lists with formatting. In response to your question, I will explain how to spread butter on toast.

1. **Using a \`toaster\`:**

   - Place \`bread\` in a \`toaster\`
   - Once \`bread\` is lightly browned, remove from \`toaster\`

2. **Using a \`knife\`:**

     Acquire 1 tablespoon of room temperature \`butter\`. Use \`knife\` to spread butter on \`toast\`. Bon appétit!
 `;

  return (
    <>
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={`Text-based message from a bot named "Bot"`} />
      <Message
        name="Bot"
        role="bot"
        avatar={patternflyAvatar}
        content={`Text-based message from a bot named "Bot," with updated timestamp`}
        timestamp="1 hour ago"
      />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={markdown} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={orderedList} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={unorderedList} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content={moreComplexList} />
      <Message name="Bot" role="bot" avatar={patternflyAvatar} content="Example content" isLoading />
      <Message role="bot" avatar={patternflyAvatar} content="Text-based message from a nameless bot" />
      <Message
        name="Default Openshift Container Platform Assistant That Can Help With Any Query You Might Need Help With"
        role="bot"
        avatar={patternflyAvatar}
        content="Text-based message, where the bot's name is truncated"
      />
    </>
  );
};
