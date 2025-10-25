import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({
  type = 'info',
  message,
  duration = 5000,
  onClose,
  showCloseButton = true
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);

    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  const getIcon = () => {
    switch(type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`notification notification-${type} ${isLeaving ? 'notification-leaving' : ''}`}
      role="alert"
    >
      <div className="notification-content">
        <span className="notification-icon" aria-hidden="true">
          {getIcon()}
        </span>

        <span className="notification-message">{message}</span>
      </div>

      {showCloseButton && (
        <button
          className="notification-close-btn"
          onClick={handleClose}
          aria-label="Cerrar notificación"
        >
          ×
        </button>
      )}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool
};

export default Notification;