import React, { useState } from 'react';
import { Home, Bell, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import './ScheduleAdmin.css';

const ScheduleAdmin = ({ setCurrentView }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState('semanal');

  const schedule = [
    {
      id: 1,
      code: 'ISIS PRI2IS-2',
      name: 'Proyecto Integrador 2',
      day: 'Lunes',
      startTime: '7:00',
      endTime: '8:30',
      building: 'Edificio G C1-203',
      color: '#9fc5e8'
    },
    {
      id: 2,
      code: 'ISIS DOSW-3',
      name: 'Desarrollo y Operaciones Software',
      day: 'Martes',
      startTime: '7:00',
      endTime: '8:30',
      building: 'Edificio G C4-102',
      color: '#9fc5e8'
    },
    {
      id: 15,
      code: 'ISIS PRI2IS-2L',
      name: 'Proyecto Integrador 2 - Laboratorio',
      day: 'Viernes',
      startTime: '1:00',
      endTime: '2:30',
      building: 'Edificio B E-LABSW',
      color: '#f4cccc'
    },
    {
      id: 16,
      code: 'ISIS DOSW-301',
      name: 'Desarrollo y Operaciones Software - Laboratorio',
      day: 'Miércoles',
      startTime: '1:00',
      endTime: '4:00',
      building: 'Edificio H H-305',
      color: '#f4cccc'
    },
    {
      id: 99,
      code: 'Reunion',
      name: 'Visita de Evaluación Externa',
      day: 'Jueves',
      startTime: '2:00',
      endTime: '3:00',
      building: 'Edificio A A-301',
      color: '#9ded67ff'
    }
  ];

  const handleMenuClick = (view) => {
    setShowMenu(false);
    setCurrentView(view);
  };

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const hours = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'];

  const getClassesForDayAndHour = (day, hour) => {
    return schedule.filter(cls => {
      const classHour = parseInt(cls.startTime.split(':')[0]);
      const currentHour = parseInt(hour.split(':')[0]);
      return cls.day === day && classHour === currentHour;
    });
  };

  const getDayDate = (dayIndex) => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = dayIndex - (currentDay === 0 ? 7 : currentDay) + 1;
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + diff + (currentWeek * 7));
    return targetDate.getDate();
  };

  const getWeekRange = () => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - (today.getDay() === 0 ? 6 : today.getDay() - 1) + (currentWeek * 7));
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()} - ${end.getDate()}/${end.getMonth() + 1}/${end.getFullYear()}`;
  };

  return (
    <div className="admin-schedule-wrapper">
      {/* Header */}
      <header className="admin-schedule-header">
        <div className="admin-schedule-header-content">
          <button
            onClick={() => setCurrentView('administrative-dashboard')}
            className="admin-schedule-back-button"
          >
            <ChevronLeft size={20} />
            <span className="admin-schedule-back-text">Administrativo</span>
          </button>

          <h1 className="admin-schedule-title">Horario de Clases</h1>

          <div className="admin-schedule-nav">
            <button
              onClick={() => setCurrentView('administrative-dashboard')}
              className="admin-schedule-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages-administrative')}
              className="admin-schedule-nav-button"
            >
              <Bell size={20} />
              <span className="admin-schedule-notification-badge"></span>
            </button>
            <div className="admin-schedule-menu-wrapper">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="admin-schedule-nav-button"
              >
                <MoreVertical size={20} />
              </button>
              
              {showMenu && (
                <div className="admin-schedule-dropdown">
                  <button
                    onClick={() => handleMenuClick('request-reviews')}
                    className="admin-schedule-dropdown-item"
                  >
                    Revisiones de Solicitudes
                  </button>
                  <button
                    onClick={() => handleMenuClick('reporting')}
                    className="admin-schedule-dropdown-item"
                  >
                    Registro
                  </button>
                  <button
                    onClick={() => handleMenuClick('administrative-user')}
                    className="admin-schedule-dropdown-item"
                  >
                    Mi Perfil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="admin-schedule-content">
        <div className="admin-schedule-main">
          {/* Controles superiores */}
          <div className="admin-schedule-controls">
            <div className="admin-schedule-view-options">
              <label className="admin-schedule-radio-label">
                <input
                  type="radio"
                  name="viewMode"
                  checked={viewMode === 'lista'}
                  onChange={() => setViewMode('lista')}
                />
                <span>Vista Listado</span>
              </label>
              <label className="admin-schedule-radio-label">
                <input
                  type="radio"
                  name="viewMode"
                  checked={viewMode === 'semanal'}
                  onChange={() => setViewMode('semanal')}
                />
                <span>Vista Horario Semanal</span>
              </label>
            </div>
          </div>

          {/* Navegación de semanas */}
          <div className="admin-schedule-week-navigation">
            <button
              onClick={() => setCurrentWeek(currentWeek - 1)}
              className="admin-schedule-week-button"
            >
              <ChevronLeft size={20} />
              Semana Anterior
            </button>
            <span className="admin-schedule-week-range">Semana de {getWeekRange()}</span>
            <button
              onClick={() => setCurrentWeek(currentWeek + 1)}
              className="admin-schedule-week-button"
            >
              Semana Siguiente
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Horario Semanal */}
          {viewMode === 'semanal' && (
            <div className="admin-schedule-calendar">
              <div className="admin-schedule-grid">
                {/* Header de días */}
                <div className="admin-schedule-time-column">
                  <div className="admin-schedule-hour-header">Hora</div>
                  {hours.map((hour, index) => (
                    <div key={index} className="admin-schedule-hour-cell">
                      {hour}
                    </div>
                  ))}
                </div>

                {/* Columnas de días */}
                {days.slice(0, 5).map((day, dayIndex) => (
                  <div key={dayIndex} className="admin-schedule-day-column">
                    <div className="admin-schedule-day-header">
                      <div className="admin-schedule-day-name">{day}</div>
                      <div className="admin-schedule-day-date">{getDayDate(dayIndex)}</div>
                    </div>
                    {hours.map((hour, hourIndex) => {
                      const classes = getClassesForDayAndHour(day, hour);
                      return (
                        <div key={hourIndex} className="admin-schedule-hour-slot">
                          {classes.map(cls => (
                            <div
                              key={cls.id}
                              className="admin-schedule-class-block"
                              style={{ backgroundColor: cls.color }}
                            >
                              <div className="admin-schedule-class-code">{cls.code}</div>
                              <div className="admin-schedule-class-name">{cls.name}</div>
                              <div className="admin-schedule-class-time">
                                {cls.startTime} - {cls.endTime}
                              </div>
                              <div className="admin-schedule-class-location">{cls.building}</div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vista Lista */}
          {viewMode === 'lista' && (
            <div className="admin-schedule-list">
              {days.slice(0, 5).map((day, index) => {
                const dayClasses = schedule.filter(cls => cls.day === day);
                return (
                  <div key={index} className="admin-schedule-list-day">
                    <h3 className="admin-schedule-list-day-title">{day}</h3>
                    <div className="admin-schedule-list-items">
                      {dayClasses.length === 0 ? (
                        <p className="admin-schedule-list-empty">No hay clases programadas</p>
                      ) : (
                        dayClasses.map(cls => (
                          <div key={cls.id} className="admin-schedule-list-item">
                            <div className="admin-schedule-list-time">{cls.startTime} - {cls.endTime}</div>
                            <div className="admin-schedule-list-details">
                              <div className="admin-schedule-list-code">{cls.code}</div>
                              <div className="admin-schedule-list-name">{cls.name}</div>
                              <div className="admin-schedule-list-location">{cls.building}</div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleAdmin;