export const getRouter = state => state.router.location;

export const getGames = state => state.games;

export const getParamKey = state =>
  state.router.location.search.slice(1).split('=')[0] || '';

export const getParamValue = state =>
  state.router.location.search.slice(1).split('=')[1] || '';
