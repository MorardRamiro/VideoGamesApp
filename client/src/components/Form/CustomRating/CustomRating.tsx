import React from 'react';
import { Grid, InputLabel, Typography } from '@mui/material';
import { StyledRating } from './styles';

export default function CustomRating(props: any) {
  const { value, onChange } = props;
  return (
    <Grid>
      <InputLabel>
        <Typography component="legend">Rating</Typography>
      </InputLabel>
      <StyledRating
        name="simple-controlled"
        value={value}
        onChange={onChange}
        precision={.5}
      />
    </Grid>
  );
};
