import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogContentText } from '@mui/material';
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

export const StyledButton = styled(Button)`
  &.Mui-disabled {
    color: ${theme.transparentWhite};
    border-color: ${theme.transparentWhite};
  }
`
