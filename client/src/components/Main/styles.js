import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import theme from '../../theme/palette';

export const StyledGrid = styled(Grid)`
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
`

export const StyledGlobalGrid = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledPaper = styled(Paper)`
  background: ${theme.transparentYellow};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-inline-start: 40px;
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`

export const StyledGridCheckbox = styled(Grid)`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`
export const StyledGridSwitch = styled(Grid)`
  padding-left: 20px;
  margin: 5px;
`

export const PaginationGrid = styled(Grid)`
  padding: 10px;
`
