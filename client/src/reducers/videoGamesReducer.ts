import { COUNT_VIDEOGAMES, CREATE_NEW_VIDEOGAME, GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL } from '../actions/types';

const initialState = {
  videoGames: [],
  count: 0,
  videoGameDetail: {},
};

export default function videoGamesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videoGames: action.payload,
      };
    case COUNT_VIDEOGAMES:
      return {
        ...state,
        count: action.payload,
      }
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videoGameDetail: action.payload,
      }
    case CREATE_NEW_VIDEOGAME:
      return {
        ...state,
      }
    default:
      return state;
  };
};
