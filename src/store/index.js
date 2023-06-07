import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import gameReducer from 'src/slices/gameSlice';
import gamesReducer from 'src/slices/gamesSlice';

const { routerMiddleware, routerReducer, createReduxHistory } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1
  });

export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    games: gamesReducer,
    visitedGames: gameReducer
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(routerMiddleware)
});

export const history = createReduxHistory(store);

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
