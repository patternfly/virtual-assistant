// ============================================================================
// Chatbot Footer - Message Bar - Send
// ============================================================================
import React from 'react';

// Import PatternFly components
import { Button, ButtonProps, Tooltip, TooltipProps, Icon } from '@patternfly/react-core';

import { PaperPlaneIcon } from '@patternfly/react-icons/dist/esm/icons/paper-plane-icon';

export interface SendButtonProps extends ButtonProps {
  /** Callback for when button is clicked */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Class Name for SendButton */
  className?: string;
  /** Props to control the PF Tooltip component */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /** English text "Send" used in the tooltip */
  tooltipContent?: string;
}

export const SendButton: React.FunctionComponent<SendButtonProps> = ({
  className,
  onClick,
  tooltipProps,
  tooltipContent = 'Send',
  ...props
}: SendButtonProps) => (
  <Tooltip
    id="pf-chatbot__tooltip--send"
    content={tooltipContent}
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
      aria-label={props['aria-label'] || 'Send button'}
      onClick={onClick}
      icon={
        <Icon iconSize="xl" isInline>
          <PaperPlaneIcon />
        </Icon>
      }
      {...props}
    />
  </Tooltip>
);

export default SendButton;
