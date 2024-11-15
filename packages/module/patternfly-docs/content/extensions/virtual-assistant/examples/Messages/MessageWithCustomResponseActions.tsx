import React from 'react';

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import patternflyAvatar from './patternfly_avatar.jpg';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import RedoIcon from '@patternfly/react-icons/dist/esm/icons/redo-icon';

export const CustomActionExample: React.FunctionComponent = () => (
  <Message
    name="Bot"
    role="bot"
    avatar={patternflyAvatar}
    content="Example with custom actions"
    actions={{
      regenerate: {
        ariaLabel: 'Regenerate',
        // eslint-disable-next-line no-console
        onClick: () => console.log('Clicked regenerate'),
        tooltipContent: 'Regenerate',
        icon: <RedoIcon />
      },
      download: {
        ariaLabel: 'Download',
        // eslint-disable-next-line no-console
        onClick: () => console.log('Clicked download'),
        tooltipContent: 'Download',
        icon: <DownloadIcon />
      },
      info: {
        ariaLabel: 'Info',
        // eslint-disable-next-line no-console
        onClick: () => console.log('Clicked info'),
        tooltipContent: 'Info',
        icon: <InfoCircleIcon />
      }
    }}
  />
);
