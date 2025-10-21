import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.css';

/**
 * Componente para mostrar errores de forma amigable
 * Incluye opción de reintento y diferentes tipos de error
 */
const ErrorMessage = ({ 
  title = 'Error al cargar',
  message = 'No se pudo cargar la información solicitada.',
  type = 'general',
  onRetry,
  showIcon = true
}) => {

  // Diferentes iconos según el tipo de error
  const getIcon = () => {
    switch(type) {
      case 'network':
        return '🌐';
      case 'notfound':
        return '🔍';
      case 'permission':
        return '🔒';
      default:
        return '⚠️';
    }
  };

  return (
    <div className="error-message-container">
      <div className="error-message-card">
        
        {showIcon && (
          <div className="error-message-icon">
            {getIcon()}
          </div>
        )}

        <h3 className="error-message-title">{title}</h3>
        
        <p className="error-message-text">{message}</p>

        {/* Botón de reintentar si se provee la función */}
        {onRetry && (
          <button 
            className="error-message-retry-btn"
            onClick={onRetry}
          >
            <span className="retry-icon">↻</span>
            <span>Reintentar</span>
          </button>
        )}

        {/* Sugerencias según el tipo de error */}
        <div className="error-message-suggestions">
          {type === 'network' && (
            <p className="error-suggestion">
              • Verifica tu conexión a internet<br/>
              • Intenta recargar la página
            </p>
          )}
          {type === 'permission' && (
            <p className="error-suggestion">
              • No tienes permisos para acceder a este recurso<br/>
              • Contacta al administrador si crees que es un error
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(['general', 'network', 'notfound', 'permission']),
  onRetry: PropTypes.func,
  showIcon: PropTypes.bool
};

export default ErrorMessage;
