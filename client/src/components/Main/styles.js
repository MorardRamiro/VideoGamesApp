import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)`
  margin: 5px;
  }
`

export const StyledGlobalGrid = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledPaper = styled(Paper)`
  background: rgba(250,250,0,.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;  
`

export const StyledGridCheckbox = styled(Grid)`
  display: flex;
  align-content: center;
`
export const StyledGridSwitch = styled(Grid)`
  padding-left: 20px;
  margin: 5px;
`

export const PaginationGrid = styled(Grid)`
  padding: 10px;
`
