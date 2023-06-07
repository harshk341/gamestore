import { createSelector } from '@reduxjs/toolkit';
import { selectGame } from 'src/slices/gameSlice';
import { getGameScreenshots, getvisitedGames } from './globalSelector';

export const selectGameWithScreenshots = createSelector(
  getvisitedGames,
  selectGame,
  getGameScreenshots,
  (state, game, screenshots) => ({
    game,
    screenshots,
    loading: state.loading,
    error: state.error
  })
);
