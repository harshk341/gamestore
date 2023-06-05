import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isLoading, classname }) => {
  return (
    <>
      {isLoading ? (
        <div className={classname}>
          <div className="loader_spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

Loader.defaultProps = {
  classname: ''
};

Loader.propTypes = {
  classname: PropTypes.string,
  isLoading: PropTypes.bool
};

export default memo(Loader);
