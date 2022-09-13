import React, { useState, useCallback, useEffect, ChangeEvent, MouseEvent } from 'react';
import { countVideoGames, getGenres, getVideoGames, resetVideoGames } from '../../actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Grid } from '@mui/material';
import CardHolder from './CardHolder/CardHolder';
import { FormControlCheckbox } from './FormControlCheckbox/FormControlCheckbox';
import { FormControlSelect } from './FormControlSelect/FormControlSelect';
import { FormControlSwitch } from './FormControlSwitch/FormControlSwitch';
import { InputNameSearch } from './InputNameSearch/InputNameSearch';
import PaginationButtons from './PaginationButtons/PaginationButtons';
import { Abc, ArrowDropDown, ArrowDropUp, Star } from '@mui/icons-material';
import { StyledGrid, StyledPaper, StyledGridContainer, StyledGridCheckbox, StyledGridSwitch, PaginationGrid, StyledGlobalGrid } from './styles';

export default function Main() {
  const [name, setName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState([] as number[]);

  const dispatch = useAppDispatch();

  const fetchVideoGames = useCallback(() => {
    dispatch(resetVideoGames());
    dispatch(countVideoGames(name, type, genre));
    dispatch(getVideoGames(name, pageNumber, order, orderBy, type, genre));
  }, [dispatch, name, pageNumber, order, orderBy, type, genre]);

  const fetchGenres = useCallback(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    fetchGenres();
    fetchVideoGames();
  }, [fetchVideoGames, fetchGenres]);

  const {
    videoGames,
    genres,
  } = useAppSelector((rootReducer) => rootReducer);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setPageNumber(1);
  };

  const handleOrderChange = () => {
    if (order === 'asc') {
      setOrder('desc');
      setPageNumber(1);
    } else {
      setOrder('asc');
      setPageNumber(1);
    }
  };

  const handleOrderByChange = () => {
    if (orderBy === 'rating') {
      setOrderBy('');
      setPageNumber(1);
    } else {
      setOrderBy('rating');
      setPageNumber(1);
    }
  };

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (type === '') {
      if (value === 'official') {
        setType('custom');
      } else if (value === 'custom') {
        setType('official');
      }
    } else {
      setType('');
    }
    setPageNumber(1);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newGenre = Number(event.target.value);
    if (genre.includes(newGenre)) {
      setGenre([...genre.filter(elem => elem !== newGenre)]);
      setPageNumber(1);
    } else {
      setGenre([...genre, Number(event.target.value)]);
      setPageNumber(1);
    }
  };

  const handleGenreCancel = (value: number) => {
    setGenre([...genre.filter(elem => elem !== value)]);
    setPageNumber(1);
  }

  const handleSelectPage = (_event: MouseEvent, value: number) => {
    setPageNumber(value);
  };

  return (
    <StyledGlobalGrid container>
      <StyledGridContainer item xs={9}>
        <StyledPaper>
          <Grid container>
            <StyledGridContainer item xs={9}>
              <Grid container>
                <StyledGrid item xs={7}>
                  <InputNameSearch
                    onChange={handleNameChange}
                    label={'Name'}
                  />
                </StyledGrid>
                <StyledGridSwitch item xs={4}>
                  <FormControlSwitch
                    onClick={handleOrderByChange}
                    defaultLabel={'Alphabetically'}
                    alternativeLabel={'Rating'}
                    defaultIcon={<Abc />}
                    alternativeIcon={<Star />}
                    defaultValue={''}
                    alternativeValue={'rating'}
                    currentValue={orderBy}
                    label={'Order by:'}
                  />
                </StyledGridSwitch>
              </Grid>
              <Grid container>
                <StyledGrid item xs={7}>
                  <FormControlSelect
                    onChange={handleGenreChange}
                    onDelete={handleGenreCancel}
                    options={genres.genres}
                    name={'Genre'}
                    state={genre}
                  />
                </StyledGrid>
                <StyledGridSwitch item xs={4}>
                  <FormControlSwitch
                    onClick={handleOrderChange}
                    defaultLabel={'Ascending'}
                    alternativeLabel={'Descending'}
                    defaultIcon={<ArrowDropUp />}
                    alternativeIcon={<ArrowDropDown />}
                    defaultValue={'asc'}
                    alternativeValue={'desc'}
                    currentValue={order}
                    label={'Direction:'}
                  />
                </StyledGridSwitch>
              </Grid>
            </StyledGridContainer>
            <StyledGridCheckbox item xs={2}>
              <FormControlCheckbox
                onChange={handleTypeChange}
                state={type}
              />
            </StyledGridCheckbox>
          </Grid>
        </StyledPaper>
      </StyledGridContainer>
      <PaginationGrid>
        <PaginationButtons
          onChange={handleSelectPage}
          count={Math.ceil(videoGames.count / 15)}
          page={pageNumber}
        />
      </PaginationGrid>
      <Grid container>
        <CardHolder cardData={videoGames.videoGames} />
      </Grid>
    </StyledGlobalGrid>
  );
};
