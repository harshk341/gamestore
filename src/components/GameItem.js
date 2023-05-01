import React from 'react';
import { Link } from 'react-router-dom';
import { MEDIUM_IMAGE_URL, IMAGE_URL } from 'src/constants/api';
import { platformIcon } from 'src/helpers/platformIcon';

const GameItem = ({ backgroundImage, platforms, metacritic, name, slug }) => {
  return (
    <div className="game-item">
      <div
        className="game-item__background"
        style={{
          backgroundImage: `url(${backgroundImage.replace(
            IMAGE_URL,
            MEDIUM_IMAGE_URL
          )})`
        }}
      ></div>
      <div className="game-item__info">
        <div>
          <div className="game-item__platforms">
            {platforms.map(({ platform }) => (
              <span key={platform.id}>{platformIcon(platform.slug)}</span>
            ))}
          </div>
          <span className="game-item__metascore" title="metascore">
            {metacritic}
          </span>
        </div>
        <Link to={`/games/${slug}`} className="game-item__title">
          {name}
        </Link>
      </div>
    </div>
  );
};

export default GameItem;
