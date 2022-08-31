import { styled } from '@mui/material/styles';
import { Paper, Grid, Avatar, Typography } from '@mui/material';

export const StyledPaper = styled(Paper)`
  background-color: yellow;
  padding-inline: 15px;
  padding-block: 5px;
  height: auto;
  margin: 5px
`

export const StyledGlobalGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`

export const StyledGrid = styled(Grid)`
  min-width: max-content;
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  justify-content: space-evenly;
`

export const StyledAvatar = styled(Avatar)`
  margin: 25px;
`

export const StyledTitlePaper = styled(Paper)`
  background-color: yellow;
  padding: 50px;
  min-height: 400px;
`

export const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  padding-inline: 10px;
`

export const StyledDescriptionTypography = styled(Typography)`
  text-align: justify;
  text-indent: 2em;
  white-space: break-spaces;
`
