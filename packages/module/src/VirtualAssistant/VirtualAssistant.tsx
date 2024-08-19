import React, { KeyboardEventHandler } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  TextArea
} from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import clsx from "clsx";
import { PaperPlaneIcon, RobotIcon } from '@patternfly/react-icons';
import { AssistantProvider } from '../AssistantContext';
import VirtualAssistantHeader, { VirtualAssistantHeaderProps } from '../VirtualAssistantHeader';

const useStyles = createUseStyles({
  card: ({ removeBorderRadius }: { removeBorderRadius: boolean }) => ({
    width: "400px",
    height: "600px",
    overflow: "hidden",
    borderRadius: removeBorderRadius ? "0" : "20px",
    "@media screen and (max-width: 768px)": {
      height: "420px",
      width: "100%",
    },
    "&.fullPage": {
      width: "100%",
      height: "100%",
      borderRadius: "0",
    }
  }),
  cardBody: {
    backgroundColor: "var(--pf-v5-global--BackgroundColor--100)",
    paddingLeft: "var(--pf-v5-global--spacer--md)",
    paddingRight: "var(--pf-v5-global--spacer--md)",
    paddingTop: "var(--pf-v5-global--spacer--lg)",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  cardFooter: {
    padding: "10px",
    paddingBottom: "16px",
    "& :focus-visible": {
      outline: "none",
    },
    "& .pf-v5-c-button.pf-m-disabled": {
      color: "transparent !important",
    },
    "& .pf-v5-c-button.pf-m-plain": {
      "--pf-v5-c-button--disabled--Color": "transparent",
      color: "var(--pf-v5-global--danger-color--100)",
    },
    "& .pf-v5-c-form-control": {
      "--pf-v5-c-form-control--after--BorderBottomWidth": "0",
    },
    "& .pf-v5-svg": {
      width: "27px",
      height: "27px",
    }
  },
  textArea: ({ removeBorderRadius }: { removeBorderRadius: boolean }) => ({
    resize: "none",
    backgroundColor: "var(--pf-v5-global--BackgroundColor--200)",
    borderRadius: removeBorderRadius ? "0" : "50px",
    color: "var(--pf-v5-global--Color--light-100)",
    paddingRight: "50px",
    paddingLeft: "20px",
  }),
  sendButton: {
    position: "absolute",
    bottom: "22px",
    right: "14px",
  },
});

export interface VirtualAssistantProps extends VirtualAssistantHeaderProps {
  /** Messages rendered within the assistant */
  children?: React.ReactNode;
  /** Input's placeholder for the assistant */
  inputPlaceholder?: string;
  /** Input's content */
  message?: string;
  /** Input's content change */
  onChangeMessage?: (event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  /** Fire when clicking the Send (Plane) icon */
  onSendMessage?: (message: string) => void;
  /** Disables the text input */
  isInputDisabled?: boolean;
  /** Disables the send button */
  isSendButtonDisabled?: boolean;
  /** Expands the assistant to fill the entire page */
  isFullPage?: boolean;
  /** Allows to overwrite the default header with a custom one */
  header?: React.ReactNode;
  /** Removes border radius from the component and its children */
  removeBorderRadius?: boolean;
  /** VirtualAssistant OUIA ID */
  ouiaId?: string;
}

export const VirtualAssistant: React.FunctionComponent<VirtualAssistantProps> = ({
  children,
  inputPlaceholder = 'Send a message...',
  message = '',
  actions,
  onChangeMessage,
  onSendMessage,
  isInputDisabled = false,
  isSendButtonDisabled = false,
  title,
  icon = RobotIcon,
  isFullPage = false,
  header = null,
  removeBorderRadius = false,
  ouiaId = 'VirtualAssistant'
}: VirtualAssistantProps) => {
  const classes = useStyles({ removeBorderRadius });

  const handleKeyPress: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      if (!event.shiftKey) {
        if (message.trim() === '' || isSendButtonDisabled) {
          event.preventDefault();
        } else {
          onSendMessage && onSendMessage(message);
        }
      }
    }
  };

  return (
    <AssistantProvider assistantIcon={icon} removeBorderRadius={removeBorderRadius}>
      <Card
        className={clsx(
          classes.card,
          { fullPage: isFullPage },
          "pf-v5-u-box-shadow-lg"
        )}
        ouiaId={`${ouiaId}-body`}
      >
        { header ?? <VirtualAssistantHeader title={title} icon={icon} actions={actions} /> }
        <CardBody className={classes.cardBody}>
          {children}
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Divider className="pf-v5-u-pb-md" />
          <TextArea
            className={classes.textArea}
            placeholder={inputPlaceholder}
            value={message}
            onChange={onChangeMessage}
            onKeyPress={handleKeyPress}
            type="text"
            aria-label="Assistant input"
            isDisabled={isInputDisabled}
            data-test-id="assistant-text-input"
          />
          <Button
            className={classes.sendButton}
            isDisabled={isSendButtonDisabled}
            data-test-id="assistant-send-button"
            aria-label="Virtual assistant's message"
            variant="plain"
            onClick={onSendMessage ? () => onSendMessage(message) : undefined}
          >
            <PaperPlaneIcon />
          </Button>
        </CardFooter>
      </Card>
    </AssistantProvider>
  );
};

export default VirtualAssistant;
