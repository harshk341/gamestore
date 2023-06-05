import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCaller } from 'src/utils/apiCaller';

const initialState = {
  games: [],
  nextUrl: null,
  loading: false,
  error: null
};

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async ({ url, ...rest }) => {
    const data = await apiCaller.get(url, rest);
    return { results: data.results, next: data.next };
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        const { results, next } = action.payload;
        state.loading = false;
        state.games = state.games.concat(results);
        state.nextUrl = next;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default gamesSlice.reducer;

export const selectGamesState = state => state.games;

export const fetchGamesOnStart = (url, signal) => (dispatch, getState) => {
  const gamesState = selectGamesState(getState());
  const { loading, games } = gamesState;
  const isFetching = loading;
  const isExist = Boolean(games.length > 0);
  const shouldFetch = Boolean(!isExist && !isFetching);
  if (shouldFetch && url) {
    dispatch(fetchGames({ url, signal }));
  }
};

export const fetchGamesOnNeed = nextUrl => (dispatch, getState) => {
  const gamesState = selectGamesState(getState());
  const isFetching = gamesState.loading;
  const shouldFetch = !isFetching;
  if (shouldFetch && nextUrl) {
    dispatch(fetchGames({ url: nextUrl }));
  }
};
