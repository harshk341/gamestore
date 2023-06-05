import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import { breakpointColumnsObj } from 'src/constants/global';
import GameItem from './GameItem';

const RenderGames = ({ games }) => {
  const gameList = useMemo(
    () =>
      games.map(
        ({ id, backgroundImage, parentPlatforms, metacritic, name, slug }) => {
          return (
            <GameItem
              key={id}
              backgroundImage={backgroundImage}
              platforms={parentPlatforms}
              metacritic={metacritic}
              name={name}
              slug={slug}
            />
          );
        }
      ),
    [games]
  );

  return (
    <div className="game-list" style={{ width: '100%' }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {gameList}
      </Masonry>
    </div>
  );
};

RenderGames.defaultProps = {
  games: []
};

RenderGames.propTypes = {
  games: PropTypes.array
};

export default memo(RenderGames);
