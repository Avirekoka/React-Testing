import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import React from 'react'

const MUIMode = () => {
    const theme = useTheme();
  return (
      <>
          <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
      </>
  )
}

export default MUIMode;