import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Notification from './Notification/Notification';

/**
 * Página temporal para previsualizar todos los componentes comunes
 * Útil para testing y documentación visual
 */
const ComponentsPreview = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState('success');

  const handleShowNotification = (type) => {
    setNotificationType(type);
    setShowNotification(true);
  };

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    title: {
      marginBottom: '2rem',
      color: '#333',
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    section: {
      marginBottom: '3rem',
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#111'
    },
    subsectionTitle: {
      marginTop: '1.5rem',
      marginBottom: '1rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#333'
    },
    flexContainer: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    columnContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    },
    button: {
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'white',
      transition: 'opacity 0.2s'
    },
    successButton: {
      backgroundColor: '#10b981'
    },
    errorButton: {
      backgroundColor: '#ef4444'
    },
    warningButton: {
      backgroundColor: '#f59e0b'
    },
    infoButton: {
      backgroundColor: '#3b82f6'
    },
    exampleBox: {
      position: 'relative',
      height: '300px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '2px dashed #ddd'
    },
    description: {
      marginBottom: '1rem',
      color: '#666',
      lineHeight: '1.6'
    },
    divider: {
      border: 'none',
      borderTop: '1px solid #e5e5e5',
      margin: '2rem 0'
    },
    codeBlock: {
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderRadius: '4px',
      overflow: 'auto',
      fontSize: '0.875rem',
      fontFamily: 'monospace'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        🎨 Previsualización de Componentes Comunes
      </h1>
      
      <p style={styles.description}>
        Esta página muestra todos los componentes reutilizables del sistema. 
        Úsala como referencia para implementar notificaciones, estados de carga y mensajes de error.
      </p>

      <hr style={styles.divider} />

      {/* ============================================
          SECCIÓN: LOADING SPINNERS
      ============================================ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔄 Loading Spinners</h2>
        <p style={styles.description}>
          Indicadores de carga para mostrar procesos en curso.
        </p>

        <div style={styles.flexContainer}>
          <div>
            <h3 style={styles.subsectionTitle}>Small</h3>
            <LoadingSpinner size="small" message="Cargando..." />
          </div>
          
          <div>
            <h3 style={styles.subsectionTitle}>Medium (default)</h3>
            <LoadingSpinner message="Procesando datos del sistema..." />
          </div>
          
          <div>
            <h3 style={styles.subsectionTitle}>Large</h3>
            <LoadingSpinner 
              size="large" 
              message="Cargando clases inscritas del periodo..." 
            />
          </div>
        </div>

        <h3 style={styles.subsectionTitle}>Sin mensaje</h3>
        <LoadingSpinner size="medium" />

        <h3 style={styles.subsectionTitle}>Full Screen (ejemplo contenido)</h3>
        <p style={styles.description}>
          Este ejemplo simula cómo se vería el spinner cubriendo toda una sección.
        </p>
        <div style={styles.exampleBox}>
          <LoadingSpinner 
            size="large" 
            message="Cargando datos del sistema..." 
            fullScreen 
          />
        </div>
      </section>

      {/* ============================================
          SECCIÓN: ERROR MESSAGES
      ============================================ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⚠️ Error Messages</h2>
        <p style={styles.description}>
          Mensajes de error contextuales con opciones de recuperación.
        </p>
        
        <div style={styles.columnContainer}>
          <div>
            <h3 style={styles.subsectionTitle}>Error de Red</h3>
            <ErrorMessage 
              type="network"
              title="Error de conexión"
              message="No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet."
              onRetry={() => alert('Reintentando conexión...')}
            />
          </div>
          
          <div>
            <h3 style={styles.subsectionTitle}>Página No Encontrada</h3>
            <ErrorMessage 
              type="notfound"
              title="Página no encontrada"
              message="La página que buscas no existe o fue movida a otra ubicación."
            />
          </div>
          
          <div>
            <h3 style={styles.subsectionTitle}>Sin Permisos</h3>
            <ErrorMessage 
              type="permission"
              title="Acceso denegado"
              message="No tienes los permisos necesarios para acceder a esta sección. Contacta al administrador."
            />
          </div>
          
          <div>
            <h3 style={styles.subsectionTitle}>Error General</h3>
            <ErrorMessage 
              type="general"
              title="Algo salió mal"
              message="Ocurrió un error inesperado en el sistema. Por favor, intenta nuevamente más tarde."
              onRetry={() => alert('Reintentando operación...')}
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN: NOTIFICATIONS (TOAST)
      ============================================ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔔 Notifications (Toast)</h2>
        <p style={styles.description}>
          Notificaciones temporales que aparecen en la esquina superior derecha. 
          Se auto-cierran después de unos segundos.
        </p>
        
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => handleShowNotification('success')}
            style={{...styles.button, ...styles.successButton}}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ✓ Mostrar Success
          </button>
          
          <button 
            onClick={() => handleShowNotification('error')}
            style={{...styles.button, ...styles.errorButton}}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ✕ Mostrar Error
          </button>
          
          <button 
            onClick={() => handleShowNotification('warning')}
            style={{...styles.button, ...styles.warningButton}}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ⚠ Mostrar Warning
          </button>
          
          <button 
            onClick={() => handleShowNotification('info')}
            style={{...styles.button, ...styles.infoButton}}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ℹ Mostrar Info
          </button>
        </div>

        <p style={styles.description}>
          <strong>Nota:</strong> Las notificaciones aparecerán en la esquina superior derecha 
          y se cerrarán automáticamente después de 5 segundos (configurable).
        </p>

        {showNotification && (
          <Notification 
            type={notificationType}
            message={`Esta es una notificación de tipo "${notificationType}". Se cerrará automáticamente en 5 segundos.`}
            onClose={() => setShowNotification(false)}
            duration={5000}
          />
        )}
      </section>

      {/* ============================================
          SECCIÓN: EJEMPLOS DE USO
      ============================================ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💻 Ejemplos de Código</h2>
        
        <div>
          <h3 style={styles.subsectionTitle}>LoadingSpinner</h3>
          <pre style={styles.codeBlock}>
{`import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';

// Uso básico
<LoadingSpinner message="Cargando datos..." />

// Pantalla completa
<LoadingSpinner 
  size="large" 
  message="Procesando..." 
  fullScreen 
/>`}
          </pre>
        </div>

        <div>
          <h3 style={styles.subsectionTitle}>ErrorMessage</h3>
          <pre style={styles.codeBlock}>
{`import ErrorMessage from '../common/ErrorMessage/ErrorMessage';

// Con botón de reintentar
<ErrorMessage 
  type="network"
  title="Error de conexión"
  message="No se pudo conectar."
  onRetry={() => retryFunction()}
/>

// Sin botón de reintentar
<ErrorMessage 
  type="permission"
  title="Acceso denegado"
  message="Sin permisos."
/>`}
          </pre>
        </div>

        <div>
          <h3 style={styles.subsectionTitle}>Notification</h3>
          <pre style={styles.codeBlock}>
{`import Notification from '../common/Notification/Notification';

// Auto-cierre en 3 segundos
<Notification 
  type="success"
  message="Operación exitosa"
  duration={3000}
/>

// Con control manual de cierre
<Notification 
  type="error"
  message="Error al guardar"
  onClose={() => setShowNotification(false)}
/>`}
          </pre>
        </div>
      </section>

    </div>
  );
};

export default ComponentsPreview;
