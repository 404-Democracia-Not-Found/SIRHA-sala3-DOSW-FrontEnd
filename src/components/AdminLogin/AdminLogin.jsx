import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = ({ setCurrentView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setCurrentView('professor-dashboard');
  };

  return (
    <div className="admin-login-wrapper">
      {/* Panel izquierdo */}
      <div className="admin-login-left-panel">
        <div className="admin-login-left-content">
          <div className="admin-login-logo-section">
            <div className="admin-login-logo-box"></div>
            <span className="admin-login-logo-text">School Manager</span>
          </div>
          
          <h1 className="admin-login-welcome-title">
            Bienvenido de nuevo, Profesor.
          </h1>
          <p className="admin-login-welcome-text">
            Inicie sesión para acceder a su panel de control y gestionar las operaciones 
            escolares sin problemas.
          </p>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="admin-login-right-panel">
        <div className="admin-login-form-container">
          <div className="admin-login-header">
            <h2 className="admin-login-title">
              Inicio de Sesión de Profesor
            </h2>
            <p className="admin-login-subtitle">Por favor, ingrese sus credenciales para continuar.</p>
          </div>

          <div className="admin-login-form">
            <div className="admin-login-form-group">
              <label>Usuario</label>
              <div className="admin-login-input-wrapper">
                <Mail className="admin-login-icon" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Correo institucional asignado"
                  className="admin-login-input"
                />
              </div>
            </div>

            <div className="admin-login-form-group">
              <label>Contraseña</label>
              <div className="admin-login-input-wrapper">
                <Lock className="admin-login-icon" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="admin-login-input"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="admin-login-button"
            >
              Iniciar Sesión
            </button>

            <div className="admin-login-recovery-section">
              <button
                onClick={() => setCurrentView('password-recovery')}
                className="admin-login-recovery-button"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>

          <div className="admin-login-switch-section">
            <span className="admin-login-switch-text">¿No es un profesor? </span>
            <button
              onClick={() => setCurrentView('student-login')}
              className="admin-login-switch-button"
            >
              Iniciar sesión como estudiante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;