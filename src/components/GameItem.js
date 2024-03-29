import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MEDIUM_IMAGE_URL, IMAGE_URL } from 'src/constants/api';
import { platformIcon } from 'src/helpers/platformIcon';
import { setMetascoreColor } from 'src/helpers/setMetascoreColor';

const GameItem = ({ backgroundImage, platforms, metacritic, name, slug }) => {
  return (
    <div className="game-item">
      <div
        className="game-item__background"
        style={{
          backgroundImage: `url(${(backgroundImage || '').replace(
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
          <span
            className={`game-item__metascore ${setMetascoreColor(
              metacritic || 0
            )}`}
            title="metascore"
          >
            {metacritic || 0}
          </span>
        </div>
        <Link to={`/games/${slug}`} className="game-item__title">
          {name}
        </Link>
      </div>
    </div>
  );
};

GameItem.defaultProps = {
  backgroundImage: '',
  name: ''
};

GameItem.propTypes = {
  backgroundImage: PropTypes.string,
  platforms: PropTypes.array,
  metacritic: PropTypes.number,
  name: PropTypes.string,
  slug: PropTypes.string
};

export default memo(GameItem);
