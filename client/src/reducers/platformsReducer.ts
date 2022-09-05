import { GET_PLATFORMS } from '../actions/types';

const initialState = {
  platforms: [],
};

export default function platformsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      };
    default:
      return state;
  };
};
