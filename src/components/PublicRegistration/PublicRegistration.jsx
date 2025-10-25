import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import UserRegistrationForm from '../common/UserRegistrationForm/UserRegistrationForm';
import './PublicRegistration.css';

const PublicRegistration = ({ setCurrentView }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (userData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simular llamada a API (reemplazar con llamada real cuando esté disponible)
      console.log('Registrando usuario:', userData);

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Aquí iría la llamada real al backend
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });

      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      
      // Redirigir al login correspondiente según el rol
      if (userData.rol === 'ESTUDIANTE') {
        setCurrentView('student-login');
      } else {
        setCurrentView('admin-login');
      }

    } catch (err) {
      setError('Error al registrar usuario. Por favor, intenta nuevamente.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setCurrentView('role-selection');
  };

  return (
    <div className="public-registration-wrapper">
      <div className="public-registration-container">
        {/* Header con logo y título */}
        <div className="public-registration-header">
          <div className="public-registration-logo">
            <div className="public-registration-logo-inner"></div>
          </div>
          <h1 className="public-registration-main-title">Sistema SIRHA</h1>
          <p className="public-registration-subtitle">
            Crea tu cuenta para acceder al sistema de registro académico
          </p>
        </div>

        {/* Formulario de registro */}
        <div className="public-registration-form-section">
          <UserRegistrationForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isLoading={isLoading}
            error={error}
          />
        </div>

        {/* Botón de regreso */}
        <div className="public-registration-back-section">
          <button
            onClick={() => setCurrentView('role-selection')}
            className="public-registration-back-button"
            disabled={isLoading}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
        </div>

        {/* Footer con enlace al login */}
        <div className="public-registration-footer">
          <span className="public-registration-footer-text">¿Ya tienes una cuenta? </span>
          <button
            onClick={() => setCurrentView('student-login')}
            className="public-registration-footer-link"
            disabled={isLoading}
          >
            Inicia sesión aquí
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicRegistration;
