import React, { useState } from 'react';
import { Home, Bell, User, Calendar, FileCheck, ClipboardList, ChevronDown } from 'lucide-react';
import './AdministrativeDashboard.css';

const AdministrativeDashboard = ({ setCurrentView }) => {
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const handleNotificationClick = () => {
    setCurrentView('messages-administrative');
  };

  const handleCardClick = (cardType) => {
    console.log(`Clicked on: ${cardType}`);
  };

  return (
    <div className="administrative-dashboard-container">
      {/* Header */}
      <header className="administrative-dashboard-header">
        <div className="administrative-dashboard-header-content">
          {/* Logo y título */}
          <div className="administrative-dashboard-logo-section">
            <h1 className="administrative-dashboard-title">SIRHA</h1>
            <div className="administrative-dashboard-logo-box"></div>
          </div>

          {/* Título central con menú de roles */}
          <div className="administrative-dashboard-role-wrapper">
            <button 
              onClick={() => setShowRoleMenu(!showRoleMenu)}
              className="administrative-dashboard-role-button"
            >
              Administrativo
              <ChevronDown size={16} style={{ marginLeft: '0.5rem' }} />
            </button>
            
            {showRoleMenu && (
              <div className="administrative-dashboard-role-menu">
                <button 
                  onClick={() => {
                    setShowRoleMenu(false);
                    setCurrentView('professor-dashboard');
                  }}
                  className="administrative-dashboard-role-menu-item"
                >
                  Profesor
                </button>
                <button 
                  onClick={() => {
                    setShowRoleMenu(false);
                    // Mantiene en la vista actual
                  }}
                  className="administrative-dashboard-role-menu-item"
                >
                  Administrativo
                </button>
              </div>
            )}
          </div>

          {/* Iconos de navegación */}
          <div className="administrative-dashboard-nav">
            <button 
              onClick={() => setCurrentView('administrative-dashboard')}
              className="administrative-dashboard-nav-button"
            >
              <Home size={24} />
            </button>
            <button 
              onClick={handleNotificationClick}
              className="administrative-dashboard-nav-button"
            >
              <Bell size={24} />
              {/* Indicador de notificación */}
              <span className="administrative-dashboard-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="administrative-dashboard-main">
        <div className="administrative-dashboard-grid">

          {/* Mi Perfil */}
          <button
            onClick={() => setCurrentView('administrative-user')}
            className="administrative-dashboard-card"
          >
            <User className="administrative-dashboard-card-icon" />
            <h2 className="administrative-dashboard-card-title">Mi Perfil</h2>
          </button>

          {/* Horario */}
          <button
            onClick={() => setCurrentView('schedule-admin')}
            className="administrative-dashboard-card"
          >
            <Calendar className="administrative-dashboard-card-icon" />
            <h2 className="administrative-dashboard-card-title">Horario</h2>
          </button>

          {/* Revisión de Solicitudes */}
          <button
            onClick={() => setCurrentView('request-reviews')}
            className="administrative-dashboard-card"
          >
            <FileCheck className="administrative-dashboard-card-icon" />
            <h2 className="administrative-dashboard-card-title">Revisión de Solicitudes</h2>
          </button>

          {/* Registro */}
          <button
            onClick={() => setCurrentView('registration')}
            className="administrative-dashboard-card"
          >
            <ClipboardList className="administrative-dashboard-card-icon" />
            <h2 className="administrative-dashboard-card-title">Registro</h2>
          </button>

        </div>
      </main>
    </div>
  );
};

export default AdministrativeDashboard;