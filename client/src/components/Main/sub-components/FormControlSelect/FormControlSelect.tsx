import React from 'react';
import { MenuItem, OutlinedInput, Select, Box, Chip, FormControl, FormHelperText } from '@mui/material';
import { Genre } from '../../../../interfaces';
import { Cancel } from '@mui/icons-material';
import { StyledInputLabel } from './styles';

export function FormControlSelect(props: any) {
  const { onChange, options, name, state, onDelete, placeholder, error, helperText
  } = props;

  return (
    <Box>
      <FormControl fullWidth error={error}>
        <StyledInputLabel>{name}</StyledInputLabel>
        <Select
          size='small'
          input={<OutlinedInput label={name} />}
          displayEmpty
          variant='outlined'
          onChange={onChange}
          value={state}
          renderValue={(selected: any) => {
            if (selected.length === 0) {
              return (
                <div>{placeholder}</div>
              )
            } else {
              return (
                <Box>
                  {selected.map((value: any) => (
                    <Chip onDelete={() => onDelete(value)} key={value} label={typeof (selected[0]) === 'number' ? options.find((el: Genre) => el.id === value).name : typeof (value.id) === 'number' ? value.name : value}
                      deleteIcon={
                        <Cancel onMouseDown={(event: any) => event.stopPropagation()}
                        />}
                    />
                  ))}
                </Box>
              )
            }
          }}
        >
          {options?.map((obj: Genre) => <MenuItem key={obj.id} value={obj.id}>{obj.name}</MenuItem>)}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};
