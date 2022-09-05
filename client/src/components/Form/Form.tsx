import React, { useState, ChangeEvent, useCallback, useEffect, MouseEvent } from 'react';
import { createNewVideoGame, getGenres, getPlatforms, } from '../../actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Genre } from '../../interfaces';
import { Button, Grid, Typography } from '@mui/material';
import { InputNameSearch } from '../Main/sub-components/InputNameSearch';
import { FormControlSelect } from '../Main/sub-components/FormControlSelect/FormControlSelect';
import CustomRating from './CustomRating/CustomRating';
import CustomDatePicker from './CustomDatePicker/CustomDatePicker';
import { StyledPaper, StyledGrid, StyledButtonGrid, StyledGridContainer, StyledBox, StyledAvatar, StyledAvatarGrid } from './styles';

export default function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [rating, setRating] = useState(1);
  const [platform, setPlatform] = useState([] as Genre[]);
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState([] as Genre[]);

  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  //const [releaseDateError, setReleaseDateError] = useState('');
  //const [ratingError, setRatingError] = useState('');
  const [platformError, setPlatformError] = useState('');
  const [imageError, setImageError] = useState('');
  const [genreError, setGenreError] = useState('');

  const validateAll = () => {
    if (!name.length) {
      setNameError('Please, enter a name.');
    } else if (!name.match(/[\w ]/)) {
      setNameError('Name can only contain letters, numbers spaces or underscores.');
    } else {
      setNameError('');
    }
    if (!description.length) {
      setDescriptionError('Please, enter a description.');
    } else if (!description.match(/[\w ]/)) {
      setDescriptionError('Description can only contain letters, numbers spaces or underscores.');
    } else {
      setDescriptionError('');
    }
    if (image.length && !image.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)) {
      setImageError('Please, enter a valid image link.');
    } else {
      setImageError('');
    }
    /* if (rating || rating < 1) {
      setRatingError('Rating must be equal to or higher than 1')
    } else {
      setRatingError('')
    }
    if (releaseDate || releaseDate > new Date()) {
      setReleaseDateError(`Release date can't be in the future`);
    } else {
      setReleaseDateError('');
    } */
    if (!genre.length) {
      setGenreError('At least one genre must be selected.');
    } else {
      setGenreError('');
    }
    if (!platform.length) {
      setPlatformError('At least one platform must be selected.');
    } else {
      setPlatformError('');
    }
  }

  const dispatch = useAppDispatch();

  const fetchGenres = useCallback(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const fetchPlatforms = useCallback(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const fetchCreateNewVideoGame = useCallback(() => {
    dispatch(createNewVideoGame({
      name,
      description,
      release_date: releaseDate,
      rating,
      platforms: platform,
      genres: genre,
    }))
  }, [dispatch, name, description, releaseDate, rating, platform, genre])

  useEffect(() => {
    fetchGenres();
    fetchPlatforms();
  }, [fetchGenres, fetchPlatforms]);

  const {
    genres,
    platforms,
  } = useAppSelector((rootReducer) => rootReducer);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newGenre = Number(event.target.value);
    if (genre.map((e: Genre) => e.id).includes(newGenre)) {
      setGenre([...genre.filter((gen: Genre) => gen.id !== newGenre)]);
    } else {
      setGenre([...genre, genres.genres.find((gen: Genre) => gen.id === newGenre)])
    }
  };

  const handleRatingChange = (_event: MouseEvent<HTMLInputElement>, newValue: number) => {
    if (!newValue || newValue < 1) {
      setRating(1)
    } else {
      setRating(newValue);
    }
  };

  const handleDateChange = (newDate: Date) => {
    setReleaseDate(newDate);
  };

  const handlePlatformChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPlatform = Number(event.target.value);
    if (platform.map((e: Genre) => e.id).includes(newPlatform)) {
      setPlatform([...platform.filter((plat: Genre) => plat.id !== newPlatform)]);
    } else {
      setPlatform([...platform, platforms.platforms.find((plat: Genre) => plat.id === newPlatform)])
    }
  };

  const handleGenreCancel = (value: Genre) => {
    setGenre([...genre.filter((gen: Genre) => gen.id !== value.id)]);
  }

  const handlePlatformCancel = (value: Genre) => {
    setPlatform([...platform.filter((plat: Genre) => plat.id !== value.id)]);
  }

  const handleFormSubmit = (event: MouseEvent) => {
    event.preventDefault();
    validateAll();
    if (![nameError, descriptionError, imageError, /* releaseDateError, ratingError, */ platformError, genreError].join('').length) fetchCreateNewVideoGame();
  };

  return (
    <div>
      <StyledBox>
        <StyledPaper>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant='h3'>Create a new VideoGame</Typography>
            </Grid>
            <StyledGrid item xs={12}>
              <InputNameSearch
                onChange={handleNameChange}
                label={'Name'}
                placeholder={'Enter a name...'}
                error={nameError.length}
                helperText={nameError}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <InputNameSearch
                onChange={handleDescriptionChange}
                label={'Description'}
                placeholder={'Enter a description...'}
                multiline
                error={descriptionError.length}
                helperText={descriptionError}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <InputNameSearch
                onChange={handleImageChange}
                label={'Image'}
                placeholder={'Enter the url of an image...'}
                error={imageError.length}
                helperText={imageError}
              />
            </StyledGrid>
            <StyledAvatarGrid item xs={12}>
              {image.length > 0 && <StyledAvatar variant='square' src={image} alt='' />}
            </StyledAvatarGrid>
            <StyledGridContainer container xs={12}>
              <StyledGrid item xs={5}>
                <CustomDatePicker onChange={handleDateChange} value={releaseDate} shouldDisableDate={(date: Date) => date > new Date()} />
              </StyledGrid>
              <StyledGrid item xs={5}>
                <CustomRating value={rating} onChange={handleRatingChange} />
              </StyledGrid>
            </StyledGridContainer>
            <StyledGrid item xs={12}>
              {genres.genres.length && <FormControlSelect
                onChange={handleGenreChange}
                onDelete={handleGenreCancel}
                options={genres.genres}
                name={'Genres'}
                state={genre}
                error={genreError.length}
                helperText={genreError}
              />}
            </StyledGrid>
            <StyledGrid item xs={12}>
              <FormControlSelect
                onChange={handlePlatformChange}
                onDelete={handlePlatformCancel}
                options={platforms.platforms}
                name={'Platforms'}
                state={platform}
                error={platformError.length}
                helperText={platformError}
              />
            </StyledGrid>
            <StyledButtonGrid item xs={12}>
              <Button onClick={handleFormSubmit} variant='outlined'>
                <Typography>CREATE</Typography>
              </Button>
            </StyledButtonGrid>
          </Grid>
        </StyledPaper>
      </StyledBox>
    </div>
  );
};
