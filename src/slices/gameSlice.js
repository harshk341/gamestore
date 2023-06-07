import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { GAMES_PATH } from 'src/constants/api';
import { apiCaller } from 'src/utils/apiCaller';

const gameAdapter = createEntityAdapter();

const initialState = gameAdapter.getInitialState({
  loading: false,
  error: null
});

export const fetchGame = createAsyncThunk(
  'game/fetchGame',
  async ({ slug, ...rest }) => {
    const url = `${GAMES_PATH}/${slug}`;
    const data = await apiCaller.get(url, rest);
    return { ...data, id: slug };
  }
);

export const fetchGameScreenshots = createAsyncThunk(
  'game/fetchGameScreenshots',
  async ({ slug, ...rest }) => {
    const url = `${GAMES_PATH}/${slug}/screenshots`;
    const data = await apiCaller.get(url, rest);
    return { key: slug, results: data.results };
  }
);

const gameSlice = createSlice({
  name: 'visitedGames',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGame.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.loading = false;
        gameAdapter.addOne(state, action.payload);
      })
      .addCase(fetchGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGameScreenshots.fulfilled, (state, action) => {
        const { key, results } = action.payload;
        state.screenshots
          ? (state.screenshots[key] = results)
          : (state.screenshots = { [key]: results });
      });
  }
});

export default gameSlice.reducer;

export const {
  selectById: selectGame,
  selectEntities: selectVisitedGameEntities
} = gameAdapter.getSelectors(state => state.visitedGames);

export const fetchSingleGame = (slug, signal) => (dispatch, getState) => {
  const gamesEnities = selectVisitedGameEntities(getState());
  const game = gamesEnities[slug];
  const isExist = !!game;
  if (!isExist && slug) {
    dispatch(fetchGame({ slug, signal }));
    dispatch(fetchGameScreenshots({ slug, signal }));
  }
};
