import React, { useState } from 'react';
import { Home, Bell, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import './ClassSchedule.css';

const ClassSchedule = ({ setCurrentView }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState('semanal'); // 'lista' o 'semanal'

  // Datos de ejemplo para las clases
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
      id: 3,
      code: 'ECOADPR FCFI',
      name: 'Fundamentos contables y financieros',
      day: 'Lunes',
      startTime: '8:30',
      endTime: '10:00',
      building: 'Clase Online',
      color: '#b6d7a8'
    },
    {
      id: 4,
      code: 'ISIS AYSR-1',
      name: 'Arquitectura y Servicios de Red',
      day: 'Martes',
      startTime: '8:30',
      endTime: '10:00',
      building: 'Clase Online',
      color: '#b6d7a8'
    },
    {
      id: 5,
      code: 'ECOADPR FCFI',
      name: 'Fundamentos contables y financieros',
      day: 'Miércoles',
      startTime: '8:30',
      endTime: '10:00',
      building: 'Clase Online',
      color: '#b6d7a8'
    },
    {
      id: 6,
      code: 'ISIS AYSR-1',
      name: 'Arquitectura y Servicios de Red',
      day: 'Jueves',
      startTime: '8:30',
      endTime: '10:00',
      building: 'Edificio G C1-102',
      color: '#b6d7a8'
    },
    {
      id: 7,
      code: 'ECOADPR FCFI',
      name: 'Fundamentos contables y financieros',
      day: 'Viernes',
      startTime: '8:30',
      endTime: '10:00',
      building: 'Edificio G-Auditorio 201',
      color: '#b6d7a8'
    },
    {
      id: 8,
      code: 'OTRA FUPR-2',
      name: 'Fundamentos de Proyectos',
      day: 'Lunes',
      startTime: '10:00',
      endTime: '11:30',
      building: 'Edificio D A-301',
      color: '#ffe599'
    },
    {
      id: 9,
      code: 'MATE PRYE-6',
      name: 'Probabilidad y estadística',
      day: 'Martes',
      startTime: '10:00',
      endTime: '11:30',
      building: 'Clase Online',
      color: '#ffe599'
    },
    {
      id: 10,
      code: 'MATE PRYE-6',
      name: 'Probabilidad y estadística',
      day: 'Miércoles',
      startTime: '10:00',
      endTime: '11:30',
      building: 'Edificio D C4-202',
      color: '#ffe599'
    },
    {
      id: 11,
      code: 'MATE PRYE-6',
      name: 'Probabilidad y estadística',
      day: 'Jueves',
      startTime: '10:00',
      endTime: '11:30',
      building: 'Edificio E H-104',
      color: '#ffe599'
    },
    {
      id: 12,
      code: 'MATE PRYE-6',
      name: 'Probabilidad y estadística',
      day: 'Viernes',
      startTime: '10:00',
      endTime: '11:30',
      building: 'Edificio E H-Auditorio 201',
      color: '#ffe599'
    },
    {
      id: 13,
      code: 'CIENCBAS FUCE-1',
      name: 'Fundamentos de Ciencias del Espacio',
      day: 'Martes',
      startTime: '11:30',
      endTime: '1:00',
      building: 'Edificio H H-303',
      color: '#d5a6bd'
    },
    {
      id: 14,
      code: 'OTRA FUPR-2',
      name: 'Fundamentos de Proyectos',
      day: 'Viernes',
      startTime: '11:30',
      endTime: '1:00',
      building: 'Edificio G G-100',
      color: '#d5a6bd'
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
      day: 'Jueves',
      startTime: '1:00',
      endTime: '4:00',
      building: 'Edificio H H-305',
      color: '#f4cccc'
    },
    {
      id: 17,
      code: 'CIENCBAS FUCE-1',
      name: 'Fundamentos de Ciencias del Espacio',
      day: 'Miércoles',
      startTime: '2:30',
      endTime: '4:00',
      building: 'Edificio H H-305',
      color: '#d9ead3'
    },
    {
      id: 18,
      code: 'ISIS AYSR-2L',
      name: 'Arquitectura y Servicios de Red - Laboratorio',
      day: 'Miércoles',
      startTime: '4:00',
      endTime: '7:00',
      building: 'Edificio B E-LABRED',
      color: '#d9ead3'
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
    <div className="class-schedule-wrapper">
      {/* Header */}
      <header className="class-schedule-header">
        <div className="class-schedule-header-content">
          <button
            onClick={() => setCurrentView('student-dashboard')}
            className="class-schedule-back-button"
          >
            <ChevronLeft size={20} />
            <span className="class-schedule-back-text">Alumnos</span>
          </button>

          <h1 className="class-schedule-title">Horario de Clases</h1>

          <div className="class-schedule-nav">
            <button
              onClick={() => setCurrentView('student-dashboard')}
              className="class-schedule-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages')}
              className="class-schedule-nav-button"
            >
              <Bell size={20} />
              <span className="class-schedule-notification-badge"></span>
            </button>
            <div className="class-schedule-menu-wrapper">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="class-schedule-nav-button"
              >
                <MoreVertical size={20} />
              </button>
              
              {showMenu && (
                <div className="class-schedule-dropdown">
                  <button
                    onClick={() => handleMenuClick('class-management')}
                    className="class-schedule-dropdown-item"
                  >
                    Gestión de Clases
                  </button>
                  <button
                    onClick={() => handleMenuClick('academic-records')}
                    className="class-schedule-dropdown-item"
                  >
                    Registros Académicos
                  </button>
                  <button
                    onClick={() => handleMenuClick('profile')}
                    className="class-schedule-dropdown-item"
                  >
                    Mi Perfil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="class-schedule-content">
        <div className="class-schedule-main">
          {/* Controles superiores */}
          <div className="class-schedule-controls">
            <div className="class-schedule-view-options">
              <label className="class-schedule-radio-label">
                <input
                  type="radio"
                  name="viewMode"
                  checked={viewMode === 'lista'}
                  onChange={() => setViewMode('lista')}
                />
                <span>Vista Listado</span>
              </label>
              <label className="class-schedule-radio-label">
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
          <div className="class-schedule-week-navigation">
            <button
              onClick={() => setCurrentWeek(currentWeek - 1)}
              className="class-schedule-week-button"
            >
              <ChevronLeft size={20} />
              Semana Anterior
            </button>
            <span className="class-schedule-week-range">Semana de {getWeekRange()}</span>
            <button
              onClick={() => setCurrentWeek(currentWeek + 1)}
              className="class-schedule-week-button"
            >
              Semana Siguiente
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Horario Semanal */}
          {viewMode === 'semanal' && (
            <div className="class-schedule-calendar">
              <div className="class-schedule-grid">
                {/* Header de días */}
                <div className="class-schedule-time-column">
                  <div className="class-schedule-hour-header">Hora</div>
                  {hours.map((hour, index) => (
                    <div key={index} className="class-schedule-hour-cell">
                      {hour}
                    </div>
                  ))}
                </div>

                {/* Columnas de días */}
                {days.slice(0, 5).map((day, dayIndex) => (
                  <div key={dayIndex} className="class-schedule-day-column">
                    <div className="class-schedule-day-header">
                      <div className="class-schedule-day-name">{day}</div>
                      <div className="class-schedule-day-date">{getDayDate(dayIndex)}</div>
                    </div>
                    {hours.map((hour, hourIndex) => {
                      const classes = getClassesForDayAndHour(day, hour);
                      return (
                        <div key={hourIndex} className="class-schedule-hour-slot">
                          {classes.map(cls => (
                            <div
                              key={cls.id}
                              className="class-schedule-class-block"
                              style={{ backgroundColor: cls.color }}
                            >
                              <div className="class-schedule-class-code">{cls.code}</div>
                              <div className="class-schedule-class-name">{cls.name}</div>
                              <div className="class-schedule-class-time">
                                {cls.startTime} - {cls.endTime}
                              </div>
                              <div className="class-schedule-class-location">{cls.building}</div>
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
            <div className="class-schedule-list">
              {days.slice(0, 5).map((day, index) => {
                const dayClasses = schedule.filter(cls => cls.day === day);
                return (
                  <div key={index} className="class-schedule-list-day">
                    <h3 className="class-schedule-list-day-title">{day}</h3>
                    <div className="class-schedule-list-items">
                      {dayClasses.length === 0 ? (
                        <p className="class-schedule-list-empty">No hay clases programadas</p>
                      ) : (
                        dayClasses.map(cls => (
                          <div key={cls.id} className="class-schedule-list-item">
                            <div className="class-schedule-list-time">{cls.startTime} - {cls.endTime}</div>
                            <div className="class-schedule-list-details">
                              <div className="class-schedule-list-code">{cls.code}</div>
                              <div className="class-schedule-list-name">{cls.name}</div>
                              <div className="class-schedule-list-location">{cls.building}</div>
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

export default ClassSchedule;