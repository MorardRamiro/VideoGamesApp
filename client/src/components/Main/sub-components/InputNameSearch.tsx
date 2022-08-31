import React from 'react';
import { TextField, Grid } from '@mui/material';

export function InputNameSearch(props: any) {
  const { onChange, label, multiline, error, helperText } = props;
  return (
    <Grid>
      <TextField
        label={label}
        variant='outlined'
        size='small'
        fullWidth
        onChange={onChange}
        multiline={multiline}
        error={error}
        helperText={helperText}
      />
    </Grid>
  )
};
