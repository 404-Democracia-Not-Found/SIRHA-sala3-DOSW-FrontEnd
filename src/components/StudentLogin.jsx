import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const StudentLogin = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setShowError(true);
      return;
    }
    alert('¡Bienvenido, estudiante!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Ingreso Estudiantes
          </h1>
          <p className="text-gray-600">Por favor, ingresa tus credenciales.</p>
        </div>

        {/* Formulario */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Institucional
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.nombre@institucion.edu"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          {/* Mensaje de error */}
          {showError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
              <p className="text-red-700 text-sm">
                Error: Correo o contraseña incorrectos. Por favor, intenta de nuevo.
              </p>
            </div>
          )}

          {/* Botón de login */}
          <button
            onClick={handleLogin}
            className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
          >
            Ingresar
          </button>

          {/* Link de recuperación */}
          <div className="text-center">
            <button
              onClick={() => setCurrentView('password-recovery')}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              ¿Olvidaste tu Contraseña?
            </button>
          </div>
        </div>

        {/* Botón atrás */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentView('role-selection')}
            className="text-red-600 hover:text-red-800 flex items-center justify-center gap-2 mx-auto"
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