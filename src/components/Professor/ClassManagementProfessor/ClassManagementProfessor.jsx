import React, { useState } from 'react';
import { Home, Bell, MoreVertical, ChevronLeft, ChevronDown, ChevronRight, Search } from 'lucide-react';
import './ClassManagementProfessor.css';

const ClassManagementProfessor = ({ setCurrentView }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('mis-clases');
  const [expandedClass, setExpandedClass] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  // Datos de ejemplo de las clases
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
          startDate: '11/08/2025',
          endDate: '17/12/2025',
          days: 'Martes',
          hours: '11:30AM A 1:00PM',
          room: 'H-303'
        },
        {
          startDate: '11/08/2025',
          endDate: '17/12/2025',
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
          startDate: '11/08/2025',
          endDate: '17/12/2025',
          days: 'Lunes',
          hours: '8:30AM A 10:00AM',
          room: 'G-205'
        },
        {
          startDate: '11/08/2025',
          endDate: '17/12/2025',
          days: 'Miércoles',
          hours: '8:30AM A 10:00AM',
          room: 'C4-101'
        }
      ]
    }
  ];

  const handleMenuClick = (view) => {
    setShowMenu(false);
    setCurrentView(view);
  };

  const toggleClass = (classId) => {
    setExpandedClass(expandedClass === classId ? null : classId);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="class-management-professor-wrapper">
      {/* Header */}
      <header className="class-management-professor-header">
        <div className="class-management-professor-header-content">
          <button
            onClick={() => setCurrentView('professor-dashboard')}
            className="class-management-professor-back-button"
          >
            <ChevronLeft size={20} />
            <span className="class-management-professor-back-text">Profesor</span>
          </button>

          <h1 className="class-management-professor-title">Gestión de Clases</h1>

          <div className="class-management-professor-nav">
            <button
              onClick={() => setCurrentView('professor-dashboard')}
              className="class-management-professor-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages-professor')}
              className="class-management-professor-nav-button"
            >
              <Bell size={20} />
              <span className="class-management-professor-notification-badge"></span>
            </button>
            <div className="class-management-professor-menu-wrapper">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="class-management-professor-nav-button"
              >
                <MoreVertical size={20} />
              </button>
              
              {showMenu && (
                <div className="class-management-professor-dropdown">
                  <button
                    onClick={() => handleMenuClick('classes-records')}
                    className="class-management-professor-dropdown-item"
                  >
                    Registros de Clases
                  </button>
                  <button
                    onClick={() => handleMenuClick('schedule')}
                    className="class-management-professor-dropdown-item"
                  >
                    Horario de Clase
                  </button>
                  <button
                    onClick={() => handleMenuClick('professor-user')}
                    className="class-management-professor-dropdown-item"
                  >
                    Mi Perfil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="class-management-professor-content">
        {/* Sidebar */}
        <aside className="class-management-professor-sidebar">
          <div className="class-management-professor-sidebar-content">
            <button
              onClick={() => setActiveTab('mis-clases')}
              className={`class-management-professor-sidebar-button ${
                activeTab === 'mis-clases' ? 'class-management-professor-sidebar-button-active' : ''
              }`}
            >
              📚 Mis Clases
            </button>
            <button
              onClick={() => setActiveTab('busqueda-inscripcion')}
              className={`class-management-professor-sidebar-button ${
                activeTab === 'busqueda-inscripcion' ? 'class-management-professor-sidebar-button-active' : ''
              }`}
            >
              🔍 Búsqueda e Inscripción Clases
            </button>
            <button
              onClick={() => setActiveTab('catalogo-cursos')}
              className={`class-management-professor-sidebar-button ${
                activeTab === 'catalogo-cursos' ? 'class-management-professor-sidebar-button-active' : ''
              }`}
            >
              📖 Búsqueda en Catálogo de Cursos
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="class-management-professor-main">
          <div className="class-management-professor-main-content">
            
            {/* Mis Clases */}
            {activeTab === 'mis-clases' && (
              <>
                <div className="class-management-professor-period-header">
                  <h2 className="class-management-professor-period-title">2025-Segundo Periodo</h2>
                  <p className="class-management-professor-period-status">Pregrado</p>
                </div>

                <div className="class-management-professor-tabs">
                  <button className="class-management-professor-tab-button">
                    Por Clase
                  </button>
                  <button className="class-management-professor-tab-button">
                    Por Fecha
                  </button>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input type="checkbox" />
                    Mostrar Clases Inscritas
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input type="checkbox" />
                    Mostrar Bajas Clases
                  </label>
                </div>

                {myClasses.map((clase) => (
                  <div key={clase.id} className="class-management-professor-class-card">
                    <div 
                      className="class-management-professor-class-header"
                      onClick={() => toggleClass(clase.id)}
                    >
                      {expandedClass === clase.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span className="class-management-professor-class-title">
                        {clase.code} {clase.name}
                      </span>
                    </div>

                    {expandedClass === clase.id && (
                      <div className="class-management-professor-class-body">
                        <div className="class-management-professor-info-grid">
                          <div className="class-management-professor-info-item">
                            <span className="class-management-professor-info-label">Estado</span>
                            <span className="class-management-professor-info-value">{clase.status}</span>
                          </div>
                          <div className="class-management-professor-info-item">
                            <span className="class-management-professor-info-label">Unidades</span>
                            <span className="class-management-professor-info-value">{clase.units}</span>
                          </div>
                          <div className="class-management-professor-info-item">
                            <span className="class-management-professor-info-label">Sistema Calif</span>
                            <span className="class-management-professor-info-value">{clase.gradeSystem}</span>
                          </div>
                          <div className="class-management-professor-info-item">
                            <span className="class-management-professor-info-label">Calif</span>
                            <span className="class-management-professor-info-value">-</span>
                          </div>
                          <div className="class-management-professor-info-item">
                            <span className="class-management-professor-info-label">Programa Académico</span>
                            <span className="class-management-professor-info-value">{clase.program}</span>
                          </div>
                          <div className="class-management-professor-info-item">
                            <span className="class-management-professor-info-label">Condición Académica Especial</span>
                            <span className="class-management-professor-info-value">-</span>
                          </div>
                        </div>

                        <div className="class-management-professor-schedule-section">
                          <h4 className="class-management-professor-schedule-title">Clase - Fechas Inicio/Fin - Días y Horas - Aula</h4>
                          <table className="class-management-professor-schedule-table">
                            <thead>
                              <tr>
                                <th>Clase</th>
                                <th>Fechas Inicio/Fin</th>
                                <th>Días y Horas</th>
                                <th>Aula</th>
                              </tr>
                            </thead>
                            <tbody>
                              {clase.schedules.map((schedule, idx) => (
                                <tr key={idx}>
                                  <td>{idx === 0 ? clase.code : ''}</td>
                                  <td>{schedule.startDate} - {schedule.endDate}</td>
                                  <td>
                                    Días: {schedule.days}<br />
                                    Horas: {schedule.hours}
                                  </td>
                                  <td>{schedule.room}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <a className="class-management-professor-limits-link">Límites Inscripción</a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

            {/* Búsqueda e Inscripción */}
            {activeTab === 'busqueda-inscripcion' && (
              <div className="class-management-professor-search-card">
                <h2 className="class-management-professor-search-title">Seleccionar Valor</h2>
                
                <div className="class-management-professor-accordion-section">
                  <div 
                    className="class-management-professor-accordion-header"
                    onClick={() => toggleAccordion('anteriores')}
                  >
                    {expandedAccordion === 'anteriores' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <span className="class-management-professor-accordion-title">
                      Ciclos anteriores a 2025-Periodo Anual
                    </span>
                  </div>
                  {expandedAccordion === 'anteriores' && (
                    <div className="class-management-professor-accordion-content">
                      <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        Ciclos académicos anteriores aparecerán aquí
                      </p>
                    </div>
                  )}
                </div>

                <div className="class-management-professor-accordion-section">
                  <div 
                    className="class-management-professor-accordion-header"
                    onClick={() => toggleAccordion('posteriores')}
                  >
                    {expandedAccordion === 'posteriores' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <span className="class-management-professor-accordion-title">
                      Ciclos el o después de 2025-Periodo Anual
                    </span>
                  </div>
                  {expandedAccordion === 'posteriores' && (
                    <div className="class-management-professor-accordion-content">
                      <div className="class-management-professor-period-option">2025-Periodo Anual</div>
                      <div className="class-management-professor-period-option">2025-Segundo Periodo</div>
                      <div className="class-management-professor-period-option">2026-Primer Periodo</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Búsqueda en Catálogo de Cursos */}
            {activeTab === 'catalogo-cursos' && (
              <div className="class-management-professor-search-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Escuela Colombiana de Ingeniería Julio Garavito
                </h3>
                
                <h2 className="class-management-professor-search-title">Búsqueda de Cursos</h2>
                <p className="class-management-professor-search-subtitle">
                  Introduzca una palabra clave, por ejemplo: curso, materia o tema.
                </p>
                
                <input 
                  type="text" 
                  placeholder="Buscar curso..."
                  className="class-management-professor-search-input"
                />
                
                <button className="class-management-professor-search-button">
                  <Search size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                  Buscar
                </button>

                <div className="class-management-professor-recent-section">
                  <div 
                    className="class-management-professor-recent-title"
                    onClick={() => toggleAccordion('vistas-recientes')}
                  >
                    {expandedAccordion === 'vistas-recientes' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    Vistas Recientes
                  </div>
                  {expandedAccordion === 'vistas-recientes' && (
                    <div style={{ padding: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
                      No hay vistas recientes
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default ClassManagementProfessor;