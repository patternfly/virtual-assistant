import React from 'react';
import { Icon, Split, SplitItem } from '@patternfly/react-core';

import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';

export interface LoadingMessageProps {
  icon?: React.ComponentType;
}

export const LoadingMessage: React.FunctionComponent<LoadingMessageProps> = ({ icon: IconComponent = RobotIcon }) => (
  <Split>
    <SplitItem>
      <Icon size="lg" className="pf-v6-u-mr-sm pf-v6-u-pt-md">
        <IconComponent />
      </Icon>
    </SplitItem>
    <SplitItem className="pf-u-background-color-200">
      <div className="pf-v6-u-display-flex pf-u-align-items-center">
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </SplitItem>
  </Split>
);

export default LoadingMessage;
