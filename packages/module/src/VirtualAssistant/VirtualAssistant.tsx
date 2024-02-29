import React from 'react';
import { Text } from '@patternfly/react-core'

export interface VirtualAssistantProps {
  /** Content text */
  text?: string;
};

const VirtualAssistant: React.FunctionComponent<VirtualAssistantProps> = ({ text, ...props }: VirtualAssistantProps) => (
  <Text {...props}>{text ?? 'Virtual assistant content'}</Text>
);


export default VirtualAssistant;
