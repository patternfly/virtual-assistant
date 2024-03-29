import * as React from 'react';
import { Button, ButtonProps, ButtonVariant } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import classnames from "clsx";

const useStyles = createUseStyles({
  button: {
    color: "var(--pf-v5-global--Color--light-100)"
  }
});


export type VirtualAssistantActionProps = ButtonProps;

export const VirtualAssistantAction: React.FunctionComponent<ButtonProps> = ({
  variant = ButtonVariant.plain,
  className,
  ...otherProps
}) => {
  const classes = useStyles();
  return <Button variant={variant} className={classnames(className, classes.button)} {...otherProps} ></Button>
}

export default VirtualAssistantAction;
