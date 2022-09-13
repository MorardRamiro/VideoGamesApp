import { styled } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContentText } from '@mui/material';
import theme from '../../../theme/palette';

export const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    color: ${theme.green};
    background: ${theme.mediumTransparencyBlack};
  }
`

export const StyledDialogContentText = styled(DialogContentText)`
  color: ${theme.green};
`

export const StyledDialogActions = styled(DialogActions)`
  display: flex;
  justify-content: space-evenly;
`
