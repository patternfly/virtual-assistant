import React, { KeyboardEventHandler, useMemo } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  TextArea
} from '@patternfly/react-core';
import { DefaultTheme, ThemeProvider } from 'react-jss';
import clsx from "clsx";
import { PaperPlaneIcon, RobotIcon } from '@patternfly/react-icons';
import { VirtualAssistantProvider } from '../VirtualAssistantContext';
import VirtualAssistantHeader, { VirtualAssistantHeaderProps } from '../VirtualAssistantHeader';
import { createVaStyles, defaultTheme } from '../VirtualAssistantTheme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(item: any): boolean {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
  if (!sources.length) {return target;}
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        if (isObject(sourceValue) && isObject(target[key])) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          target[key] = deepMerge(target[key] as any, sourceValue as any);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (target as any)[key] = sourceValue;
        }
      }
    }
  }
  // To avoid cross-modification of themes when using multiple instances on the same screen, a new object has to be returned here.
  return deepMerge({ ...target }, ...sources);
}

const useStyles = createVaStyles((theme) => ({
  card: {
    width: "400px",
    height: "600px",
    overflow: "hidden",
    borderRadius: theme.components.VirtualAssistant.card.borderRadius,
    "@media screen and (max-width: 768px)": {
      height: "420px",
      width: "100%",
    },
    "&.fullPage": {
      width: "100%",
      height: "100%",
      borderRadius: "0",
    }
  },
  cardBody: {
    backgroundColor: theme.global.colors.background100,
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
      color: theme.global.colors.primary,
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
    backgroundColor: theme.global.colors.background200,
    borderRadius: theme.components.VirtualAssistant.textArea.borderRadius,
    color: theme.global.colors.light100,
    paddingRight: "50px",
    paddingLeft: "20px",
  },
  sendButton: {
    position: "absolute",
    bottom: "22px",
    right: "14px",
  },
}));

export interface VirtualAssistantProps extends Omit<VirtualAssistantHeaderProps, 'ouiaId'> {
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
  /** VirtualAssistant OUIA ID */
  ouiaId?: string;
  /** VirtualAssistant theme */
  theme?: DefaultTheme;
}

const VirtualAssistantImplementation: React.FunctionComponent<VirtualAssistantProps> = ({
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
  ouiaId = 'VirtualAssistant'
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
    <VirtualAssistantProvider assistantIcon={icon}>
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
    </VirtualAssistantProvider>
  );
};

export const VirtualAssistant: React.FunctionComponent<VirtualAssistantProps> = ({ theme, ...rest }: VirtualAssistantProps) => {  
  const vaTheme = useMemo(() => deepMerge({ ...defaultTheme }, theme ?? {}), [ theme ])
  return (
    <ThemeProvider theme={vaTheme}>
      <VirtualAssistantImplementation {...rest}/>
    </ThemeProvider>
  )};

export default VirtualAssistant;
