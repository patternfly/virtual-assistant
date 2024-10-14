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
}

export const ChatbotHeaderMenu: React.FunctionComponent<ChatbotHeaderMenuProps> = ({
  className,
  onMenuToggle,
  tooltipProps,
  menuAriaLabel = 'Toggle menu'
}: ChatbotHeaderMenuProps) => (
  <div className={`pf-chatbot__menu ${className}`}>
    <Tooltip content="Menu" position="bottom" {...tooltipProps}>
      <Button
        className="pf-chatbot__button--toggle-menu"
        variant="plain"
        onClick={onMenuToggle}
        aria-label={menuAriaLabel}
        icon={
          <Icon size="xl" isInline>
            <BarsIcon />
          </Icon>
        }
      />
    </Tooltip>
  </div>
);

export default ChatbotHeaderMenu;
