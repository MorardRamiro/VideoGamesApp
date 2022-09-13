import React, { useState } from 'react';
import { Button, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledDialog, StyledDialogContentText, StyledDialogActions } from './styles';

export default function CustomDialog(props: any) {
  const { name, icon, title, text, success, handleClick } = props;

  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const handleClickOpenOne = () => {
    setOpenOne(true);
  };

  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const handleClickOpenTwo = (e: any) => {
    if (handleClick(e)) {
      setOpenOne(false);
      setOpenTwo(true);
    }
  };

  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  return (
    <Grid>
      <Button variant='outlined' endIcon={icon} onClick={handleClickOpenOne}>
        <Typography>
          {name}
        </Typography>
      </Button>
      <StyledDialog open={openOne} onClose={handleCloseOne}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <StyledDialogContentText>
            {text}
          </StyledDialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <Button variant='outlined' endIcon={icon} onClick={handleClickOpenTwo}>
            <Typography>
              {name}
            </Typography>
          </Button>
          <Button variant='outlined' endIcon={<Close />} onClick={handleCloseOne} color='error'>
            <Typography>
              CANCEL
            </Typography>
          </Button>
        </StyledDialogActions>
      </StyledDialog>
      <StyledDialog open={openTwo} onClose={handleCloseTwo}>
        <DialogTitle>
          Success!
        </DialogTitle>
        <DialogContent>
          <StyledDialogContentText>
            {success}
          </StyledDialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleCloseTwo} component={Link} to={'/'} color='success'>
            <Typography>
              ACCEPT
            </Typography>
          </Button>
        </DialogActions>
      </StyledDialog>
    </Grid>
  )
}
