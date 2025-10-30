import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { authService } from '../../services';
import './AdminLogin.css';

const AdminLogin = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Limpiar errores previos
    setShowError(false);
    setErrorMessage('');

    // Validación básica
    if (!email || !password) {
      setShowError(true);
      setErrorMessage('Por favor, completa todos los campos');
      return;
    }

    setIsLoading(true);

    try {
      // Llamar al servicio de autenticación
      const response = await authService.login({
        email: email.trim(),
        password: password,
      });

      console.log('✅ Login exitoso:', response);

      // Redirigir según el rol del usuario
      if (response.user.rol === 'DOCENTE') {
        setCurrentView('professor-dashboard');
      } else if (response.user.rol === 'COORDINADOR') {
        setCurrentView('administrative-dashboard');
      } else {
        // Si es estudiante, mostrar error
        setShowError(true);
        setErrorMessage('Este acceso es solo para docentes y coordinadores. Por favor, usa el acceso de estudiantes.');
        authService.logout();
      }

    } catch (error) {
      console.error('❌ Error en login:', error);

      setShowError(true);

      // Manejar errores específicos
      if (error.status === 401) {
        setErrorMessage('Correo o contraseña incorrectos. Por favor, intenta de nuevo.');
      } else if (error.status === 404) {
        setErrorMessage('Usuario no encontrado. Verifica tus credenciales.');
      } else if (error.status === 422) {
        setErrorMessage('Dominio de correo no válido. Los docentes deben usar @escuelaing.edu.co');
      } else {
        setErrorMessage(
          error.message || 'Error al iniciar sesión. Verifica tu conexión e intenta nuevamente.'
        );
      }
    } finally {
      setIsLoading(false);
    }
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
              <label>Correo Institucional</label>
              <div className="admin-login-input-wrapper">
                <Mail className="admin-login-icon" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@escuelaing.edu.co"
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

            {/* Mensaje de error */}
            {showError && (
              <div style={{
                backgroundColor: '#fee2e2',
                border: '1px solid #ef4444',
                borderRadius: '0.5rem',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}>
                <AlertCircle size={20} color="#dc2626" />
                <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>
                  {errorMessage}
                </span>
              </div>
            )}

            <button
              onClick={handleLogin}
              className="admin-login-button"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
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