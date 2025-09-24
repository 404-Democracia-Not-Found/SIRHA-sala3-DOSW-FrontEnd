import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const AdminLogin = ({ setCurrentView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('¡Bienvenido, administrativo!');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Panel izquierdo */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 text-white p-12 flex-col justify-center">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-red-600 rounded"></div>
            <span className="text-xl font-semibold">School Manager</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido de nuevo, Administrador.
          </h1>
          <p className="text-gray-400 text-lg">
            Inicie sesión para acceder a su panel de control y gestionar las operaciones 
            escolares sin problemas.
          </p>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Inicio de Sesión de Administrador
            </h2>
            <p className="text-gray-600">Por favor, ingrese sus credenciales para continuar.</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usuario
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Correo institucional asignado"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Iniciar Sesión
            </button>

            <div className="text-center">
              <button
                onClick={() => setCurrentView('password-recovery')}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <span className="text-gray-600 text-sm">¿No es un administrador? </span>
            <button
              onClick={() => setCurrentView('student-login')}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
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