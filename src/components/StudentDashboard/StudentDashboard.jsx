import React from 'react';
import { Home, Bell, GraduationCap, BookOpen, Calendar, User } from 'lucide-react';
import './StudentDashboard.css';

const StudentDashboard = ({ setCurrentView }) => {
  const handleNotificationClick = () => {
    setCurrentView('messages');
  };

  const handleCardClick = (cardType) => {
    console.log(`Clicked on: ${cardType}`);
  };

  return (
    <div className="student-dashboard-container">
      {/* Header */}
      <header className="student-dashboard-header">
        <div className="student-dashboard-header-content">
          {/* Logo y título */}
          <div className="student-dashboard-logo-section">
            <h1 className="student-dashboard-title">SIRHA</h1>
            <div className="student-dashboard-logo-box"></div>
          </div>

          {/* Título central */}
          <div className="student-dashboard-role">
            Estudiante
          </div>

          {/* Iconos de navegación */}
          <div className="student-dashboard-nav">
            <button className="student-dashboard-nav-button">
              <Home size={24} />
            </button>
            <button 
              onClick={handleNotificationClick}
              className="student-dashboard-nav-button"
            >
              <Bell size={24} />
              {/* Indicador de notificación */}
              <span className="student-dashboard-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="student-dashboard-main">
        <div className="student-dashboard-grid">
          
          {/* Registros Académicos */}
          <button
            onClick={() => setCurrentView('academic-records')}
            className="student-dashboard-card"
          >
            <GraduationCap className="student-dashboard-card-icon" />
            <h2 className="student-dashboard-card-title">Registros Académicos</h2>
          </button>

          {/* Gestión de Clases */}
          <button
            onClick={() => handleCardClick('class-management')}
            className="student-dashboard-card"
          >
            <BookOpen className="student-dashboard-card-icon" />
            <h2 className="student-dashboard-card-title">Gestión de Clases</h2>
          </button>

          {/* Horario de Clase */}
          <button
            onClick={() => handleCardClick('class-schedule')}
            className="student-dashboard-card"
          >
            <Calendar className="student-dashboard-card-icon" />
            <h2 className="student-dashboard-card-title">Horario de Clase</h2>
          </button>

          {/* Mi Perfil */}
          <button
            onClick={() => handleCardClick('profile')}
            className="student-dashboard-card"
          >
            <User className="student-dashboard-card-icon" />
            <h2 className="student-dashboard-card-title">Mi Perfil</h2>
          </button>

        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;