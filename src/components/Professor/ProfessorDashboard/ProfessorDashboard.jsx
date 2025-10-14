import React, { useState } from 'react';
import { Home, Bell, GraduationCap, BookOpen, Calendar, User, ChevronDown } from 'lucide-react';
import './ProfessorDashboard.css';

const ProfessorDashboard = ({ setCurrentView }) => {
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const handleNotificationClick = () => {
    setCurrentView('messages-professor');
  };

  const handleCardClick = (cardType) => {
    console.log(`Clicked on: ${cardType}`);
  };

  return (
    <div className="professor-dashboard-container">
      {/* Header */}
      <header className="professor-dashboard-header">
        <div className="professor-dashboard-header-content">
          {/* Logo y título */}
          <div className="professor-dashboard-logo-section">
            <h1 className="professor-dashboard-title">SIRHA</h1>
            <div className="professor-dashboard-logo-box"></div>
          </div>

          {/* Título central con menú de roles */}
          <div className="professor-dashboard-role-wrapper">
            <button 
              onClick={() => setShowRoleMenu(!showRoleMenu)}
              className="professor-dashboard-role-button"
            >
              Profesor
              <ChevronDown size={16} style={{ marginLeft: '0.5rem' }} />
            </button>
            
            {showRoleMenu && (
              <div className="professor-dashboard-role-menu">
                <button 
                  onClick={() => {
                    setShowRoleMenu(false);
                    // Mantiene en la vista actual
                  }}
                  className="professor-dashboard-role-menu-item"
                >
                  Profesor
                </button>
                <button 
                  onClick={() => {
                    setShowRoleMenu(false);
                    setCurrentView('administrative-dashboard');
                  }}
                  className="professor-dashboard-role-menu-item"
                >
                  Administrativo
                </button>
              </div>
            )}
          </div>

          {/* Iconos de navegación */}
          <div className="professor-dashboard-nav">
            <button className="professor-dashboard-nav-button">
              <Home size={24} />
            </button>
            <button 
              onClick={handleNotificationClick}
              className="professor-dashboard-nav-button"
            >
              <Bell size={24} />
              {/* Indicador de notificación */}
              <span className="professor-dashboard-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="professor-dashboard-main">
        <div className="professor-dashboard-grid">

          {/* Registros de Clases */}
          <button
            onClick={() => setCurrentView('classes-records')}
            className="professor-dashboard-card"
          >
            <GraduationCap className="professor-dashboard-card-icon" />
            <h2 className="professor-dashboard-card-title">Registros de Clases</h2>
          </button>

          {/* Gestión de Clases */}
          <button
            onClick={() => setCurrentView('class-management-professor')}
            className="professor-dashboard-card"
          >
            <BookOpen className="professor-dashboard-card-icon" />
            <h2 className="professor-dashboard-card-title">Gestión de Clases</h2>
          </button>

          {/* Horario de Clase */}
          <button
            onClick={() => setCurrentView('schedule')}
            className="professor-dashboard-card"
          >
            <Calendar className="professor-dashboard-card-icon" />
            <h2 className="professor-dashboard-card-title">Horario de Clase</h2>
          </button>

          {/* Mi Perfil */}
          <button
            onClick={() => setCurrentView('professor-user')}
            className="professor-dashboard-card"
          >
            <User className="professor-dashboard-card-icon" />
            <h2 className="professor-dashboard-card-title">Mi Perfil</h2>
          </button>

        </div>
      </main>
    </div>
  );
};

export default ProfessorDashboard;