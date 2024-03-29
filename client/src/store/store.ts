import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import genresReducer from '../reducers/genresReducer';
import platformsReducer from '../reducers/platformsReducer';
import videoGamesReducer from '../reducers/videoGamesReducer';

export const store = configureStore({
  reducer: {
    videoGames: videoGamesReducer,
    genres: genresReducer,
    platforms: platformsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
