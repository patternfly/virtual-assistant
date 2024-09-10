import React from 'react';
import LoadingMessage from '@patternfly/virtual-assistant/dist/esm/LoadingMessage';
import GrinIcon from '@patternfly/react-icons/dist/js/icons/bacon-icon';

export const BasicExample: React.FunctionComponent = () => (
  <>
    <LoadingMessage />
    <LoadingMessage icon={GrinIcon} />
  </>
);
