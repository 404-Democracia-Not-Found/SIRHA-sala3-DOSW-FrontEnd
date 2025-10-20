import React from 'react';
import { Plus } from 'lucide-react';
import './ClassManagement.css';

const SolicitudModificacion = ({ requests }) => (
  <div className="class-management-request-section">
    <div className="class-management-student-info">
      <div><strong>Nombre:</strong> IGNACIO ANDRÉS CASTILLO RENDÓN</div>
      <div><strong>Institución:</strong> ESC. COLOMBIANA DE INGENIERIA</div>
      <div><strong>Periodo:</strong> 2025-Segundo Periodo</div>
      <div><strong>Programa:</strong> Pregrado ISIS-Ingeniería de Sistemas</div>
    </div>

    <button className="class-management-new-request-button">
      <Plus size={20} /> Nueva Solicitud
    </button>

    {requests.map((request) => (
      <div key={request.id} className="class-management-request-card">
        <div className="class-management-request-header">
          <span>Solicitud #{request.id}</span>
          <span className="class-management-request-status class-management-request-status-approved">
            {request.status}
          </span>
        </div>
        <div className="class-management-request-info">
          <div><strong>Tipo Solicitud:</strong> {request.type}</div>
          <div><strong>Nº Catálogo:</strong> {request.catalogNumber}</div>
          <div><strong>Estado Solicitud:</strong> {request.status}</div>
        </div>
      </div>
    ))}
  </div>
);

export default SolicitudModificacion;
