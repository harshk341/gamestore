import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ classname, message }) => {
  return (
    <div className={classname}>
      <h1 style={{ color: 'var(--white-gray)' }}>{message}</h1>
    </div>
  );
};

Error.defaultProps = {
  classname: ''
};

Error.propTypes = {
  classname: PropTypes.string,
  message: PropTypes.string
};

export default Error;
