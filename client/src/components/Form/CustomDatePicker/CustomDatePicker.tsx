import React from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledTextField } from './styles';

export default function CustomDatePicker(props: any) {
  const { onChange, value, shouldDisableDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} xs={{ 'max-height': '50px' }}>
      <DesktopDatePicker
        label='Release date'
        value={value}
        onChange={onChange}
        renderInput={(params) => <StyledTextField {...params} />}
        shouldDisableDate={shouldDisableDate}
      />
    </LocalizationProvider>
  )
};
