import { styled } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import theme from '../../../theme/palette';

export const StyledAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  color: ${theme.transparentYellow};
  background-color: ${theme.blue};
  & .css-i4bv87-MuiSvgIcon-root {
    height: 18px;
  }
`
export const EnabledTypography = styled(Typography)`
`

export const DisabledTypography = styled(Typography)`
  text-decoration: line-through;
  color: ${theme.grey};
  font-size: smaller;
`
