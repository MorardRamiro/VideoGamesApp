import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

export const StyledCard = styled(Card)`
  max-width: 345px;
  background: rgba(0,0,0,.25);
`

export const StyledTypography = styled(Typography)`
  inline-size: max-content; 
  color: black;
  display: inline-block;
  text-decoration: none;
`

export const StyledCardContent = styled(CardContent)`
  display: grid;
  justify-content: center;
`
