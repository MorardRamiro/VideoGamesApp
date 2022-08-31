import { AppBar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: lightgray;
  padding: 5px;
  & .css-1ujnqem-MuiTabs-root {
    min-height: 0px
  }
`
export const StyledGrid = styled(Grid)`
  margin-inline: 2px;
`
