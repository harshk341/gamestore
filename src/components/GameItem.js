import React from 'react';
import { platformIcon } from 'src/helpers/platformIcon';

const GameItem = ({ backgroundImage, platforms, metacritic, name }) => {
  return (
    <div className="game-item">
      <div
        className="game-item__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="game-item__info">
        <div className="game-item__info__top">
          <div className="platforms">
            {platforms.map(({ platform }) => (
              <span className="icon" key={platform.id}>
                {platformIcon(platform.slug)}
              </span>
            ))}
          </div>
          <span className="metascore" title="metascore">
            {metacritic}
          </span>
        </div>
        <div className="game-item__info__bottom">
          <span className="title">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
