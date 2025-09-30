import React, { useState } from 'react';
import { Home, Bell, MoreVertical, ChevronLeft, Filter } from 'lucide-react';
import './AcademicRecords.css';

const AcademicRecords = ({ setCurrentView }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('historial');

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
            onClick={() => setCurrentView('student-dashboard')}
            className="academic-records-back-button"
          >
            <ChevronLeft size={20} />
            <span className="academic-records-back-text">Alumnos</span>
          </button>

          {/* Título central */}
          <h1 className="academic-records-title">Historial de Cursos</h1>

          {/* Iconos de navegación */}
          <div className="academic-records-nav">
            <button
              onClick={() => setCurrentView('student-dashboard')}
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
              onClick={() => setActiveTab('historial')}
              className={`academic-records-sidebar-button ${
                activeTab === 'historial' ? 'academic-records-sidebar-button-active' : ''
              }`}
            >
              📚 Historial de Cursos
            </button>
            <button
              onClick={() => setActiveTab('semaforo')}
              className={`academic-records-sidebar-button ${
                activeTab === 'semaforo' ? 'academic-records-sidebar-button-active' : ''
              }`}
            >
              🚦 Semáforo Académico
            </button>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="academic-records-main">
          <div className="academic-records-main-content">
            {activeTab === 'historial' ? (
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
            ) : (
              <div className="academic-records-semaforo-card">
                {/* Información del estudiante */}
                <div className="semaforo-student-info">
                  <div className="semaforo-info-grid">
                    <div>
                      <p className="semaforo-info-row">ID Estudiante: <span className="semaforo-info-value">1000099728</span></p>
                      <p className="semaforo-info-row">Nombre: <span className="semaforo-info-value">IGNACIO ANDRÉS CASTILLO RENDÓN</span></p>
                      <p className="semaforo-info-row">Programa: <span className="semaforo-info-value">ISIS - Ingeniería de Sistemas</span></p>
                    </div>
                    <div>
                      <p className="semaforo-info-row">Créditos Plan: <span className="semaforo-info-value">139.00</span></p>
                      <p className="semaforo-info-row">Promedio Acumulado: <span className="semaforo-info-value">3.925</span></p>
                      <p className="semaforo-info-row">Promedio de Grado: <span className="semaforo-info-value">3.90897</span></p>
                    </div>
                  </div>
                </div>

                <h2 className="semaforo-title">Plan de Estudios - ISIS-Plan 015</h2>

                {/* Leyenda de colores */}
                <div className="semaforo-legend">
                  <div className="semaforo-legend-item">
                    <div className="semaforo-legend-box semaforo-legend-box-approved"></div>
                    <span className="semaforo-legend-text">Aprobadas</span>
                  </div>
                  <div className="semaforo-legend-item">
                    <div className="semaforo-legend-box semaforo-legend-box-current"></div>
                    <span className="semaforo-legend-text">En Curso</span>
                  </div>
                  <div className="semaforo-legend-item">
                    <div className="semaforo-legend-box semaforo-legend-box-failed"></div>
                    <span className="semaforo-legend-text">Perdidas/No Aprobadas</span>
                  </div>
                  <div className="semaforo-legend-item">
                    <div className="semaforo-legend-box semaforo-legend-box-pending"></div>
                    <span className="semaforo-legend-text">Por Cursar</span>
                  </div>
                </div>

                {/* Malla curricular por niveles */}
                <div className="semaforo-curriculum">
                  {/* Nivel 1 */}
                  <div className="semaforo-level">
                    <h3 className="semaforo-level-title">ISIS-Plan015-CURSOS BASICOS</h3>
                    <div className="semaforo-courses-grid">
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Matemáticas Básicas</p>
                        <p className="semaforo-course-mnemonic">MABA</p>
                        <p className="semaforo-course-credits">Créditos: 0</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Física Básica</p>
                        <p className="semaforo-course-mnemonic">FIBA</p>
                        <p className="semaforo-course-credits">Créditos: 0</p>
                      </div>
                    </div>
                  </div>

                  {/* Nivel 2 */}
                  <div className="semaforo-level">
                    <h3 className="semaforo-level-title">ISIS-Plan015-Niv1</h3>
                    <div className="semaforo-courses-grid">
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Cálculo Diferencial</p>
                        <p className="semaforo-course-mnemonic">CALD</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Álgebra lineal</p>
                        <p className="semaforo-course-mnemonic">ALLI</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Proyecto Integrador 1 (Introducción a la Ingeniería de Sistemas)</p>
                        <p className="semaforo-course-mnemonic">PRI1IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Introducción a la programación</p>
                        <p className="semaforo-course-mnemonic">IPRO</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Fundamentos de la comunicación 1</p>
                        <p className="semaforo-course-mnemonic">FCO1</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Cálculo Integral</p>
                        <p className="semaforo-course-mnemonic">CALI</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Física General 1</p>
                        <p className="semaforo-course-mnemonic">FIS1</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Matemáticas para Informática</p>
                        <p className="semaforo-course-mnemonic">MPIN</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">MHistoria y Geografía de Colombia</p>
                        <p className="semaforo-course-mnemonic">HGCL</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Cálculo Vectorial</p>
                        <p className="semaforo-course-mnemonic">CALV</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Física General 2</p>
                        <p className="semaforo-course-mnemonic">FIS2</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Fundamentos Económicos</p>
                        <p className="semaforo-course-mnemonic">FUEC</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Fundamentos de Proyectos</p>
                        <p className="semaforo-course-mnemonic">FUPR</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                    </div>
                  </div>

                  {/* Nivel 3 */}
                  <div className="semaforo-level">
                    <h3 className="semaforo-level-title">ISIS-Plan015-Niv2</h3>
                    <div className="semaforo-courses-grid">
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Diseño de Datos y Algoritmos</p>
                        <p className="semaforo-course-mnemonic">DDYA</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Probabilidad y Estadística</p>
                        <p className="semaforo-course-mnemonic">PRYE</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Modelos y Servicios de Datos</p>
                        <p className="semaforo-course-mnemonic">MYSD</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Lógica y matemáticas discretas</p>
                        <p className="semaforo-course-mnemonic">LYMD</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Organización de los Sistemas de Cómputo</p>
                        <p className="semaforo-course-mnemonic">ODSC</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Desarrollo Orientado por Objetos</p>
                        <p className="semaforo-course-mnemonic">DOPO</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Teoría de la Programación y la Computación</p>
                        <p className="semaforo-course-mnemonic">TPYC</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-approved">
                        <p className="semaforo-course-name">Ecuaciones Diferenciales</p>
                        <p className="semaforo-course-mnemonic">ECDI</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Arquitectura y Servicios de Red</p>
                        <p className="semaforo-course-mnemonic">AYSR</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Proyecto Integrador 2: Estrategia de Organizaciones y Procesos</p>
                        <p className="semaforo-course-mnemonic">PRI2IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Desarrollo y Operaciones Software</p>
                        <p className="semaforo-course-mnemonic">DOSW</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Principios y Tecnologías IA</p>
                        <p className="semaforo-course-mnemonic">PTIA</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                    </div>
                  </div>

                  <div className="semaforo-level">
                    <h3 className="semaforo-level-title">ISIS-Plan015-Niv3</h3>
                    <div className="semaforo-courses-grid">
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Fundamentos de la Seguridad de la Información</p>
                        <p className="semaforo-course-mnemonic">FDSI</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Arquitecturas de Software</p>
                        <p className="semaforo-course-mnemonic">ARSW</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Colombia: Realidad, instituciones políticas y paz</p>
                        <p className="semaforo-course-mnemonic">CIPP</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Seminario de Opción de Grado</p>
                        <p className="semaforo-course-mnemonic">SOGR</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Transformación Digital y Soluciones Empresariales</p>
                        <p className="semaforo-course-mnemonic">TDSE</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Innovación Software apoyada en Nuevas Tecnologías</p>
                        <p className="semaforo-course-mnemonic">swnt</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Electiva Técnica 1 IS</p>
                        <p className="semaforo-course-mnemonic">ETO1IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Electiva Técnica 2 IS</p>
                        <p className="semaforo-course-mnemonic">ETO2IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Electiva Técnica 3 IS</p>
                        <p className="semaforo-course-mnemonic">ETO3IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                    </div>
                  </div>

                  {/* Nivel 5 - Cursos futuros */}
                  <div className="semaforo-level">
                    <h3 className="semaforo-level-title">ISIS-Plan015-CLE</h3>
                    <div className="semaforo-courses-grid">
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Nuestra Vida en la U</p>
                        <p className="semaforo-course-mnemonic">NUVU</p>
                        <p className="semaforo-course-credits">Créditos: 1</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Electiva Humanística 1</p>
                        <p className="semaforo-course-mnemonic">ELH1</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Electiva Humanística 2</p>
                        <p className="semaforo-course-mnemonic">ELH2</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Fundamentos Contables y Financieros</p>
                        <p className="semaforo-course-mnemonic">FCFI</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Curso de Libre Elección 1</p>
                        <p className="semaforo-course-mnemonic">CLE1</p>
                        <p className="semaforo-course-credits">Créditos: 4</p>
                      </div>
                      <div className="semaforo-course semaforo-course-current">
                        <p className="semaforo-course-name">Fundamentos de Ciencias del Espacio</p>
                        <p className="semaforo-course-mnemonic">FUCE</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Inglés 1</p>
                        <p className="semaforo-course-mnemonic">EGI1</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Inglés 2</p>
                        <p className="semaforo-course-mnemonic">EGI2</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Inglés 3</p>
                        <p className="semaforo-course-mnemonic">EGI3</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                      <div className="semaforo-course semaforo-course-completed">
                        <p className="semaforo-course-name">Inglés 4</p>
                        <p className="semaforo-course-mnemonic">EGI4</p>
                        <p className="semaforo-course-credits">Créditos: 2</p>
                      </div>
                    </div>
                  </div>

                  {/* Nivel 6 */}
                  <div className="semaforo-level">
                    <h3 className="semaforo-level-title">ISIS-Plan015-PRI3</h3>
                    <div className="semaforo-courses-grid">
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Proyecto Integrador 3 - Opción 1</p>
                        <p className="semaforo-course-mnemonic">OGR1IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Proyecto Integrador 3 - Opción 2</p>
                        <p className="semaforo-course-mnemonic">OGR2IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Proyecto Integrador 3 - Opción 3</p>
                        <p className="semaforo-course-mnemonic">OGR3IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                      <div className="semaforo-course semaforo-course-pending">
                        <p className="semaforo-course-name">Proyecto Integrador 3 - Opción 4</p>
                        <p className="semaforo-course-mnemonic">OGR4IS</p>
                        <p className="semaforo-course-credits">Créditos: 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AcademicRecords;