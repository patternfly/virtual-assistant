import React from 'react';
import { CardHeader, CardHeaderProps, Flex, Icon } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
import RobotIcon from '@patternfly/react-icons/dist/js/icons/robot-icon';

export interface VirtualAssistantHeaderProps extends Omit<CardHeaderProps, 'actions' | 'title'> {
  /** Header title for the assistant */
  title?: React.ReactNode;
  /** Virtual assistant icon */
  icon?: React.ComponentType;
  /** Header actions of the assistant */
  actions?: React.ReactNode;
};

const useStyles = createUseStyles({
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
});
  
export const VirtualAssistantHeader: React.FC<VirtualAssistantHeaderProps> = ({
  title = 'Virtual Assistant',
  icon: VAIcon = RobotIcon,
  actions
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
        <div className={classes.cardTitle}>
          {title}
        </div>
      </Flex>
    </CardHeader>
  );
};

export default VirtualAssistantHeader;
