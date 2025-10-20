import React, { useState } from 'react';
import './ClassManagement.css';

const MisClases = ({ myClasses }) => {
  const [selectedView, setSelectedView] = useState('por-clase');
  const [showInscribed, setShowInscribed] = useState(true);
  const [showDropped, setShowDropped] = useState(false);

  return (
    <div>
      <div className="class-management-period-info">
        <div className="class-management-period-title">2025-Segundo Periodo</div>
        <div className="class-management-period-status">Pregrado</div>
      </div>

      <div className="class-management-tabs">
        <button
          className={`class-management-tab ${selectedView === 'por-clase' ? 'class-management-tab-active' : ''}`}
          onClick={() => setSelectedView('por-clase')}
        >
          Por Clase
        </button>
        <button
          className={`class-management-tab ${selectedView === 'por-fecha' ? 'class-management-tab-active' : ''}`}
          onClick={() => setSelectedView('por-fecha')}
        >
          Por Fecha
        </button>
      </div>

      <div className="class-management-filters">
        <label className="class-management-checkbox-label">
          <input
            type="checkbox"
            checked={showInscribed}
            onChange={(e) => setShowInscribed(e.target.checked)}
          />
          <span>Mostrar Clases Inscritas</span>
        </label>
        <label className="class-management-checkbox-label">
          <input
            type="checkbox"
            checked={showDropped}
            onChange={(e) => setShowDropped(e.target.checked)}
          />
          <span>Mostrar Bajas Clases</span>
        </label>
      </div>

      {myClasses.map((classItem) => (
        <div key={classItem.id} className="class-management-class-card">
          <div className="class-management-class-header">
            <span>{classItem.code} {classItem.name}</span>
          </div>
          <div className="class-management-class-body">
            {/* Información de clase */}
            <div className="class-management-class-info-grid">
              <div>
                <span>Estado</span>
                <span>{classItem.status}</span>
              </div>
              <div>
                <span>Unidades</span>
                <span>{classItem.units}</span>
              </div>
            </div>

            {/* Horarios */}
            <table className="class-management-class-schedule-table">
              <thead>
                <tr>
                  <th>Clase</th>
                  <th>Fechas</th>
                  <th>Días y Horas</th>
                  <th>Aula</th>
                </tr>
              </thead>
              <tbody>
                {classItem.schedules.map((schedule, index) => (
                  <tr key={index}>
                    <td>{index === 0 ? classItem.code : ''}</td>
                    <td>{schedule.dates}</td>
                    <td>{schedule.days}<br />{schedule.hours}</td>
                    <td>{schedule.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MisClases;
