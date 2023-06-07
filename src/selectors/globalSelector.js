export const getRouter = state => state.router.location;

export const getGames = state => state.games;

export const getvisitedGames = state => state.visitedGames;

export const getGameScreenshots = (state, id) =>
  state.visitedGames.screenshots ? state.visitedGames.screenshots[id] : [];

export const getParamKey = state =>
  state.router.location.search.slice(1).split('=')[0] || '';

export const getParamValue = state =>
  state.router.location.search.slice(1).split('=')[1] || '';
