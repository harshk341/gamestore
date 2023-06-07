import React, { useEffect } from 'react';
import { fetchGamesOnStart, fetchGamesOnNeed } from 'src/slices/gamesSlice';
import { RenderGames, Error, Loader } from 'src/components';
import infiniteScroll from 'src/components/HOCs/infiniteScroll';
import { getGameCollectionData } from 'src/selectors/gamesSelector';
import { connect } from 'react-redux';

const Games = props => {
  const { error, loading, games, collectionKey, gamesUrl, fetchGamesOnStart } =
    props;

  useEffect(() => {
    const controller = new AbortController();
    fetchGamesOnStart(gamesUrl, collectionKey, controller.signal);

    return () => controller.abort();
  }, [gamesUrl, collectionKey, fetchGamesOnStart]);

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

export default connect(
  state => ({
    ...getGameCollectionData(state)
  }),
  { fetchGamesOnStart, fetchGamesOnNeed }
)(infiniteScroll(Games));
