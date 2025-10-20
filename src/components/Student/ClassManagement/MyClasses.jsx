import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ClassManagement.css';

const MyClasses = ({ myClasses }) => {
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
            <div className="class-management-class-info-row">
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Estado</span>
                <span className="class-management-class-info-value">{classItem.status}</span>
              </div>
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Unidades</span>
                <span className="class-management-class-info-value">{classItem.units.toFixed(2)}</span>
              </div>
            </div>

            <div className="class-management-class-info-row">
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Sistema Calif</span>
                <span className="class-management-class-info-value">{classItem.gradingSystem}</span>
              </div>
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Calif</span>
                <span className="class-management-class-info-value">-</span>
              </div>
            </div>

            <div className="class-management-class-info-row">
              <div className="class-management-class-info-item class-management-class-info-item-full">
                <span className="class-management-class-info-label">Programa Académico</span>
                <span className="class-management-class-info-value">{classItem.program}</span>
              </div>
            </div>

            {/* Horarios */}
            <table className="class-management-class-schedule-table">
              <thead>
                <tr>
                  <th>Clase</th>
                  <th>Fechas Inicio/Fin</th>
                  <th>Días y Horas</th>
                  <th>Aula</th>
                </tr>
              </thead>
              <tbody>
                {classItem.schedules.map((schedule) => (
                  <tr key={`${classItem.id}-${schedule.dates}-${schedule.days}`}>
                    <td>{schedule === classItem.schedules[0] ? classItem.code : ''}</td>
                    <td>{schedule.dates}</td>
                    <td>
                      <div>Días: {schedule.days}</div>
                      <div>Horas: {schedule.hours}</div>
                    </td>
                    <td>{schedule.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button 
              onClick={() => console.log('Ver límites de inscripción')}
              className="class-management-class-link"
            >
              Límites Inscripción
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

MyClasses.propTypes = {
  myClasses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      units: PropTypes.number.isRequired,
      program: PropTypes.string.isRequired,
      gradingSystem: PropTypes.string.isRequired,
      schedules: PropTypes.arrayOf(
        PropTypes.shape({
          dates: PropTypes.string.isRequired,
          days: PropTypes.string.isRequired,
          hours: PropTypes.string.isRequired,
          room: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default MyClasses;
