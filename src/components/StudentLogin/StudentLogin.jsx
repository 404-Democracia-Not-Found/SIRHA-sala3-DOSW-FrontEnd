import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { authService } from '../../services';
import './StudentLogin.css';

const StudentLogin = ({ setCurrentView }) => {
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

      // Verificar que el usuario sea estudiante
      if (response.user.rol !== 'ESTUDIANTE') {
        setShowError(true);
        setErrorMessage('Este acceso es solo para estudiantes. Por favor, usa el acceso correspondiente a tu rol.');
        
        // Cerrar sesión ya que el rol no corresponde
        authService.logout();
        return;
      }

      // Redirigir al dashboard de estudiante
      setCurrentView('student-dashboard');

    } catch (error) {
      console.error('❌ Error en login:', error);

      setShowError(true);

      // Manejar errores específicos
      if (error.status === 401) {
        setErrorMessage('Correo o contraseña incorrectos. Por favor, intenta de nuevo.');
      } else if (error.status === 404) {
        setErrorMessage('Usuario no encontrado. Verifica tus credenciales.');
      } else if (error.status === 422) {
        setErrorMessage('Dominio de correo no válido. Los estudiantes deben usar @mail.escuelaing.edu.co');
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
                {errorMessage || 'Error: Correo o contraseña incorrectos. Por favor, intenta de nuevo.'}
              </p>
            </div>
          )}

          {/* Botón de login */}
          <button
            onClick={handleLogin}
            className="student-login-button"
            disabled={isLoading}
            style={{ 
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Ingresando...' : 'Ingresar'}
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