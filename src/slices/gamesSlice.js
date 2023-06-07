import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit';
import { getGames } from 'src/selectors/globalSelector';
import { apiCaller } from 'src/utils/apiCaller';

const gamesAdapter = createEntityAdapter();

const initialState = gamesAdapter.getInitialState({
  loading: false,
  error: null
});

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async ({ url, collectionKey, ...rest }) => {
    const data = await apiCaller.get(url, rest);
    return { games: data.results, nextUrl: data.next, id: collectionKey };
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
        const { games, nextUrl, id } = action.payload;
        state.loading = false;
        const existingCollection = state.entities[id];
        if (existingCollection) {
          existingCollection.games.push(...games);
          existingCollection.nextUrl = nextUrl;
        } else {
          gamesAdapter.addOne(state, action.payload);
        }
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default gamesSlice.reducer;

export const {
  selectById: selectGameCollectionByKey,
  selectEntities: selectGamesEntities
} = gamesAdapter.getSelectors(getGames);

export const fetchGamesOnStart =
  (url, collectionKey, signal) => (dispatch, getState) => {
    const { loading } = getGames(getState());
    const collections = selectGamesEntities(getState());
    const isCollectionExist = !!collections[collectionKey];
    const isFetching = loading;
    const shouldFetch = Boolean(!isCollectionExist && !isFetching);
    if (shouldFetch && url) {
      dispatch(fetchGames({ url, collectionKey, signal }));
    }
  };

export const fetchGamesOnNeed =
  (nextUrl, collectionKey) => (dispatch, getState) => {
    const { loading } = getGames(getState());
    const collections = selectGamesEntities(getState());
    const isCollectionExist = !!collections[collectionKey];
    const isFetching = loading;
    const shouldFetch = Boolean(isCollectionExist && !isFetching);
    if (shouldFetch && nextUrl) {
      dispatch(fetchGames({ url: nextUrl, collectionKey }));
    }
  };
