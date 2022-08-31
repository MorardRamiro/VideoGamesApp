import { styled } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  color: white;
  background-color: red;
`
export const EnabledTypography = styled(Typography)`
`

export const DisabledTypography = styled(Typography)`
  text-decoration: line-through;
  color: grey;
  font-size: smaller;
`
