import React, { useState } from 'react';
import { Mail, Lock, Shield, AlertCircle } from 'lucide-react';
import { authService } from '../../services';
import './CoordinatorLogin.css';

const CoordinatorLogin = ({ setCurrentView }) => {
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

      // Verificar que el usuario sea coordinador
      if (response.user.rol !== 'COORDINADOR') {
        setShowError(true);
        setErrorMessage('Este acceso es solo para coordinadores. Por favor, usa el acceso correspondiente a tu rol.');
        authService.logout();
        return;
      }

      // Redirigir al dashboard administrativo
      setCurrentView('administrative-dashboard');

    } catch (error) {
      console.error('❌ Error en login:', error);

      setShowError(true);

      // Manejar errores específicos
      if (error.status === 401) {
        setErrorMessage('Correo o contraseña incorrectos. Por favor, intenta de nuevo.');
      } else if (error.status === 404) {
        setErrorMessage('Usuario no encontrado. Verifica tus credenciales.');
      } else if (error.status === 422) {
        setErrorMessage('Dominio de correo no válido. Los coordinadores deben usar @escuelaing.edu.co');
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              className="coordinator-login-button"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'Ingresando...' : 'Ingresar al Panel'}
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
