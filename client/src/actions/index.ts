import { Dispatch } from 'redux';
import {
  GET_VIDEOGAMES,
  GET_GENRES,
  COUNT_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  CREATE_NEW_VIDEOGAME,
  DELETE_VIDEOGAME,
  GET_PLATFORMS,
  RESET_VIDEOGAMES,
  CREATE_VIDEOGAMES,
  CREATE_GENRES,
  CREATE_PLATFORMS,
  COUNT_TOTAL_VIDEOGAMES
} from "./types";
import { VideoGame } from '../interfaces';

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

export const getPlatforms = () => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/platforms`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_PLATFORMS, payload: obj })
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

export const createNewVideoGame = (videoGame: VideoGame) => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogame`, { method: 'POST', headers: { 'Content-Type': 'application/JSON' }, body: JSON.stringify(videoGame) })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_NEW_VIDEOGAME })
      )
  };
};

export const deleteVideoGame = (id: string | number | undefined) => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogame/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: DELETE_VIDEOGAME })
      )
  };
};

export const resetVideoGames = () => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: RESET_VIDEOGAMES,
    });
  }
};

export const createVideoGames = () => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogames`, { method: 'POST' })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_VIDEOGAMES })
      )
  };
};

export const createGenres = () => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/genres`, { method: 'POST' })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_GENRES })
      )
  };
};

export const createPlatforms = () => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/platforms`, { method: 'POST' })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_PLATFORMS })
      )
  };
};

export const countTotalVideoGames = () => {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:3001/videogames/count`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: COUNT_TOTAL_VIDEOGAMES, payload: obj })
      )
  };
};
