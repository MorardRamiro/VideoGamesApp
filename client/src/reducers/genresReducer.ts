import { GET_GENRES } from '../actions/types';

const initialState = {
  genres: [],
};

export default function genresReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    default:
      return state;
  };
};
