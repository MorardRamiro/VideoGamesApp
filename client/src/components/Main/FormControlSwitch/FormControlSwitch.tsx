
import { Grid, Typography, Switch } from '@mui/material';
import { StyledAvatar, DisabledTypography } from './styles';

export function FormControlSwitch(props: any) {
  const { onClick, defaultLabel, alternativeLabel, defaultIcon, alternativeIcon, defaultValue, alternativeValue, currentValue, label } = props;
  return (
    <div>
      <Grid item><Typography>{label}</Typography></Grid>
      <Grid container>
        <Grid item>
          <Switch onClick={onClick} defaultChecked
            checkedIcon={<StyledAvatar>{defaultIcon}</StyledAvatar>}
            icon={<StyledAvatar>{alternativeIcon}</StyledAvatar>}
          /></Grid>
        <Grid item>
          {currentValue === defaultValue ? <Typography>{defaultLabel}</Typography> : <DisabledTypography>{defaultLabel}</DisabledTypography>}
          {currentValue === alternativeValue ? <Typography>{alternativeLabel}</Typography> : <DisabledTypography>{alternativeLabel}</DisabledTypography>}
        </Grid>
      </Grid>
    </div>
  )
};
