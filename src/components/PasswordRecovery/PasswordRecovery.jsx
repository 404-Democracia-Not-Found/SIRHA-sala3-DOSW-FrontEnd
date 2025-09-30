import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import './PasswordRecovery.css';

const PasswordRecovery = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    if (email) {
      alert('Si el correo existe, recibirás instrucciones para recuperar tu contraseña.');
    }
  };

  return (
    <div className="password-recovery-container">
      <div className="password-recovery-card">
        {/* Logo */}
        <div className="password-recovery-logo-container">
          <div className="password-recovery-logo">
            <Mail className="password-recovery-logo-icon" size={32} />
          </div>
        </div>

        {/* Título */}
        <div className="password-recovery-header">
          <h1 className="password-recovery-title">
            Recuperación de Contraseña
          </h1>
          <p className="password-recovery-subtitle">Sistema de Gestión Escolar</p>
        </div>

        {/* Descripción */}
        <div className="password-recovery-description">
          <p className="password-recovery-description-text">
            Ingrese su correo electrónico y le enviaremos instrucciones para restablecer su contraseña.
          </p>
        </div>

        {/* Formulario */}
        <div className="password-recovery-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sucorreo@ejemplo.com"
            className="password-recovery-input"
          />

          <button
            onClick={handleRecovery}
            className="password-recovery-button"
          >
            Enviar enlace de recuperación
          </button>

          <div className="password-recovery-back-section">
            <button
              onClick={() => setCurrentView('role-selection')}
              className="password-recovery-back-button"
            >
              ¿Recuerda su contraseña? Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;