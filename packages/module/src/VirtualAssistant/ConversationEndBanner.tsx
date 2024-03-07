import React from 'react';
import { Alert, TextContent } from '@patternfly/react-core';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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

export const ConversationEndBanner = () => {
  const classes = useStyles();
  return (
    <TextContent className={classes.banner}>
      <Alert className={classes.bannerAlert} variant="info"  isInline title="You can start a new conversation at anytime by typing below." component="h6" />
    </TextContent>
  );
};
