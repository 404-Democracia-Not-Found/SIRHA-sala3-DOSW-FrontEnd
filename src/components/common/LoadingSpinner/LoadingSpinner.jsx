import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message, size = 'medium', fullScreen = false }) => {

  const containerClass = fullScreen
    ? 'loading-spinner-fullscreen'
    : 'loading-spinner-container';

  return (
    <div className={containerClass}>
      <div className={`loading-spinner loading-spinner-${size}`}>
        <div className="spinner-circle"></div>
      </div>

      {message && (
        <p className="loading-spinner-message">{message}</p>
      )}
    </div>
  );
};

LoadingSpinner.propTypes = {
  message: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullScreen: PropTypes.bool
};

export default LoadingSpinner;