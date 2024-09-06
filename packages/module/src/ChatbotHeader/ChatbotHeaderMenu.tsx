import React from 'react';

import { Button, Icon, SplitItem, Tooltip, TooltipProps } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export interface ChatbotHeaderMenuProps {
  /** Callback function to attach to menu toggle on top right of chatbot header. */
  onMenuToggle: () => void;
  /** Custom classname for the header component */
  className?: string;
  /** Props spread to the PF Tooltip component wrapping the display mode dropdown */
  tooltipProps?: TooltipProps;
}

export const ChatbotHeaderMenu: React.FunctionComponent<ChatbotHeaderMenuProps> = ({
  className,
  onMenuToggle,
  tooltipProps
}: ChatbotHeaderMenuProps) => (
  <SplitItem className={`pf-chatbot__menu ${className}`}>
    <Tooltip content="Menu" position="bottom" {...tooltipProps}>
      <Button
        className="pf-chatbot__button--toggle-menu"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--toggle-menu"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        icon={
          <Icon size="lg" isInline>
            <BarsIcon />
          </Icon>
        }
      />
    </Tooltip>
  </SplitItem>
);

export default ChatbotHeaderMenu;
