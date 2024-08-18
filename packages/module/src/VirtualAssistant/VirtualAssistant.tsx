import React, { KeyboardEventHandler } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Icon,
  TextArea
} from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import classnames from "clsx";
import { PaperPlaneIcon } from '@patternfly/react-icons';
import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';

const useStyles = createUseStyles({
  card: {
    width: "400px",
    height: "600px",
    overflow: "hidden",
    borderRadius: "20px 20px 20px 20px",
    "@media screen and (max-width: 768px)": {
      height: "420px",
      width: "100%",
    },
    "&.fullPage": {
      width: "100%",
      height: "%",
      borderRadius: "0",
    },
  },
  cardHeader: {
    background: "linear-gradient(180deg, #C9190B 0%, #A30000 100%, #3D0000 100.01%)",
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.40) !important",
    height: "74px",
    marginBottom: "6px",
    "&:first-child": {
      paddingBlockStart: "10px",
      paddingInlineEnd: "10px",
    },
    "& .pf-v5-c-button.pf-m-plain": {
      color: "var(--pf-v5-global--Color--light-100)",
      paddingLeft: "0",
      paddingRight: "0",
      "& .pf-v5-svg": {
        width: ".8em",
        height: ".8em",
        verticalAlign: "1em",
      }
    }
  },
  cardTitle: {
    alignSelf: "center",
    color: "var(--pf-v5-global--Color--light-100)",
    fontSize: "var(--pf-v5-global--FontSize--lg)",
    fontWeight: "400",
    lineHeight: "27px",
    paddingLeft: "var(--pf-v5-global--spacer--sm)",
  },
  titleIcon: {
    marginLeft: "5px",
    marginTop: "4px",
    fontSize: "28px",
    color: "var(--pf-v5-global--danger-color--100)",
  },
  titleIconWrapper: {
    display: "block",
    float: "left",
    width: "38px",
    height: "38px",
    background: "var(--pf-v5-global--BackgroundColor--100)",
    borderRadius: "20px",
    marginRight: "7px",
  },
  cardBody: {
    backgroundColor: "var(--pf-v5-global--BackgroundColor--100)",
    paddingLeft: "var(--pf-v5-global--spacer--md)",
    paddingRight: "var(--pf-v5-global--spacer--md)",
    paddingTop: "var(--pf-v5-global--spacer--lg)",
    overflowY: "scroll",
    "&::-webkit-scrollbar": "display: none",
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
  textArea: {
    resize: "none",
    backgroundColor: "var(--pf-v5-global--BackgroundColor--200)",
    borderRadius: "50px 50px 50px 50px",
    color: "var(--pf-v5-global--Color--light-100)",
    paddingRight: "50px",
    paddingLeft: "20px",

  },
  sendButton: {
    position: "absolute",
    bottom: "22px",
    right: "14px",
  },
})

export interface VirtualAssistantProps {
  /** Messages rendered within the assistant */
  children?: React.ReactNode;
  /** Header title for the assistant */
  title?: React.ReactNode;
  /** Input's placeholder for the assistant */
  inputPlaceholder?: string;
  /** Input's content */
  message?: string;
  /** Header actions of the assistant */
  actions?: React.ReactNode;
  /** Input's content change */
  onChangeMessage?: (event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  /** Fire when clicking the Send (Plane) icon */
  onSendMessage?: (message: string) => void;
  /** Disables the text input */
  isInputDisabled?: boolean;
  /** Disables the send button */
  isSendButtonDisabled?: boolean;
  /** Virtual assistant icon */
  icon?: React.ComponentType;
  /** Expands the assistant to fill the entire page */
  isFullPage?: boolean;
  /** Allows to overwrite the default header with a custom one */
  customHeader?: React.ReactNode;
}

export const VirtualAssistant: React.FunctionComponent<VirtualAssistantProps> = ({
  children,
  title = 'Virtual Assistant',
  inputPlaceholder = 'Send a message...',
  message = '',
  actions,
  onChangeMessage,
  onSendMessage,
  isInputDisabled = false,
  isSendButtonDisabled = false,
  icon: VAIcon = undefined,
  isFullPage = false,
  customHeader = null
}: VirtualAssistantProps) => {
  const classes = useStyles();

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
    <Card className={classnames(classes.card, { fullPage: isFullPage }, "pf-v5-u-box-shadow-lg")}>
      {customHeader ? customHeader : (
        <CardHeader className={classes.cardHeader} actions={actions ? {
          actions
        } : undefined}>
          <Flex className="pf-v5-u-flex-direction-row pf-v5-u-justify-content-center">
            <div className={classes.titleIconWrapper} >
              <Icon className={classes.titleIcon}>
                {VAIcon ? <VAIcon /> : <RobotIcon />}
              </Icon>
            </div>
            <div className={classes.cardTitle} data-test-id="assistant-title">
              {title}
            </div>
          </Flex>
        </CardHeader>
      )}
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
        >
        </TextArea>
        <Button className={classes.sendButton} isDisabled={isSendButtonDisabled} data-test-id="assistant-send-button" aria-label="Virtual assistant's message" variant="plain" onClick={onSendMessage ? () => {
          onSendMessage(message);
        } : undefined}>
          <PaperPlaneIcon />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VirtualAssistant;
