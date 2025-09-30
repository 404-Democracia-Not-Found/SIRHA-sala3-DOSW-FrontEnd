import React from 'react';
import { User } from 'lucide-react';
import './RoleSelection.css';

const RoleSelection = ({ setCurrentView }) => {
  const handleSupport = () => {
    alert('Contacta a serviciosti@escuelaing.edu.co');
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-card">
        {/* Logo */}
        <div className="role-selection-logo-container">
          <div className="role-selection-logo">
            <div className="role-selection-logo-inner">
              <div className="role-selection-logo-circle"></div>
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="role-selection-header">
          <h1 className="role-selection-title">
            Sistema de Gestión Escolar
          </h1>
          <p className="role-selection-subtitle">Selecciona tu rol para continuar</p>
        </div>

        {/* Botones */}
        <div className="role-selection-button-container">
          <button
            onClick={() => setCurrentView('student-login')}
            className="role-selection-button-primary"
          >
            <User size={20} />
            Ingresar como Estudiante
          </button>
          
          <button
            onClick={() => setCurrentView('admin-login')}
            className="role-selection-button-secondary"
          >
            <User size={20} />
            Ingresar como Administrativo
          </button>
        </div>

        {/* Link de soporte */}
        <div className="role-selection-support-link">
          <button
            onClick={handleSupport}
            className="role-selection-support-button"
          >
            Contacto de Soporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;