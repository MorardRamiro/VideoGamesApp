import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';
import theme from '../../../theme/palette';

export const StyledCard = styled(Card)`
  max-width: 345px;
  background: ${theme.highTransparencyBlack};
`

export const StyledTypography = styled(Typography)`
  inline-size: max-content; 
  color: ${theme.black};
  display: inline-block;
  text-decoration: none;
`

export const StyledCardContent = styled(CardContent)`
  display: grid;
  justify-content: center;
`
