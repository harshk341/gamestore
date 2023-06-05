import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'src/store';
import {
  fetchGamesOnStart,
  selectGamesState,
  fetchGamesOnNeed
} from 'src/slices/gamesSlice';
import { GAMES_PATH } from 'src/constants/api';
import { RenderGames, Error, Loader } from 'src/components';
import infiniteScroll from 'src/components/HOCs/infiniteScroll';

const Games = () => {
  const dispatch = useDispatch();
  const { error, loading, games } = useSelector(selectGamesState);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchGamesOnStart(GAMES_PATH, controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  if (error) {
    return <Error classname="error" message={error} />;
  }

  return (
    <div className="game-list" style={{ width: '100%' }}>
      <RenderGames games={games} />
      <Loader isLoading={loading} classname="loader" />
    </div>
  );
};

export default infiniteScroll(Games, fetchGamesOnNeed);
