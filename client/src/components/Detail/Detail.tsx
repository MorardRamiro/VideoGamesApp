import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteVideoGame, getVideoGameDetail } from '../../actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button, Grid, Typography } from '@mui/material';
import { Genre } from '../../interfaces';
import { Delete } from '@mui/icons-material';
import { StyledGrid, StyledAvatar, StyledPaper, StyledGridContainer, StyledTitlePaper, StyledTypography, StyledGlobalGrid, StyledDescriptionTypography } from './styles';
import moment from 'moment';

export function Detail() {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const fetchVideoGameDetail = useCallback(() => {
    dispatch(getVideoGameDetail(id));
  }, [dispatch, id]);

  const fetchDeleteVideoGame = useCallback(() => {
    dispatch(deleteVideoGame(id))
  }, [dispatch, id]);

  const {
    videoGameDetail,
  } = useAppSelector((rootReducer) => rootReducer.videoGames);

  useEffect(() => {
    fetchVideoGameDetail();
    document.getElementById('description')!.innerHTML = videoGameDetail.description;
  }, [fetchVideoGameDetail, videoGameDetail.description]);

  const handleDeleteButton = () => {
    fetchDeleteVideoGame();
  };

  return (
    <StyledGridContainer container>
      <Grid item xs={10}>
        <StyledTitlePaper>
          <StyledTypography variant='h3'>{videoGameDetail && videoGameDetail.name}</StyledTypography>
          <StyledAvatar
            alt=''
            src={videoGameDetail && videoGameDetail.image}
            sx={{ height: '300px', width: '300px', float: 'left', 'shape-outside': 'circle()' }}
          />
          <StyledDescriptionTypography>
            <div id='description' />
          </StyledDescriptionTypography>
        </StyledTitlePaper>
      </Grid>
      <StyledPaper>
        <StyledGrid item>
          <Typography>
            Released: {videoGameDetail && moment(videoGameDetail.release_date).format('DD/MM/YYYY')}
          </Typography>
          <Typography>
            Rating: {videoGameDetail && videoGameDetail.rating}
          </Typography>
          <Typography>
            Platforms:
            <ul>
              {videoGameDetail && videoGameDetail.platforms && videoGameDetail.platforms.map((e: Genre) =>
                <li key={e.id}>
                  {e.name}
                </li>)}
            </ul>
          </Typography>
          <Typography>
            Genres:
            <ul>
              {videoGameDetail && videoGameDetail.genres && videoGameDetail.genres.map((e: Genre) =>
                <li key={e.id}>
                  {e.name}
                </li>)}
            </ul>
          </Typography>
          <StyledGlobalGrid>
            {isNaN(Number(id)) && <Button onClick={handleDeleteButton} variant="outlined" startIcon={<Delete />}>
              Delete
            </Button>}
          </StyledGlobalGrid>
        </StyledGrid>
      </StyledPaper>
    </StyledGridContainer>
  );
};
