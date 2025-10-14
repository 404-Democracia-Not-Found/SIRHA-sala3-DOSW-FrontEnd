import React, { useState } from 'react';
import { Home, Bell, ChevronLeft, FileText } from 'lucide-react';
import './RequestReviews.css';

const RequestReviews = ({ setCurrentView }) => {
  const [filterStatus, setFilterStatus] = useState('todas');
  const [filterType, setFilterType] = useState('todas');

  // Datos de ejemplo de solicitudes
  const requests = [
    {
      id: 'SOL-2025-001',
      type: 'Cambio de Horario',
      studentName: 'Ignacio Andrés Castillo Rendón',
      studentId: '1000099728',
      date: '10/10/2025',
      status: 'pending',
      description: 'Solicito cambio de horario de la clase de Programación II del grupo 1 al grupo 2 debido a conflicto de horarios con otra materia.',
      course: 'ISIS DOSW - Desarrollo y Operaciones Software',
      reason: 'Conflicto de horarios'
    },
    {
      id: 'SOL-2025-002',
      type: 'Modificación de Inscripción',
      studentName: 'María González Pérez',
      studentId: '1000099729',
      date: '09/10/2025',
      status: 'pending',
      description: 'Solicito agregar la materia de Arquitectura de Software a mi inscripción del semestre actual.',
      course: 'ISIS ARSW - Arquitectura de Software',
      reason: 'Agregar materia'
    },
    {
      id: 'SOL-2025-003',
      type: 'Retiro de Materia',
      studentName: 'Carlos Ramírez Torres',
      studentId: '1000099730',
      date: '08/10/2025',
      status: 'approved',
      description: 'Solicito retiro de la materia de Probabilidad y Estadística por motivos personales.',
      course: 'MATE PRYE - Probabilidad y Estadística',
      reason: 'Motivos personales'
    },
    {
      id: 'SOL-2025-004',
      type: 'Cambio de Grupo',
      studentName: 'Ana Martínez López',
      studentId: '1000099731',
      date: '07/10/2025',
      status: 'rejected',
      description: 'Solicito cambio del grupo 3 al grupo 1 de Fundamentos Contables.',
      course: 'ECOADPR FCFI - Fundamentos Contables y Financieros',
      reason: 'Preferencia de horario'
    }
  ];

  const filteredRequests = requests.filter(request => {
    const statusMatch = filterStatus === 'todas' || request.status === filterStatus;
    const typeMatch = filterType === 'todas' || request.type === filterType;
    return statusMatch && typeMatch;
  });

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending':
        return 'request-reviews-status-pending';
      case 'approved':
        return 'request-reviews-status-approved';
      case 'rejected':
        return 'request-reviews-status-rejected';
      default:
        return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'approved':
        return 'Aprobada';
      case 'rejected':
        return 'Rechazada';
      default:
        return status;
    }
  };

  const handleApprove = (requestId) => {
    console.log(`Aprobar solicitud: ${requestId}`);
    alert(`Solicitud ${requestId} aprobada`);
  };

  const handleReject = (requestId) => {
    console.log(`Rechazar solicitud: ${requestId}`);
    alert(`Solicitud ${requestId} rechazada`);
  };

  return (
    <div className="request-reviews-wrapper">
      {/* Header */}
      <header className="request-reviews-header">
        <div className="request-reviews-header-content">
          <button
            onClick={() => setCurrentView('administrative-dashboard')}
            className="request-reviews-back-button"
          >
            <ChevronLeft size={20} />
            <span className="request-reviews-back-text">Administrativo</span>
          </button>

          <h1 className="request-reviews-title">Revisión de Solicitudes</h1>

          <div className="request-reviews-nav">
            <button
              onClick={() => setCurrentView('administrative-dashboard')}
              className="request-reviews-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages-administrative')}
              className="request-reviews-nav-button"
            >
              <Bell size={20} />
              <span className="request-reviews-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="request-reviews-content">
        <div className="request-reviews-main">
          
          {/* Filtros */}
          <div className="request-reviews-filters">
            <div className="request-reviews-filter-group">
              <label className="request-reviews-filter-label">Estado</label>
              <select 
                className="request-reviews-filter-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="todas">Todas</option>
                <option value="pending">Pendientes</option>
                <option value="approved">Aprobadas</option>
                <option value="rejected">Rechazadas</option>
              </select>
            </div>

            <div className="request-reviews-filter-group">
              <label className="request-reviews-filter-label">Tipo de Solicitud</label>
              <select 
                className="request-reviews-filter-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="todas">Todas</option>
                <option value="Cambio de Horario">Cambio de Horario</option>
                <option value="Modificación de Inscripción">Modificación de Inscripción</option>
                <option value="Retiro de Materia">Retiro de Materia</option>
                <option value="Cambio de Grupo">Cambio de Grupo</option>
              </select>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="request-reviews-stats">
            <div className="request-reviews-stat-card">
              <div className="request-reviews-stat-label">Total de Solicitudes</div>
              <div className="request-reviews-stat-value">{stats.total}</div>
            </div>
            <div className="request-reviews-stat-card">
              <div className="request-reviews-stat-label">Pendientes</div>
              <div className="request-reviews-stat-value">{stats.pending}</div>
            </div>
            <div className="request-reviews-stat-card">
              <div className="request-reviews-stat-label">Aprobadas</div>
              <div className="request-reviews-stat-value">{stats.approved}</div>
            </div>
            <div className="request-reviews-stat-card">
              <div className="request-reviews-stat-label">Rechazadas</div>
              <div className="request-reviews-stat-value">{stats.rejected}</div>
            </div>
          </div>

          {/* Lista de Solicitudes */}
          <div className="request-reviews-list">
            {filteredRequests.length === 0 ? (
              <div className="request-reviews-empty">
                <FileText className="request-reviews-empty-icon" size={64} />
                <h3 className="request-reviews-empty-title">No hay solicitudes</h3>
                <p className="request-reviews-empty-text">
                  No se encontraron solicitudes con los filtros seleccionados.
                </p>
              </div>
            ) : (
              filteredRequests.map((request) => (
                <div key={request.id} className="request-reviews-card">
                  <div className="request-reviews-card-header">
                    <div className="request-reviews-card-header-left">
                      <span className="request-reviews-card-id">{request.id}</span>
                      <span className="request-reviews-card-type">{request.type}</span>
                    </div>
                    <span className={`request-reviews-card-status ${getStatusClass(request.status)}`}>
                      {getStatusText(request.status)}
                    </span>
                  </div>

                  <div className="request-reviews-card-body">
                    <div className="request-reviews-card-info">
                      <div className="request-reviews-info-item">
                        <span className="request-reviews-info-label">Estudiante</span>
                        <span className="request-reviews-info-value">{request.studentName}</span>
                      </div>
                      <div className="request-reviews-info-item">
                        <span className="request-reviews-info-label">ID Estudiante</span>
                        <span className="request-reviews-info-value">{request.studentId}</span>
                      </div>
                      <div className="request-reviews-info-item">
                        <span className="request-reviews-info-label">Fecha de Solicitud</span>
                        <span className="request-reviews-info-value">{request.date}</span>
                      </div>
                      <div className="request-reviews-info-item">
                        <span className="request-reviews-info-label">Curso</span>
                        <span className="request-reviews-info-value">{request.course}</span>
                      </div>
                    </div>

                    <div className="request-reviews-card-description">
                      <div className="request-reviews-description-label">Descripción</div>
                      <p className="request-reviews-description-text">{request.description}</p>
                    </div>
                  </div>

                  {request.status === 'pending' && (
                    <div className="request-reviews-card-actions">
                      <button 
                        className="request-reviews-action-button request-reviews-button-view"
                        onClick={() => console.log(`Ver detalles: ${request.id}`)}
                      >
                        Ver Detalles
                      </button>
                      <button 
                        className="request-reviews-action-button request-reviews-button-approve"
                        onClick={() => handleApprove(request.id)}
                      >
                        Aprobar
                      </button>
                      <button 
                        className="request-reviews-action-button request-reviews-button-reject"
                        onClick={() => handleReject(request.id)}
                      >
                        Rechazar
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RequestReviews;