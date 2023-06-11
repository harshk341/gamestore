import { createSelector } from '@reduxjs/toolkit';
import {
  getGames,
  getParamKey,
  getParamValue,
  getRouter
} from './globalSelector';
import {
  GAME_COLLECTION,
  GAME_COLLECTION_SEARCH,
  GAME_COLLECTION_TAG,
  GAME_COLLECTION_GENRE,
  GENRES
} from 'src/constants/global';
import { selectGameCollectionByKey } from 'src/slices/gamesSlice';

const gameCollectionKey = (key, value) => {
  if (key) {
    if (key === 'search') {
      return [GAME_COLLECTION_SEARCH, value].join('|');
    }
    if (key === 'tags') {
      return [GAME_COLLECTION_TAG, value].join('|');
    }
    if (key === 'genres') {
      return [GAME_COLLECTION_GENRE, value].join('|');
    }
  }
  return [GAME_COLLECTION, 'default'].join('|');
};

export const gameCollectionData = state => {
  const paramKey = getParamKey(state);
  const paramValue = getParamValue(state);
  const collectionKey = gameCollectionKey(paramKey, paramValue);
  const data = selectGameCollectionByKey(state, collectionKey);
  return { collectionKey, ...data };
};

export const getGameCollectionData = createSelector(
  getGames,
  getRouter,
  gameCollectionData,
  (
    { error, loading },
    { search, pathname },
    { games, nextUrl, collectionKey }
  ) => ({
    error,
    loading,
    games,
    collectionKey,
    nextUrl,
    gamesUrl: search ? pathname + search : pathname,
    genres: GENRES
  })
);
