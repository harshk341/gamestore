import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import gameReducer from 'src/slices/gameSlice';
import gamesReducer from 'src/slices/gamesSlice';

export default configureStore({
  reducer: {
    games: gamesReducer,
    visitedGames: gameReducer
  }
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
