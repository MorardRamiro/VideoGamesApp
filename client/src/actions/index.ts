import { GET_VIDEOGAMES, GET_GENRES, COUNT_VIDEOGAMES, GET_VIDEOGAME_DETAIL, CREATE_NEW_VIDEOGAME, DELETE_VIDEOGAME } from "./types";
import { VideoGame } from '../interfaces'; 
import { Dispatch } from 'redux';

export const getVideoGames = (name: string, pageNumber: number, order: string, orderBy: string, type: string, genres: number[]) => {
  const url = `http://localhost:3001/videogames?name=${name}&page=${pageNumber}&order=${order}&orderBy=${orderBy}&type=${type}&genres=${genres}`;
  return (dispatch: Dispatch) => {
    return fetch(url)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_VIDEOGAMES, payload: obj })
      )
  };
};

export const getGenres = () => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/genres`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_GENRES, payload: obj })
      )
  };
};

export const countVideoGames = (name: string, types: string, genres: number[]) => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogames/count?name=${name}&type=${types}&genres=${genres}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: COUNT_VIDEOGAMES, payload: obj })
      )
  };
};

export const getVideoGameDetail = (id: string | number | undefined) => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogame/${id}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: obj })
      )
  };
};

export const createNewVideoGame = (videoGame: VideoGame ) => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogame`, { method: 'POST', headers: { 'Content-Type': 'application/JSON' }, body: JSON.stringify(videoGame) })
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: CREATE_NEW_VIDEOGAME, payload: obj })
      )
  };
};

export const deleteVideoGame = (id: string | number | undefined) => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogame/${id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: DELETE_VIDEOGAME, payload: obj })
      )
  };
};
