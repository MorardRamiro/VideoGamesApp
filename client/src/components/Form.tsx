import React, { useState, ChangeEvent, useCallback, useEffect, MouseEvent } from 'react';
import { createNewVideoGame, getGenres, } from '../actions';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Genre } from '../interfaces';

export function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [rating, setRating] = useState(1);
  const [platforms, setPlatforms] = useState([] as string[]);
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState([] as Genre[]);

  const dispatch = useAppDispatch();

  const fetchGenres = useCallback(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const fetchCreateNewVideoGame = useCallback(()=> {
    dispatch(createNewVideoGame({
      name,
      description,
      release_date: releaseDate,
      rating,
      platforms,
      genres: genre,
    }))
  }, [dispatch, name, description, releaseDate, rating, platforms, genre])

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  const {
    genres,
  } = useAppSelector((rootReducer) => rootReducer.genres);

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
    setGenre([...genre, genres.find((gen: Genre) => gen.id === Number(event.target.value))]);
  };

  const handleCancelButton = (event: MouseEvent) => {
    setGenre([...genre.filter(elem => elem.id !== Number((event.target as HTMLInputElement).value))]);
  };

  const handleRatingChange = (event: MouseEvent<HTMLInputElement>) => {
    setRating(Number((event.target as HTMLInputElement).value));
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReleaseDate(new Date(event.target.value));
  };

  const handlePlatformChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!platforms.includes(event.target.value)) {
      setPlatforms([...platforms, event.target.value]);
    }
  };

  const handleCancelPlatformChange = (event: MouseEvent) => {
    setPlatforms([...platforms.filter(ele => ele !== (event.target as HTMLInputElement).value)]);
  };

  const handleFormSubmit = (event: MouseEvent) => {
    event.preventDefault();
    fetchCreateNewVideoGame();
  };

  return (
    <div>
      <form>
        <div>
          <h2>Name:</h2>
          <input autoComplete="off" placeholder="Enter a name..."
            type="text" onChange={handleNameChange} />
        </div>
        <div>
          <h2>Description:</h2>
          <input autoComplete="off" placeholder="Enter a description..."
            type="text" onChange={handleDescriptionChange} />
        </div>
        <div>
          <h2>Image:</h2>
          <input autoComplete="off" placeholder="Enter the url of an image..."
            type="text" onChange={handleImageChange} />
          {image.length > 0 && <img alt='' src={image} />}
        </div>
        <div>Genres:
          <select defaultValue="default" onChange={handleGenreChange}>
            {genres && genres.map((obj: Genre) => <option key={obj.id} value={obj.id}>{obj.name}</option>)}
          </select></div>
        {genres && genres.filter((el: Genre) => genre.map((elem)=>elem.id).includes(el.id))
          .map((elem: Genre) => <div key={elem.id}>{elem.name} <button value={elem.id} onClick={handleCancelButton}>X</button></div>)}
        <div>
          <h2>Rating:</h2>
          <input onClick={handleRatingChange} type="radio" value={1} /><label>1</label>
          <input onClick={handleRatingChange} type="radio" value={2} /><label>2</label>
          <input onClick={handleRatingChange} type="radio" value={3} /><label>3</label>
          <input onClick={handleRatingChange} type="radio" value={4} /><label>4</label>
          <input onClick={handleRatingChange} type="radio" value={5} /><label>5</label></div>
        <div>
          <h2>Date:</h2>
          <input type='date' onChange={handleDateChange} />
        </div>
        <div>
          <h2>Platforms:</h2>
          <select defaultValue="default" onChange={handlePlatformChange}>
            <option key="default" disabled hidden value="default"> -- Select a platform -- </option>
            <option key="PC" value="PC"> PC </option>
            <option key="Xbox" value="Xbox"> Xbox </option>
            <option key="Playstation" value="Playstation"> Playstation </option>
          </select>
          {platforms && platforms.map((elem: string) => <div key={elem}>{elem} <button value={elem} onClick={handleCancelPlatformChange}>X</button></div>)}
        </div>
        <button type='submit' onClick={handleFormSubmit}>CREATE</button>
      </form>
    </div>
  )
}
