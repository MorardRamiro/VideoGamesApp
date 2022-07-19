import React, { useState, useCallback, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { countVideoGames, getGenres, getVideoGames } from '../actions';
import { Genre, VideoGameWithID } from '../interfaces';

import { useAppSelector, useAppDispatch } from '../store/hooks';

export function Main() {
  const [name, setName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState([] as number[]);

  const dispatch = useAppDispatch();

  const fetchVideoGames = useCallback(() => {
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
  };

  const handleOrderChange = (event: MouseEvent<HTMLInputElement>) => {
    setOrder((event.target as HTMLInputElement).value);
  };

  const handleOrderByChange = (event: MouseEvent<HTMLInputElement>) => {
    setOrderBy((event.target as HTMLInputElement).value);
  };

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGenre([...genre, Number(event.target.value)]);
  };

  const handleCancelButton = (event: MouseEvent) => {
    setGenre([...genre.filter(elem => elem !== Number((event.target as HTMLInputElement).value))]);
  };

  const handleSelectPage = (event: MouseEvent) => {
    switch ((event.target as HTMLInputElement).name) {
      case 'first':
        setPageNumber(1);
        break;
      case 'prev':
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
        break;
      case 'next':
        setPageNumber(pageNumber + 1);
        break;
      case 'last':
        setPageNumber(Math.ceil(videoGames.count / 15));
        break;
      case 'page':
        setPageNumber(Number((event.target as HTMLInputElement).value));
        break;
      default:
        break;
    };
  };

  return (<div>
    Name: <input autoComplete='off' placeholder='Enter a name...' onChange={handleNameChange} />
    <div>Order:
      <div> Ascending: <input onClick={handleOrderChange} name='order' type='radio' value='asc' defaultChecked /></div>
      <div> Descending: <input onClick={handleOrderChange} name='order' type='radio' value='desc' /></div>
    </div>
    <div>Order by:
      <div> Alphabetically: <input onClick={handleOrderByChange} name='orderBy' type='radio' value='' defaultChecked /></div>
      <div> Rating: <input onClick={handleOrderByChange} name='orderBy' type='radio' value='rating' /></div>
    </div>
    <div>Type:
      <select defaultValue='default' onChange={handleTypeChange}>
        <option disabled hidden value='default'> -- Select a type -- </option>
        <option key='all' value=''> All </option>
        <option key='official' value='official'>Official</option>
        <option key='custom' value='custom'>Custom</option>
      </select></div>
    <div>Genres:
      <select defaultValue='default' onChange={handleGenreChange}>
      <option disabled hidden value='default'> -- Select a genre -- </option>
        {genres.genres && genres.genres.map((obj: Genre) => <option key={obj.id} value={obj.id}>{obj.name}</option>)}
      </select></div>
    {genres.genres && genres.genres.filter((el: Genre) => genre.includes(el.id))
      .map((elem: Genre) => <div key={elem.id}>{elem.name} <button value={elem.id} onClick={handleCancelButton}>X</button></div>)}
    {videoGames.videoGames && videoGames.videoGames.map((obj: VideoGameWithID) => <div key={obj._id}><div><Link to={`/detail/${Object.hasOwn(obj, 'id') ? obj.id : obj._id}`}>{obj.name}</Link></div><img alt='' height={100} width={100} src={obj.image} /></div>)}
    <div>
      {<button disabled={pageNumber > 1 ? false : true} name='first' type='button' onClick={handleSelectPage}> « </button>}
      {<button disabled={pageNumber > 1 ? false : true} name='prev' type='button' onClick={handleSelectPage}> ‹ </button>}
      {videoGames.count && Array(Math.ceil(videoGames.count / 15)).fill(undefined).map((_x, e) => {
        return <button key={e + 1} onClick={handleSelectPage} name='page' value={e + 1}>{e + 1}</button>
      })}
      {<button disabled={pageNumber < Math.ceil(videoGames.count / 15) ? false : true} name='next' type='button' onClick={handleSelectPage}> › </button>}
      {<button disabled={pageNumber < Math.ceil(videoGames.count / 15) ? false : true} name='last' type='button' onClick={handleSelectPage}> » </button>}
    </div>
  </div>)
};
