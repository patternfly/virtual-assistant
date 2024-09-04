// ============================================================================
// Chatbot Footer - Message Bar - Send
// ============================================================================
import React from 'react';

// Import PatternFly components
import { Button, ButtonProps, Tooltip, TooltipProps, Icon } from '@patternfly/react-core';

import { PaperPlaneIcon } from '@patternfly/react-icons/dist/esm/icons/paper-plane-icon';

export interface SendButtonProps extends ButtonProps {
  /** OnClick Handler for the Send Button */
  onClick: () => void;
  /** Class Name for the Send button */
  className?: string;
  /** Props to control the PF Tooltip component */
  tooltipProps?: TooltipProps;
}

export const SendButton: React.FunctionComponent<SendButtonProps> = ({
  className,
  onClick,
  tooltipProps,
  ...props
}: SendButtonProps) => {

  return (
    <Tooltip
      id="pf-chatbot__tooltip--send"
      content="Send"
      position={tooltipProps?.position || 'top'}
      entryDelay={tooltipProps?.entryDelay || 0}
      exitDelay={tooltipProps?.exitDelay || 0}
      distance={tooltipProps?.distance || 8}
      animationDuration={tooltipProps?.animationDuration || 0}
      {...tooltipProps}
    >
      <Button
        className={`pf-chatbot__button--send ${className ?? ''}`}
        variant="link"
        aria-describedby="pf-chatbot__tooltip--send"
        aria-label={props['aria-label'] || 'Send Button'}
        onClick={onClick}
        icon={<Icon iconSize="xl" isInline><PaperPlaneIcon /></Icon>}
        {...props}
      />
    </Tooltip>
  );
};

export default SendButton;
