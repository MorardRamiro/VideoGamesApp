import React from 'react';
import { Grid, Rating, Typography } from '@mui/material';

export default function CustomRating(props: any) {
  const { value, onChange } = props;
  return (
    <Grid>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={onChange}
        precision={.5}
      />
    </Grid>
  );
};
