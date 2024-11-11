import React from 'react';
import {
  ExternalLinkAltIcon,
  VolumeUpIcon,
  OutlinedThumbsUpIcon,
  OutlinedThumbsDownIcon,
  OutlinedCopyIcon
} from '@patternfly/react-icons';
import ResponseActionButton from './ResponseActionButton';
import { TooltipProps } from '@patternfly/react-core';

export interface ActionProps {
  /** Aria-label for the button */
  ariaLabel?: string;
  /** On-click handler for the button */
  onClick?: ((event: MouseEvent | React.MouseEvent<Element, MouseEvent> | KeyboardEvent) => void) | undefined;
  /** Class name for the button */
  className?: string;
  /** Props to control if the attach button should be disabled */
  isDisabled?: boolean;
  /** Content shown in the tooltip */
  tooltipContent?: string;
  /** Props to control the PF Tooltip component */
  tooltipProps?: TooltipProps;
  /** Icon for custom response action */
  icon?: React.ReactNode;
}

export interface ResponseActionProps {
  /** Props for message actions, such as feedback (positive or negative), copy button, share, and listen */
  actions: Record<string, ActionProps | undefined> & {
    positive?: ActionProps;
    negative?: ActionProps;
    copy?: ActionProps;
    share?: ActionProps;
    listen?: ActionProps;
  };
}

export const ResponseActions: React.FunctionComponent<ResponseActionProps> = ({ actions }) => {
  const { positive, negative, copy, share, listen, ...additionalActions } = actions;
  return (
    <div className="pf-chatbot__response-actions">
      {positive && (
        <ResponseActionButton
          ariaLabel={positive.ariaLabel ?? 'Good response'}
          onClick={positive.onClick}
          className={positive.className}
          isDisabled={positive.isDisabled}
          tooltipContent={positive.tooltipContent ?? 'Good response'}
          tooltipProps={positive.tooltipProps}
          icon={<OutlinedThumbsUpIcon />}
        ></ResponseActionButton>
      )}
      {negative && (
        <ResponseActionButton
          ariaLabel={negative.ariaLabel ?? 'Bad response'}
          onClick={negative.onClick}
          className={negative.className}
          isDisabled={negative.isDisabled}
          tooltipContent={negative.tooltipContent ?? 'Bad response'}
          tooltipProps={negative.tooltipProps}
          icon={<OutlinedThumbsDownIcon />}
        ></ResponseActionButton>
      )}
      {copy && (
        <ResponseActionButton
          ariaLabel={copy.ariaLabel ?? 'Copy'}
          onClick={copy.onClick}
          className={copy.className}
          isDisabled={copy.isDisabled}
          tooltipContent={copy.tooltipContent ?? 'Copy'}
          tooltipProps={copy.tooltipProps}
          icon={<OutlinedCopyIcon />}
        ></ResponseActionButton>
      )}
      {share && (
        <ResponseActionButton
          ariaLabel={share.ariaLabel ?? 'Share'}
          onClick={share.onClick}
          className={share.className}
          isDisabled={share.isDisabled}
          tooltipContent={share.tooltipContent ?? 'Share'}
          tooltipProps={share.tooltipProps}
          icon={<ExternalLinkAltIcon />}
        ></ResponseActionButton>
      )}
      {listen && (
        <ResponseActionButton
          ariaLabel={listen.ariaLabel ?? 'Listen'}
          onClick={listen.onClick}
          className={listen.className}
          isDisabled={listen.isDisabled}
          tooltipContent={listen.tooltipContent ?? 'Listen'}
          tooltipProps={listen.tooltipProps}
          icon={<VolumeUpIcon />}
        ></ResponseActionButton>
      )}
      {Object.keys(additionalActions).map((action) => (
        <ResponseActionButton
          key={action}
          ariaLabel={additionalActions[action]?.ariaLabel}
          onClick={additionalActions[action]?.onClick}
          className={additionalActions[action]?.className}
          isDisabled={additionalActions[action]?.isDisabled}
          tooltipContent={additionalActions[action]?.tooltipContent}
          tooltipProps={additionalActions[action]?.tooltipProps}
          icon={additionalActions[action]?.icon}
        />
      ))}
    </div>
  );
};

export default ResponseActions;
