import React from 'react';
import Masonry from 'react-masonry-css';
import { breakpointColumnsObj } from 'src/constants/global';
import { GAMES } from 'src/rawData';
import GameItem from './GameItem';

const Games = () => {
  const renderGames = games => {
    return games.map(
      ({ id, background_image, parent_platforms, metacritic, name, slug }) => {
        return (
          <GameItem
            key={id}
            backgroundImage={background_image}
            platforms={parent_platforms}
            metacritic={metacritic}
            name={name}
            slug={slug}
          />
        );
      }
    );
  };

  return (
    <div className="game-list" style={{ width: '100%' }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {renderGames(GAMES)}
      </Masonry>
    </div>
  );
};

export default Games;
