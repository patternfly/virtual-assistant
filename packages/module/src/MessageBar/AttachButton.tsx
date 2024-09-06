// ============================================================================
// Chatbot Footer - Message Bar - Attach
// ============================================================================
import React from 'react';

// Import PatternFly components
import { Button, ButtonProps, Tooltip, TooltipProps, Icon } from '@patternfly/react-core';

import { PaperclipIcon } from '@patternfly/react-icons/dist/esm/icons/paperclip-icon';

export interface AttachButtonProps extends ButtonProps {
  /** OnClick Handler for the Attach Button */
  onClick: ((event: MouseEvent | React.MouseEvent<Element, MouseEvent> | KeyboardEvent) => void) | undefined;
  /** Class Name for the Attach button */
  className?: string;
  /** Props to control is the attach button should be disabled */
  isDisabled?: boolean;
  /** Props to control the PF Tooltip component */
  tooltipProps?: TooltipProps;
}

export const AttachButton: React.FunctionComponent<AttachButtonProps> = ({
  onClick,
  isDisabled,
  className,
  tooltipProps,
  ...props
}: AttachButtonProps) => (
  <Tooltip
    id="pf-chatbot__tooltip--attach"
    content="Attach"
    position="top"
    entryDelay={tooltipProps?.entryDelay || 0}
    exitDelay={tooltipProps?.exitDelay || 0}
    distance={tooltipProps?.distance || 8}
    animationDuration={tooltipProps?.animationDuration || 0}
    {...tooltipProps}
  >
    <Button
      variant="plain"
      className={`pf-chatbot__button--attach ${className ?? ''}`}
      aria-describedby="pf-chatbot__tooltip--attach"
      aria-label={props['aria-label'] || 'Attach Button'}
      isDisabled={isDisabled}
      onClick={onClick}
      icon={
        <Icon iconSize="xl" isInline>
          <PaperclipIcon />
        </Icon>
      }
      {...props}
    />
  </Tooltip>
);

export default AttachButton;
