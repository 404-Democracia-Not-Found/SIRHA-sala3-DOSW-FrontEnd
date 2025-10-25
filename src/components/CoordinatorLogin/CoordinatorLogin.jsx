import React, { useState } from 'react';
import { Mail, Lock, Shield } from 'lucide-react';
import './CoordinatorLogin.css';

const CoordinatorLogin = ({ setCurrentView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la validación con el backend
    setCurrentView('administrative-dashboard');
  };

  return (
    <div className="coordinator-login-wrapper">
      {/* Panel izquierdo */}
      <div className="coordinator-login-left-panel">
        <div className="coordinator-login-left-content">
          <div className="coordinator-login-logo-section">
            <Shield className="coordinator-login-shield-icon" size={48} />
            <span className="coordinator-login-logo-text">SIRHA Admin</span>
          </div>
          
          <h1 className="coordinator-login-welcome-title">
            Panel de Coordinación
          </h1>
          <p className="coordinator-login-welcome-text">
            Accede al sistema de gestión administrativa para supervisar y coordinar 
            todas las operaciones académicas.
          </p>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="coordinator-login-right-panel">
        <div className="coordinator-login-form-container">
          <div className="coordinator-login-header">
            <h2 className="coordinator-login-title">
              Acceso Administrativo
            </h2>
            <p className="coordinator-login-subtitle">Ingrese sus credenciales de coordinador</p>
          </div>

          <div className="coordinator-login-form">
            <div className="coordinator-login-form-group">
              <label>Correo Institucional</label>
              <div className="coordinator-login-input-wrapper">
                <Mail className="coordinator-login-icon" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="coordinador@escuelaing.edu.co"
                  className="coordinator-login-input"
                />
              </div>
            </div>

            <div className="coordinator-login-form-group">
              <label>Contraseña</label>
              <div className="coordinator-login-input-wrapper">
                <Lock className="coordinator-login-icon" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña de acceso"
                  className="coordinator-login-input"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="coordinator-login-button"
            >
              Ingresar al Panel
            </button>

            <div className="coordinator-login-recovery-section">
              <button
                onClick={() => setCurrentView('password-recovery')}
                className="coordinator-login-recovery-button"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>

          <div className="coordinator-login-switch-section">
            <button
              onClick={() => setCurrentView('role-selection')}
              className="coordinator-login-back-button"
            >
              ← Volver a selección de rol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorLogin;
