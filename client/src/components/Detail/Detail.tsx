import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteVideoGame, getVideoGameDetail } from '../../actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Grid, List, ListItem, Typography } from '@mui/material';
import { Genre } from '../../interfaces';
import { Delete } from '@mui/icons-material';
import {
  StyledGrid,
  StyledAvatar,
  StyledPaper,
  StyledGridContainer,
  StyledTitlePaper,
  StyledTypography,
  StyledGlobalGrid,
  StyledDescriptionTypography
} from './styles';
import moment from 'moment';
import CustomDialog from '../Form/CustomDialog/CustomDialog';

export default function Detail() {
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
    document.getElementById('description')!.innerHTML = (videoGameDetail && videoGameDetail.description) || '';
  }, [fetchVideoGameDetail, videoGameDetail]);

  const handleDeleteButton = () => {
    fetchDeleteVideoGame();
    return true;
  };

  return (
    <StyledGridContainer container>
      <Grid item xs={10}>
        <StyledTitlePaper>
          <StyledTypography variant='h3'>{videoGameDetail && videoGameDetail.name}</StyledTypography>
          <StyledAvatar
            alt=''
            src={videoGameDetail && videoGameDetail.image}
            sx={{ height: '300px', width: '300px', float: 'left', shapeOutside: 'circle()' }}
          />
          <StyledDescriptionTypography id='description' />
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
          <Grid>
            <Typography>Platforms:</Typography>
            <List>
              {videoGameDetail && videoGameDetail.platforms && videoGameDetail.platforms.map((e: Genre) =>
                <ListItem key={e.id}>
                  <Typography>{e.name}</Typography>
                </ListItem>)}
            </List>
          </Grid>
          <Grid>
            <Typography>Genres:</Typography>
            <List>
              {videoGameDetail && videoGameDetail.genres && videoGameDetail.genres.map((e: Genre) =>
                <ListItem key={e.id}>
                  {e.name}
                </ListItem>)}
            </List>
          </Grid>
          <StyledGlobalGrid>
            {isNaN(Number(id)) &&
              <CustomDialog
                handleClick={handleDeleteButton}
                name={'DELETE'}
                icon={<Delete />}
                title={'Delete VideoGame?'}
                text={'You are about to delete this videogame!'}
                success={'You have successfully deleted the videogame!'}
              />}
          </StyledGlobalGrid>
        </StyledGrid>
      </StyledPaper>
    </StyledGridContainer>
  );
};
