import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './StudentLogin.css';

const StudentLogin = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setShowError(true);
      return;
    }
    setCurrentView('student-dashboard');
  };

  return (
    <div className="student-login-container">
      <div className="student-login-card">
        {/* Logo */}
        <div className="student-login-logo-container">
          <div className="student-login-logo">
            <div className="student-login-logo-inner"></div>
          </div>
        </div>

        {/* Título */}
        <div className="student-login-header">
          <h1 className="student-login-title">
            Ingreso Estudiantes
          </h1>
          <p className="student-login-subtitle">Por favor, ingresa tus credenciales.</p>
        </div>

        {/* Formulario */}
        <div className="student-login-form">
          <div className="student-login-form-group">
            <label className="student-login-label">
              Correo Institucional
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.nombre@institucion.edu"
              className="student-login-input"
            />
          </div>

          <div className="student-login-form-group">
            <label className="student-login-label">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="student-login-input"
            />
          </div>

          {/* Mensaje de error */}
          {showError && (
            <div className="student-login-error-box">
              <div className="student-login-error-icon">
                <span className="student-login-error-icon-text">!</span>
              </div>
              <p className="student-login-error-text">
                Error: Correo o contraseña incorrectos. Por favor, intenta de nuevo.
              </p>
            </div>
          )}

          {/* Botón de login */}
          <button
            onClick={handleLogin}
            className="student-login-button"
          >
            Ingresar
          </button>

          {/* Link de recuperación */}
          <div className="student-login-recovery-link">
            <button
              onClick={() => setCurrentView('password-recovery')}
              className="student-login-recovery-button"
            >
              ¿Olvidaste tu Contraseña?
            </button>
          </div>

          {/* Separador */}
          <div className="student-login-divider">
            <span className="student-login-divider-text">o</span>
          </div>

          {/* Botón de registro */}
          <button
            onClick={() => setCurrentView('registration')}
            className="student-login-register-button"
          >
            Crear Cuenta Nueva
          </button>
        </div>

        {/* Botón atrás */}
        <div className="student-login-back-section">
          <button
            onClick={() => setCurrentView('role-selection')}
            className="student-login-back-button"
          >
            <ArrowLeft size={16} />
            Atrás
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;