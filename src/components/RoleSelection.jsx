import React, { useState } from 'react';
import { User } from 'lucide-react';

const RoleSelection = ({ setCurrentView }) => {
  const handleSupport = () => {
    alert('Contacta a serviciosti@escuelaing.edu.co');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Sistema de Gestión Escolar
          </h1>
          <p className="text-gray-600">Selecciona tu rol para continuar</p>
        </div>

        {/* Botones */}
        <div className="space-y-4">
          <button
            onClick={() => setCurrentView('student-login')}
            className="w-full bg-red-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-900 transition-colors flex items-center justify-center gap-2"
          >
            <User size={20} />
            Ingresar como Estudiante
          </button>
          
          <button
            onClick={() => setCurrentView('admin-login')}
            className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <User size={20} />
            Ingresar como Administrativo
          </button>
        </div>

        {/* Link de soporte */}
        <div className="text-center mt-6">
          <button
            onClick={handleSupport}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Contacto de Soporte
          </button>
        </div>
      </div>
    </div>
  );
};
export default RoleSelection;