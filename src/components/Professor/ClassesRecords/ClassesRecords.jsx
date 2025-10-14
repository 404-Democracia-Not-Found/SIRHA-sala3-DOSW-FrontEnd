import React, { useState } from 'react';
import { Home, Bell, MoreVertical, ChevronLeft, Filter } from 'lucide-react';
import './ClassesRecords.css';

const AcademicRecords = ({ setCurrentView }) => {
  const [showMenu, setShowMenu] = useState(false);

  // Datos de ejemplo para el historial de cursos
  const courses = [
    { id: 1, code: 'CIENCBAS FUCE', description: 'Fundamentos de Ciencias del Es', cycle: '2025-Segundo Periodo', grade: '', units: '2,00', status: 'En Curso' },
    { id: 2, code: 'ECOADPR FCFI', description: 'Fundamentos contables y financ', cycle: '2025-Segundo Periodo', grade: '', units: '3,00', status: 'En Curso' },
    { id: 3, code: 'ISIS AYSR', description: 'Arquitectura y Servicios de Re', cycle: '2025-Segundo Periodo', grade: '', units: '4,00', status: 'En Curso' },
    { id: 4, code: 'ISIS DOSW', description: 'Desarrollo y Operaciones Softw', cycle: '2025-Segundo Periodo', grade: '', units: '4,00', status: 'En Curso' },
    { id: 5, code: 'ISIS PRI2IS', description: 'Proyecto Integrador 2 - Estrat', cycle: '2025-Segundo Periodo', grade: '', units: '3,00', status: 'En Curso' },
    { id: 6, code: 'MATE PRYE', description: 'Probabilidad y estadística', cycle: '2025-Segundo Periodo', grade: '', units: '3,00', status: 'En Curso' },
    { id: 7, code: 'OTRA FUPR', description: 'Fundamentos de Proyectos', cycle: '2025-Segundo Periodo', grade: '', units: '2,00', status: 'En Curso' },
    { id: 8, code: 'ECOADPR FUEC', description: 'Fundamentos Económicos', cycle: '2025-Primer Periodo', grade: '3,6', units: '2,00', status: 'Transferido' },
    { id: 9, code: 'ECOADPR FUEC10', description: 'Fundamentos Económicos_10', cycle: '2025-Primer Periodo', grade: '3,6', units: '3,00', status: 'Realizado' },
    { id: 10, code: 'FISI FIS1', description: 'Física General 1', cycle: '2025-Primer Periodo', grade: '3,8', units: '3,00', status: 'Transferido' },
    { id: 11, code: 'FISI FIS2', description: 'Física General 2', cycle: '2025-Primer Periodo', grade: '3,5', units: '3,00', status: 'Transferido' },
    { id: 12, code: 'ISIS ACSO', description: 'Arquitectura Computacional y S', cycle: '2025-Primer Periodo', grade: '4,0', units: '4,00', status: 'Realizado' },
    { id: 13, code: 'ISIS CL01IS', description: 'Cursos de Libre Elección 1', cycle: '2025-Primer Periodo', grade: '3,2', units: '4,00', status: 'Transferido' }
  ];

  const handleMenuClick = (view) => {
    setShowMenu(false);
    setCurrentView(view);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'En Curso':
        return 'academic-records-status-in-progress';
      case 'Realizado':
        return 'academic-records-status-completed';
      case 'Transferido':
        return 'academic-records-status-transferred';
      default:
        return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'En Curso':
        return '🔶';
      case 'Realizado':
        return '✓';
      case 'Transferido':
        return '⬅';
      default:
        return '';
    }
  };

  return (
    <div className="academic-records-wrapper">
      {/* Header */}
      <header className="academic-records-header">
        <div className="academic-records-header-content">
          {/* Botón Alumnos */}
          <button
            onClick={() => setCurrentView('professor-dashboard')}
            className="academic-records-back-button"
          >
            <ChevronLeft size={20} />
            <span className="academic-records-back-text">Profesor</span>
          </button>

          {/* Título central */}
          <h1 className="academic-records-title">Historial de Cursos</h1>

          {/* Iconos de navegación */}
          <div className="academic-records-nav">
            <button
              onClick={() => setCurrentView('professor-dashboard')}
              className="academic-records-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages')}
              className="academic-records-nav-button"
            >
              <Bell size={20} />
              <span className="academic-records-notification-badge"></span>
            </button>
            <div className="academic-records-menu-wrapper">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="academic-records-nav-button"
              >
                <MoreVertical size={20} />
              </button>
              
              {/* Menú desplegable */}
              {showMenu && (
                <div className="academic-records-dropdown">
                  <button
                    onClick={() => handleMenuClick('class-management')}
                    className="academic-records-dropdown-item"
                  >
                    Gestión de Clases
                  </button>
                  <button
                    onClick={() => handleMenuClick('class-schedule')}
                    className="academic-records-dropdown-item"
                  >
                    Horario de Clase
                  </button>
                  <button
                    onClick={() => handleMenuClick('profile')}
                    className="academic-records-dropdown-item"
                  >
                    Mi Perfil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="academic-records-content">
        {/* Sidebar izquierda */}
        <aside className="academic-records-sidebar">
          <div className="academic-records-sidebar-content">
            <button
              className={`academic-records-sidebar-button academic-records-sidebar-button-active`}
            >
              📚 Historial de Cursos
            </button>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="academic-records-main">
          <div className="academic-records-main-content">
            <div className="academic-records-card">
              <div className="academic-records-card-header">
                <h2 className="academic-records-card-title">Historial Cursos</h2>
                <div className="academic-records-card-controls">
                  <span className="academic-records-row-count">60 filas</span>
                  <button className="academic-records-filter-button">
                    <Filter size={20} />
                  </button>
                </div>
              </div>

              {/* Tabla */}
              <div className="academic-records-table-wrapper">
                <table className="academic-records-table">
                  <thead className="academic-records-table-head">
                    <tr>
                      <th>Clase</th>
                      <th>Descripción</th>
                      <th>Ciclo</th>
                      <th>Calif</th>
                      <th>Unidades</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody className="academic-records-table-body">
                    {courses.map((course) => (
                      <tr key={course.id}>
                        <td className="academic-records-course-code">
                          {course.code}
                        </td>
                        <td className="academic-records-course-text">
                          {course.description}
                        </td>
                        <td className="academic-records-course-text">
                          {course.cycle}
                        </td>
                        <td className="academic-records-course-text">
                          {course.grade}
                        </td>
                        <td className="academic-records-course-text">
                          {course.units}
                        </td>
                        <td className={`academic-records-status ${getStatusClass(course.status)}`}> 
                          <span>{getStatusIcon(course.status)}</span>
                          <span>{course.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AcademicRecords;