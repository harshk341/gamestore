import React, { memo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getParamKey, getParamValue } from 'src/selectors/globalSelector';
import { useSelector } from 'src/store';

const Genres = ({ genres, classname }) => {
  const { key, value } = useSelector(
    createSelector(getParamKey, getParamValue, (key, value) => ({ key, value }))
  );

  return (
    <>
      <div className={classname}>
        <ul>
          {genres.map(({ slug, name }) => (
            <li key={slug}>
              <Link
                to={`/games?genres=${slug}`}
                className={`genre_chip${
                  key === 'genres' && value === slug ? ' active' : ''
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Genres.defaultProps = {
  classname: '',
  genres: []
};

Genres.propTypes = {
  classname: PropTypes.string,
  genres: PropTypes.array
};

export default memo(Genres);
