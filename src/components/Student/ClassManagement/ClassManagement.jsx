import React, { useState } from 'react';
import { Home, Bell, MoreVertical, ChevronLeft, ShoppingCart, Search, FileText, Plus } from 'lucide-react';
import './ClassManagement.css';

const ClassManagement = ({ setCurrentView }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('mis-clases');
  const [selectedView, setSelectedView] = useState('por-clase');
  const [showInscribed, setShowInscribed] = useState(true);
  const [showDropped, setShowDropped] = useState(false);

  // Datos de ejemplo para las clases
  const myClasses = [
    {
      id: 1,
      code: 'CIENCBAS FUCE',
      name: 'Fundamentos de Ciencias del Espacio',
      status: 'Inscrito',
      units: '2,00',
      gradeSystem: 'Plan de Calificación Pregrado Numérico 3,0',
      program: 'Ingeniería de Sistemas',
      schedules: [
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Martes',
          hours: '11:30AM A 1:00PM',
          room: 'H-303'
        },
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Miércoles',
          hours: '2:30PM A 4:00PM',
          room: 'H-303'
        }
      ]
    },
    {
      id: 2,
      code: 'ECOADPR FCFI',
      name: 'Fundamentos contables y financieros',
      status: 'Inscrito',
      units: '3,00',
      gradeSystem: 'Plan de Calificación Pregrado Numérico 3,0',
      program: 'Ingeniería de Sistemas',
      schedules: [
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Lunes',
          hours: '8:30AM A 10:00AM',
          room: 'G-205'
        },
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Miércoles',
          hours: '8:30AM A 10:00AM',
          room: 'G-205'
        },
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Viernes',
          hours: '8:30AM A 10:00AM',
          room: 'G-205'
        }
      ]
    }
  ];

  // Datos para solicitudes de modificación
  const requests = [
    {
      id: 1,
      requestNumber: 'PRI2IS',
      type: 'Inscribir/Adicionar Clase',
      catalogNumber: 'PRI2IS',
      status: 'Aprobada'
    }
  ];

  const handleMenuClick = (view) => {
    setShowMenu(false);
    setCurrentView(view);
  };

  const renderMisClases = () => (
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
            <div className="class-management-class-info-grid">
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Estado</span>
                <span className="class-management-class-info-value">{classItem.status}</span>
              </div>
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Unidades</span>
                <span className="class-management-class-info-value">{classItem.units}</span>
              </div>
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Sistema Calif</span>
                <span className="class-management-class-info-value">{classItem.gradeSystem}</span>
              </div>
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Calif</span>
                <span className="class-management-class-info-value">-</span>
              </div>
            </div>

            <div className="class-management-class-info-grid">
              <div className="class-management-class-info-item">
                <span className="class-management-class-info-label">Programa Académico</span>
                <span className="class-management-class-info-value">{classItem.program}</span>
              </div>
            </div>

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
                {classItem.schedules.map((schedule, index) => (
                  <tr key={index}>
                    <td>{index === 0 ? classItem.code : ''}</td>
                    <td>{schedule.dates}</td>
                    <td>
                      Días: {schedule.days}<br />
                      Horas: {schedule.hours}
                    </td>
                    <td>{schedule.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <a href="#" className="class-management-class-link">Límites Inscripción</a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCarritoCompras = () => (
    <div className="class-management-empty-state">
      <div className="class-management-empty-icon">
        <ShoppingCart size={32} style={{ color: '#9ca3af' }} />
      </div>
      <h3 className="class-management-empty-title">Carrito Vacío</h3>
      <p className="class-management-empty-text">
        No tiene acceso a su carrito de compras o el carrito está vacío.
      </p>
    </div>
  );

  const renderBusquedaInscripcion = () => (
    <div className="class-management-search-section">
      <h2 className="class-management-search-title">Seleccionar Valor</h2>
      
      <div className="class-management-period-selector">
        <div className="class-management-period-group">
          <div className="class-management-period-group-header">
            <span>Ciclos anteriores a 2025-Periodo Anual</span>
            <span>▼</span>
          </div>
        </div>

        <div className="class-management-period-group">
          <div className="class-management-period-group-header">
            <span>Ciclos el o después de 2025-Periodo Anual</span>
            <span>▲</span>
          </div>
          <div className="class-management-period-option">2025-Periodo Anual</div>
          <div className="class-management-period-option">2025-Segundo Periodo</div>
          <div className="class-management-period-option">2026-Primer Periodo</div>
        </div>
      </div>
    </div>
  );

  const renderSolicitudModificacion = () => (
    <div className="class-management-request-section">
      <div className="class-management-student-info">
        <div className="class-management-student-info-item">
          <span className="class-management-student-info-label">Nombre</span>
          <span className="class-management-student-info-value">
            1000099728 IGNACIO ANDRÉS CASTILLO RENDÓN
          </span>
        </div>
        <div className="class-management-student-info-item">
          <span className="class-management-student-info-label">Institución</span>
          <span className="class-management-student-info-value">
            ESC. COLOMBIANA DE INGENIERIA
          </span>
        </div>
        <div className="class-management-student-info-item">
          <span className="class-management-student-info-label">Periodo</span>
          <span className="class-management-student-info-value">2025-Segundo Periodo</span>
        </div>
        <div className="class-management-student-info-item">
          <span className="class-management-student-info-label">Programa</span>
          <span className="class-management-student-info-value">
            Pregrado ISIS-Ingeniería de Sistemas
          </span>
        </div>
      </div>

      <button className="class-management-new-request-button">
        <Plus size={20} />
        Nueva Solicitud
      </button>

      {requests.map((request) => (
        <div key={request.id} className="class-management-request-card">
          <div className="class-management-request-header">
            <span className="class-management-request-number">
              Solicitud #{request.id}
            </span>
            <span className="class-management-request-status class-management-request-status-approved">
              {request.status}
            </span>
          </div>
          <div className="class-management-request-info">
            <div>
              <strong>Tipo Solicitud:</strong> {request.type}
            </div>
            <div>
              <strong>Nº Catálogo:</strong> {request.catalogNumber}
            </div>
            <div>
              <strong>Estado Solicitud:</strong> {request.status}
            </div>
          </div>
          <button className="class-management-consult-button">
            Consultar Sol. por Ciclo
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="class-management-wrapper">
      {/* Header */}
      <header className="class-management-header">
        <div className="class-management-header-content">
          <button
            onClick={() => setCurrentView('student-dashboard')}
            className="class-management-back-button"
          >
            <ChevronLeft size={20} />
            <span className="class-management-back-text">Alumnos</span>
          </button>

          <h1 className="class-management-title">
            {activeTab === 'mis-clases' && 'Mis Clases'}
            {activeTab === 'carrito' && 'Carrito Compras'}
            {activeTab === 'busqueda' && 'Seleccionar Valor'}
            {activeTab === 'solicitud' && 'Selección Ciclo Lectivo'}
          </h1>

          <div className="class-management-nav">
            <button
              onClick={() => setCurrentView('student-dashboard')}
              className="class-management-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages')}
              className="class-management-nav-button"
            >
              <Bell size={20} />
              <span className="class-management-notification-badge"></span>
            </button>
            <div className="class-management-menu-wrapper">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="class-management-nav-button"
              >
                <MoreVertical size={20} />
              </button>
              
              {showMenu && (
                <div className="class-management-dropdown">
                  <button
                    onClick={() => handleMenuClick('academic-records')}
                    className="class-management-dropdown-item"
                  >
                    Registros Académicos
                  </button>
                  <button
                    onClick={() => handleMenuClick('class-schedule')}
                    className="class-management-dropdown-item"
                  >
                    Horario de Clase
                  </button>
                  <button
                    onClick={() => handleMenuClick('profile')}
                    className="class-management-dropdown-item"
                  >
                    Mi Perfil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="class-management-content">
        {/* Sidebar */}
        <aside className="class-management-sidebar">
          <div className="class-management-sidebar-content">
            <button
              onClick={() => setActiveTab('mis-clases')}
              className={`class-management-sidebar-button ${
                activeTab === 'mis-clases' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              📚 Mis Clases
            </button>
            <button
              onClick={() => setActiveTab('carrito')}
              className={`class-management-sidebar-button ${
                activeTab === 'carrito' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              🛒 Carrito de Compras
            </button>
            <button
              onClick={() => setActiveTab('busqueda')}
              className={`class-management-sidebar-button ${
                activeTab === 'busqueda' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              🔍 Búsqueda e Inscripción Clases
            </button>
            <button
              onClick={() => setActiveTab('baja')}
              className={`class-management-sidebar-button ${
                activeTab === 'baja' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              📋 Baja de Clases
            </button>
            <button
              onClick={() => setActiveTab('actualizacion')}
              className={`class-management-sidebar-button ${
                activeTab === 'actualizacion' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              📝 Actualización de Clases
            </button>
            <button
              onClick={() => setActiveTab('cambio')}
              className={`class-management-sidebar-button ${
                activeTab === 'cambio' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              🔄 Cambio de Clases
            </button>
            <button
              onClick={() => setActiveTab('catalogo')}
              className={`class-management-sidebar-button ${
                activeTab === 'catalogo' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              📖 Búsqueda en Catálogo de Cursos
            </button>
            <button
              onClick={() => setActiveTab('inscribir')}
              className={`class-management-sidebar-button ${
                activeTab === 'inscribir' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              ✏️ Inscribir p/Mis Cond Acad
            </button>
            <button
              onClick={() => setActiveTab('solicitud')}
              className={`class-management-sidebar-button ${
                activeTab === 'solicitud' ? 'class-management-sidebar-button-active' : ''
              }`}
            >
              📄 Sol. Modificación Inscripción
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="class-management-main">
          <div className="class-management-main-content">
            {activeTab === 'mis-clases' && renderMisClases()}
            {activeTab === 'carrito' && renderCarritoCompras()}
            {activeTab === 'busqueda' && renderBusquedaInscripcion()}
            {activeTab === 'solicitud' && renderSolicitudModificacion()}
            {(activeTab === 'baja' || activeTab === 'actualizacion' || 
              activeTab === 'cambio' || activeTab === 'catalogo' || 
              activeTab === 'inscribir') && (
              <div className="class-management-empty-state">
                <div className="class-management-empty-icon">
                  <FileText size={32} style={{ color: '#9ca3af' }} />
                </div>
                <h3 className="class-management-empty-title">Sección en Desarrollo</h3>
                <p className="class-management-empty-text">
                  Esta funcionalidad estará disponible próximamente.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClassManagement;