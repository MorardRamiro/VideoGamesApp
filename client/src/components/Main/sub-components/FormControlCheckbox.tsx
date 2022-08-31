import React from 'react';
import { FormControlLabel, Checkbox, Grid } from '@mui/material';

export function FormControlCheckbox(props: any) {
  const { onChange, state } = props;

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <FormControlLabel
          label='All'
          control={
            <Checkbox
              disabled={state === ''}
              value={''}
              checked={state === ''}
              indeterminate={state === 'official' || state === 'custom'}
              onChange={onChange}
              size='small'
            />
          }
        />
      </Grid>
      <Grid container>
        <Grid xs={1} />
        <Grid xs={11}>
          <FormControlLabel
            disabled={state === 'official'}
            value={'official'}
            label='Official'
            control={<Checkbox size='small' checked={state === 'official' || state === ''} onChange={onChange} />}
          />
        </Grid>
        <Grid xs={1} />
        <Grid xs={11}>
          <FormControlLabel
            disabled={state === 'custom'}
            value={'custom'}
            label='Custom'
            control={<Checkbox size='small' checked={state === 'custom' || state === ''} onChange={onChange} />}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
