import React from 'react';
import './ClassManagement.css';

const BusquedaInscripcion = () => (
  <div className="class-management-search-section">
    <h2 className="class-management-search-title">Seleccionar Valor</h2>
    <div className="class-management-period-selector">
      <div className="class-management-period-group">
        <div className="class-management-period-group-header">
          <span>Ciclos anteriores a 2025-Periodo Anual</span><span>▼</span>
        </div>
      </div>
      <div className="class-management-period-group">
        <div className="class-management-period-group-header">
          <span>Ciclos el o después de 2025-Periodo Anual</span><span>▲</span>
        </div>
        <div className="class-management-period-option">2025-Periodo Anual</div>
        <div className="class-management-period-option">2025-Segundo Periodo</div>
        <div className="class-management-period-option">2026-Primer Periodo</div>
      </div>
    </div>
  </div>
);

export default BusquedaInscripcion;
