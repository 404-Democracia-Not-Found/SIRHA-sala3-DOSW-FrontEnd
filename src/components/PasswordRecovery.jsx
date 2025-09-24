import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const PasswordRecovery = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    if (email) {
      alert('Si el correo existe, recibirás instrucciones para recuperar tu contraseña.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Recuperación de Contraseña
          </h1>
          <p className="text-gray-600">Sistema de Gestión Escolar</p>
        </div>

        {/* Descripción */}
        <div className="text-center mb-8">
          <p className="text-gray-700">
            Ingrese su correo electrónico y le enviaremos instrucciones para restablecer su contraseña.
          </p>
        </div>

        {/* Formulario */}
        <div className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sucorreo@ejemplo.com"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-center"
            />
          </div>

          <button
            onClick={handleRecovery}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Enviar enlace de recuperación
          </button>

          <div className="text-center">
            <button
              onClick={() => setCurrentView('role-selection')}
              className="text-red-600 hover:text-red-800 text-sm"
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