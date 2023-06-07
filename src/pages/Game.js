import React, { useEffect } from 'react';
import { Error, Loader, RenderGame } from 'src/components';
import { useParams } from 'react-router-dom';
import { fetchSingleGame } from 'src/slices/gameSlice';
import { useDispatch, useSelector } from 'src/store';
import { selectGameWithScreenshots } from 'src/selectors/gameSelector';

const Game = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { game, screenshots, loading, error } = useSelector(state =>
    selectGameWithScreenshots(state, slug)
  );

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchSingleGame(slug, controller.signal));

    return () => controller.abort();
  }, [slug, dispatch]);

  let content;
  if (loading) {
    content = <Loader classname="loader" isLoading={loading} />;
  } else if (game && screenshots) {
    content = <RenderGame game={game} screenshots={screenshots} />;
  } else if (error) {
    content = <Error classname="error" message={error} />;
  }

  return <div className="game">{content}</div>;
};

export default Game;
