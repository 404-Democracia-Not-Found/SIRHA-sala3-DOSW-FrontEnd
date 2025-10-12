import React from 'react';
import { Home, Bell, GraduationCap, BookOpen, Calendar, User } from 'lucide-react';
import './ProfessorDashboard.css';

const ProfessorDashboard = ({ setCurrentView }) => {
  const handleNotificationClick = () => {
    setCurrentView('messages');
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

          {/* Título central */}
          <div className="professor-dashboard-role">
            Profesor
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
            onClick={() => handleCardClick('class-management')}
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
            onClick={() => handleCardClick('profile')}
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