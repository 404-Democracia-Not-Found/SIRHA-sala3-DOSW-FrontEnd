import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

/**
 * Componente de notificaciones tipo toast
 * Se muestra temporalmente y desaparece automáticamente
 */
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
    // Auto-cerrar después de la duración especificada
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 300);
  };

  // Iconos según el tipo de notificación
  const getIcon = () => {
    switch(type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
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
