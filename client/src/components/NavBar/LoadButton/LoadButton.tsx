import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { countTotalVideoGames, createGenres, createPlatforms, createVideoGames } from '../../../actions';
import { Button, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { Update } from '@mui/icons-material';
import { StyledButton, StyledDialog, StyledDialogContentText } from './styles';

export default function LoadButton() {

  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dispatch = useAppDispatch();

  const fetchTotalCount = useCallback(() => {
    dispatch(countTotalVideoGames());
  }, [dispatch]);

  useEffect(() => {
    fetchTotalCount();
  }, [fetchTotalCount]);

  const {
    totalCount
  } = useAppSelector((rootReducer) => rootReducer.videoGames);

  const fetchCreateServer = useCallback(() => {
    dispatch(createVideoGames());
    dispatch(createGenres());
    dispatch(createPlatforms());
  }, [dispatch]);

  const handleClickOpen = () => {
    fetchCreateServer();
    setOpen(true);
    setClicked(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };


  return (
    <Grid>
      <StyledButton variant='outlined' endIcon={<Update />} onClick={handleClickOpen} disabled={clicked || totalCount === null || totalCount > 0}>
        <Typography>
          LOAD
        </Typography>
      </StyledButton>
      <StyledDialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography>
            Success!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StyledDialogContentText>
            You have successfully loaded the server!
          </StyledDialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} color='success'>
            <Typography>
              ACCEPT
            </Typography>
          </Button>
        </DialogActions>
      </StyledDialog>
    </Grid>
  )
};
