import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses }  from '@mui/material/Tooltip';
import React from 'react';

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} disableInteractive arrow  placement="right" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[2],
    fontSize: 14,
    width: 170,
    lineHeight: 2,
    fontFamily: 'Raleway',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    fontSize: 27,
    "&:before": {
      border: "2px solid #E8E8E8",
  }
  }
}));