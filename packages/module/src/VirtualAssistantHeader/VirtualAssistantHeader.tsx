import React from 'react';
import { CardHeader, CardHeaderProps, Flex, Icon } from '@patternfly/react-core';
import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';
import { createVaStyles } from '../VirtualAssistantTheme';

export interface VirtualAssistantHeaderProps extends Omit<CardHeaderProps, 'actions' | 'title'> {
  /** Header title for the assistant */
  title?: React.ReactNode;
  /** Virtual assistant icon */
  icon?: React.ComponentType;
  /** Header actions of the assistant */
  actions?: React.ReactNode;
  /** Custom ouiaId */
  ouiaId?: string;
};

const useStyles = createVaStyles((theme) => ({
  cardHeader: {
    background: theme.components.VirtualAssistantHeader.background,
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.40) !important",
    height: "74px",
    marginBottom: "6px",
    "&:first-child": {
      paddingBlockStart: "10px",
      paddingInlineEnd: "10px",
    },
    "& .pf-v5-c-button.pf-m-plain": {
      color: theme.global.colors.light100,
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
    color: theme.global.colors.light100,
    fontSize: "var(--pf-v5-global--FontSize--lg)",
    fontWeight: "400",
    lineHeight: "27px",
    paddingLeft: "var(--pf-v5-global--spacer--sm)",
  },
  titleIcon: {
    marginLeft: "5px",
    marginTop: "4px",
    fontSize: "28px",
    color: theme.global.colors.primary,
  },
  titleIconWrapper: {
    display: "block",
    float: "left",
    width: "38px",
    height: "38px",
    background: theme.global.colors.background100,
    borderRadius: "20px",
    marginRight: "7px",
  },
}));
  
export const VirtualAssistantHeader: React.FC<VirtualAssistantHeaderProps> = ({
  title = 'Virtual Assistant',
  icon: VAIcon = RobotIcon,
  actions,
  ouiaId = 'VirtualAssistant'
}: VirtualAssistantHeaderProps) => {
  const classes = useStyles();

  return (
    <CardHeader className={classes.cardHeader} actions={actions ? { actions } : undefined}>
      <Flex className="pf-v5-u-flex-direction-row pf-v5-u-justify-content-center">
        <div className={classes.titleIconWrapper}>
          <Icon className={classes.titleIcon}>
            <VAIcon />
          </Icon>
        </div>
        <div className={classes.cardTitle} data-ouia-component-id={`${ouiaId}-title`}>
          {title}
        </div>
      </Flex>
    </CardHeader>
  );
};

export default VirtualAssistantHeader;
