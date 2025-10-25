import React, { useState } from 'react';
import { Home, Bell, ChevronLeft, Search, Plus, Users, UserCheck, UserX, Eye, Edit, Trash2, X } from 'lucide-react';
import UserRegistrationForm from '../../common/UserRegistrationForm/UserRegistrationForm';
import './Registration.css';

const Registration = ({ setCurrentView }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProgram, setFilterProgram] = useState('todos');
  const [filterStatus, setFilterStatus] = useState('todos');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Datos de ejemplo de estudiantes
  const [students] = useState([
    {
      id: '1000099728',
      nombre: 'Ignacio Andrés',
      apellido: 'Castillo Rendón',
      programa: 'Ingeniería de Sistemas',
      fechaRegistro: '15/08/2024',
      periodo: '2024-2',
      estado: 'active',
      email: 'ignacio.castillo-r@mail.escuelaing.edu.co',
      telefono: '319/618-7280'
    },
    {
      id: '1000099729',
      nombre: 'María José',
      apellido: 'González Pérez',
      programa: 'Ingeniería Civil',
      fechaRegistro: '10/08/2024',
      periodo: '2024-2',
      estado: 'active',
      email: 'maria.gonzalez@mail.escuelaing.edu.co',
      telefono: '310/555-1234'
    },
    {
      id: '1000099730',
      nombre: 'Carlos Alberto',
      apellido: 'Ramírez Torres',
      programa: 'Ingeniería Industrial',
      fechaRegistro: '20/07/2024',
      periodo: '2024-2',
      estado: 'inactive',
      email: 'carlos.ramirez@mail.escuelaing.edu.co',
      telefono: '315/555-5678'
    },
    {
      id: '1000099731',
      nombre: 'Ana María',
      apellido: 'Martínez López',
      programa: 'Ingeniería de Sistemas',
      fechaRegistro: '05/08/2024',
      periodo: '2024-2',
      estado: 'active',
      email: 'ana.martinez@mail.escuelaing.edu.co',
      telefono: '320/555-9012'
    }
  ]);

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.includes(searchTerm);
    const matchesProgram = filterProgram === 'todos' || student.programa === filterProgram;
    const matchesStatus = filterStatus === 'todos' || student.estado === filterStatus;
    
    return matchesSearch && matchesProgram && matchesStatus;
  });

  const stats = {
    total: students.length,
    thisMonth: 2,
    active: students.filter(s => s.estado === 'active').length,
    inactive: students.filter(s => s.estado === 'inactive').length
  };

  const handleSubmit = async (userData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simular llamada a API (reemplazar con llamada real cuando esté disponible)
      console.log('Registrando usuario:', userData);

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Aquí iría la llamada real al backend
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });

      alert('Usuario registrado exitosamente');
      setShowModal(false);

    } catch (err) {
      setError('Error al registrar usuario. Intente nuevamente.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (studentId) => {
    console.log('Ver estudiante:', studentId);
    alert(`Ver detalles del estudiante ${studentId}`);
  };

  const handleEdit = (studentId) => {
    console.log('Editar estudiante:', studentId);
    alert(`Editar estudiante ${studentId}`);
  };

  const handleDelete = (studentId) => {
    if (window.confirm('¿Está seguro de eliminar este estudiante?')) {
      console.log('Eliminar estudiante:', studentId);
      alert(`Estudiante ${studentId} eliminado`);
    }
  };

  return (
    <div className="registration-wrapper">
      {/* Header */}
      <header className="registration-header">
        <div className="registration-header-content">
          <button
            onClick={() => setCurrentView('administrative-dashboard')}
            className="registration-back-button"
          >
            <ChevronLeft size={20} />
            <span className="registration-back-text">Administrativo</span>
          </button>

          <h1 className="registration-title">Gestión de Usuarios</h1>

          <div className="registration-nav">
            <button
              onClick={() => setShowModal(true)}
              className="registration-add-button"
            >
              <Plus size={20} />
              Agregar Usuario
            </button>
            <button
              onClick={() => setCurrentView('administrative-dashboard')}
              className="registration-nav-button"
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('messages-administrative')}
              className="registration-nav-button"
            >
              <Bell size={20} />
              <span className="registration-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="registration-content">
        <div className="registration-main">
          
          {/* Statistics */}
          <div className="registration-stats">
            <div className="registration-stat-card">
              <div className="registration-stat-header">
                <span className="registration-stat-label">Total Estudiantes</span>
                <Users className="registration-stat-icon" size={24} />
              </div>
              <div className="registration-stat-value">{stats.total}</div>
            </div>
            <div className="registration-stat-card">
              <div className="registration-stat-header">
                <span className="registration-stat-label">Registros del Mes</span>
                <Plus className="registration-stat-icon" size={24} />
              </div>
              <div className="registration-stat-value">{stats.thisMonth}</div>
            </div>
            <div className="registration-stat-card">
              <div className="registration-stat-header">
                <span className="registration-stat-label">Activos</span>
                <UserCheck className="registration-stat-icon" size={24} />
              </div>
              <div className="registration-stat-value">{stats.active}</div>
            </div>
            <div className="registration-stat-card">
              <div className="registration-stat-header">
                <span className="registration-stat-label">Inactivos</span>
                <UserX className="registration-stat-icon" size={24} />
              </div>
              <div className="registration-stat-value">{stats.inactive}</div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="registration-action-bar">
            <div className="registration-search-wrapper">
              <Search className="registration-search-icon" size={20} />
              <input
                type="text"
                placeholder="Buscar por nombre o ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="registration-search-input"
              />
            </div>
            <div className="registration-filters">
              <select
                className="registration-filter-select"
                value={filterProgram}
                onChange={(e) => setFilterProgram(e.target.value)}
              >
                <option value="todos">Todos los programas</option>
                <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ingeniería Civil">Ingeniería Civil</option>
                <option value="Ingeniería Industrial">Ingeniería Industrial</option>
              </select>
              <select
                className="registration-filter-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="todos">Todos los estados</option>
                <option value="active">Activos</option>
                <option value="inactive">Inactivos</option>
              </select>
              <button
                className="registration-new-button"
                onClick={() => setShowModal(true)}
              >
                <Plus size={20} />
                Nuevo Estudiante
              </button>
            </div>
          </div>

          {/* Students Table */}
          <div className="registration-table-card">
            {filteredStudents.length === 0 ? (
              <div className="registration-empty">
                <Users className="registration-empty-icon" size={64} />
                <h3 className="registration-empty-title">No hay estudiantes</h3>
                <p className="registration-empty-text">
                  No se encontraron estudiantes con los filtros seleccionados.
                </p>
                <button
                  className="registration-new-button"
                  onClick={() => setShowModal(true)}
                >
                  <Plus size={20} />
                  Registrar Primer Estudiante
                </button>
              </div>
            ) : (
              <div className="registration-table-wrapper">
                <table className="registration-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Estudiante</th>
                      <th>Programa</th>
                      <th>Periodo</th>
                      <th>Fecha Registro</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td>
                          <span className="registration-student-id">{student.id}</span>
                        </td>
                        <td>
                          <div>
                            <div className="registration-student-name">
                              {student.nombre} {student.apellido}
                            </div>
                            <div className="registration-student-id">{student.email}</div>
                          </div>
                        </td>
                        <td>{student.programa}</td>
                        <td>{student.periodo}</td>
                        <td>{student.fechaRegistro}</td>
                        <td>
                          <span className={`registration-status-badge ${
                            student.estado === 'active' 
                              ? 'registration-status-active' 
                              : 'registration-status-inactive'
                          }`}>
                            {student.estado === 'active' ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td>
                          <div className="registration-actions">
                            <button
                              className="registration-action-btn registration-btn-view"
                              onClick={() => handleView(student.id)}
                              title="Ver detalles"
                            >
                              <Eye size={18} />
                            </button>
                            <button
                              className="registration-action-btn registration-btn-edit"
                              onClick={() => handleEdit(student.id)}
                              title="Editar"
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              className="registration-action-btn registration-btn-delete"
                              onClick={() => handleDelete(student.id)}
                              title="Eliminar"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Modal for New User */}
      {showModal && (
        <div className="registration-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="registration-modal" onClick={(e) => e.stopPropagation()}>
            <div className="registration-modal-header">
              <h2 className="registration-modal-title">Nuevo Usuario</h2>
              <button
                className="registration-modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="registration-modal-body">
              <UserRegistrationForm
                onSubmit={handleSubmit}
                onCancel={() => setShowModal(false)}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;