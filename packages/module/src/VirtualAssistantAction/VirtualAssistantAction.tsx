import * as React from 'react';
import { Button, ButtonProps, ButtonVariant } from '@patternfly/react-core';
import clsx from "clsx";
import { createVaStyles } from '../VirtualAssistantTheme';

const useStyles = createVaStyles((theme) => ({
  button: {
    color: theme.global.colors.light100
  }
}));


export type VirtualAssistantActionProps = ButtonProps;

export const VirtualAssistantAction: React.FunctionComponent<ButtonProps> = ({
  variant = ButtonVariant.plain,
  className,
  ...otherProps
}: VirtualAssistantActionProps) => {
  const classes = useStyles();
  return <Button variant={variant} className={clsx(className, classes.button)} {...otherProps}></Button>
}

export default VirtualAssistantAction;
