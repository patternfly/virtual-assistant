import React from 'react';

import { Button, Icon, Tooltip, TooltipProps } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export interface ChatbotHeaderMenuProps {
  /** Callback function to attach to menu toggle on top right of chatbot header. */
  onMenuToggle: () => void;
  /** Custom classname for the header component */
  className?: string;
  /** Props spread to the PF Tooltip component wrapping the display mode dropdown */
  tooltipProps?: TooltipProps;
  /** Aria label for menu */
  menuAriaLabel?: string;
  /** Ref applied to menu */
  innerRef?: React.Ref<HTMLButtonElement>;
}

const ChatbotHeaderMenuBase: React.FunctionComponent<ChatbotHeaderMenuProps> = ({
  className,
  onMenuToggle,
  tooltipProps,
  menuAriaLabel = 'Toggle menu',
  innerRef
}: ChatbotHeaderMenuProps) => (
  <div className={`pf-chatbot__menu ${className}`}>
    <Tooltip content="Menu" position="bottom" {...tooltipProps}>
      <Button
        className="pf-chatbot__button--toggle-menu"
        variant="plain"
        onClick={onMenuToggle}
        aria-label={menuAriaLabel}
        ref={innerRef}
        icon={
          <Icon size="xl" isInline>
            <BarsIcon />
          </Icon>
        }
      />
    </Tooltip>
  </div>
);

export const ChatbotHeaderMenu = React.forwardRef(
  (props: ChatbotHeaderMenuProps, ref: React.Ref<HTMLButtonElement>) => (
    <ChatbotHeaderMenuBase innerRef={ref} {...props} />
  )
);
