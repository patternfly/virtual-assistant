import React from 'react';
import { Alert, TextContent } from '@patternfly/react-core';
import { createVaStyles } from '../VirtualAssistantTheme';

export interface ConversationAlertProps {
    /** Content for conversation alert */
  title: React.ReactNode;
  /** Variant type for conversation alert */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'custom';
  children?: React.ReactNode;
}

const useStyles = createVaStyles({
  banner: {
    paddingTop: "0",
    paddingBottom: "var(--pf-v5-global--spacer--md)",
  },
  bannerAlert: {
    "& .pf-v5-c-alert__title": {
      marginTop: "0",
      fontSize: "var(--pf-v5-global--FontSize--sm)",
    }
  }
})

export const ConversationAlert:React.FunctionComponent<ConversationAlertProps> = ({
  variant= 'info',
  title,
  children = ''
}: ConversationAlertProps) => {
  const classes = useStyles();
  return (
    <TextContent className={classes.banner}>
      <Alert className={classes.bannerAlert} variant={variant} isInline title={title} component="h6">
        {children}
      </Alert>
    </TextContent>
  );
};

export default ConversationAlert;
