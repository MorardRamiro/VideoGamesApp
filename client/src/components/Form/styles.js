import { styled } from '@mui/material/styles';
import { Avatar, Box, Grid, Paper } from '@mui/material';

export const StyledGrid = styled(Grid)`
  margin-inline: 12px;
  & .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    top: -7px;
  }
  & .css-ahj2mt-MuiTypography-root {
    margin-top: -7px;
  }
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  margin-inline: 8px;
  margin-top: 12px;
  margin-bottom: -5px;
  & .css-kepfjy-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
`

export const StyledButtonGrid = styled(Grid)`
  margin-bottom: 12px;
  display: flex;
  justify-content: center;  
`

export const StyledPaper = styled(Paper)`
  background-color: yellow;
  max-width: 800px;
`

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`

export const StyledAvatar = styled(Avatar)`
  display: contents;
`

export const StyledAvatarGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`
