import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, InputGroup, InputGroupText, TextArea } from '@patternfly/react-core'
import PlaneIcon from '@patternfly/react-icons/dist/esm/icons/paper-plane-icon';

import { LoadingMessageEntry } from './LoadingMessageEntry';
import { AssistantMessageEntry } from './AssistantMessageEntry';
import UserMessageEntry from './UserMessageEntry';
import { ConversationEndBanner } from './ConversationEndBanner';
import { SystemMessageEntry } from './SystemMessageEntry';

import { createUseStyles } from 'react-jss';
import classnames from "clsx";

const useStyles = createUseStyles({
  card: {
    width: "350px",
    height: "550px",
    overflow: "hidden", 
    "@media screen and (max-width: 768px)": {
      height: "420px",
      width: "100%",
    },
  },
  cardHeader: {
    background: "var(--pf-v5-global--BackgroundColor--dark-400)",
  },
  cardTitle: {
    color: "var(--pf-v5-global--Color--light-100)",
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
    padding: "0",
  },
  inputGroup: {
    height: "60px",
  },
  textArea: {
    resize: "none",
  }
})

export const VirtualAssistant = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader}>
        <CardTitle className={classnames(classes.cardTitle,"pf-v5-u-font-size-xl")}>
          Virtual Assistant
        </CardTitle>
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <AssistantMessageEntry />
        <UserMessageEntry />
        <LoadingMessageEntry />
        <ConversationEndBanner />
        <SystemMessageEntry />
      </CardBody>
      <CardFooter className={classes.cardFooter}>      
        <InputGroup className={classes.inputGroup}>
          <TextArea
            className={classes.textArea}
            placeholder="Type a message..."
            name="user-query"
            type="text"
            aria-label="User question"
          />
          <InputGroupText id="username">
            <Button variant="plain" className="pf-v5-u-px-sm">
              <PlaneIcon />
            </Button>
          </InputGroupText>
        </InputGroup>
      </CardFooter>
    </Card>
  );
};

export default VirtualAssistant;
