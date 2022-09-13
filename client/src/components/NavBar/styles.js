import { styled } from '@mui/material/styles';
import { AppBar, Grid } from '@mui/material';
import theme from '../../theme/palette';

export const StyledAppBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: ${theme.lowTransparencyBlack};
  max-height: 50px;
  padding: 5px;
  & .css-1ujnqem-MuiTabs-root {
    min-height: 0px;
  }
`
export const StyledGrid = styled(Grid)`
  margin-inline: 2px;
`
