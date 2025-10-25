import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Notification from '../Notification/Notification';
import './UserRegistrationForm.css';

/**
 * Componente reutilizable para registro de usuarios
 * Campos dinámicos según el rol seleccionado
 * Validaciones en tiempo real y responsive
 */
const UserRegistrationForm = ({
  onSubmit,
  onCancel,
  initialData = {},
  isLoading = false,
  error = null
}) => {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre || '',
    email: initialData.email || '',
    password: initialData.password || '',
    confirmPassword: initialData.confirmPassword || '',
    rol: initialData.rol || 'ESTUDIANTE',
    genero: initialData.genero || '',
    semaforo: {
      materiasAprobadas: initialData.semaforo?.materiasAprobadas || 0,
      materiasEnProgreso: initialData.semaforo?.materiasEnProgreso || 0,
      materiasPerdidas: initialData.semaforo?.materiasPerdidas || 0
    }
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notification, setNotification] = useState(null);

  // Validaciones en tiempo real
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    // Validación de nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    } else if (/\d/.test(formData.nombre)) {
      newErrors.nombre = 'El nombre no debe contener números';
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    } else {
      // Validación de dominio según rol
      const domain = formData.email.split('@')[1];
      if (formData.rol === 'ESTUDIANTE' && domain !== 'mail.escuelaing.edu.co') {
        newErrors.email = 'Los estudiantes deben usar @mail.escuelaing.edu.co';
      } else if ((formData.rol === 'DOCENTE' || formData.rol === 'COORDINADOR') && domain !== 'escuelaing.edu.co') {
        newErrors.email = 'Profesores y administrativos deben usar @escuelaing.edu.co';
      }
    }

    // Validación de contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula y 1 número';
    }

    // Validación de confirmación de contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Validaciones específicas por rol
    if (formData.rol === 'ESTUDIANTE') {
      if (!formData.genero) {
        newErrors.genero = 'Selecciona tu género';
      }
      if (formData.semaforo.materiasAprobadas < 0) {
        newErrors.materiasAprobadas = 'No puede ser negativo';
      }
      if (formData.semaforo.materiasEnProgreso < 0) {
        newErrors.materiasEnProgreso = 'No puede ser negativo';
      }
      if (formData.semaforo.materiasPerdidas < 0) {
        newErrors.materiasPerdidas = 'No puede ser negativo';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const processedValue = type === 'number' ? parseInt(value) || 0 : value;

    if (name.startsWith('semaforo.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        semaforo: {
          ...prev.semaforo,
          [field]: processedValue
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: processedValue
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({
        type: 'error',
        message: 'Corrige los errores antes de continuar'
      });
      return;
    }

    try {
      // Preparar datos para envío (excluir confirmPassword)
      const submitData = {
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password,
        rol: formData.rol,
        ...(formData.rol === 'ESTUDIANTE' && {
          genero: formData.genero,
          semaforo: formData.semaforo
        })
      };

      await onSubmit(submitData);

      setNotification({
        type: 'success',
        message: 'Usuario registrado exitosamente'
      });

      // Resetear formulario después de éxito
      setFormData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
        rol: 'ESTUDIANTE',
        genero: '',
        semaforo: { materiasAprobadas: 0, materiasEnProgreso: 0, materiasPerdidas: 0 }
      });

    } catch (err) {
      setNotification({
        type: 'error',
        message: err.message || 'Error al registrar usuario'
      });
    }
  };

  const renderStudentFields = () => (
    <>
      <div className="form-group">
        <label htmlFor="genero" className="form-label">
          Género *
        </label>
        <select
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleInputChange}
          className={`form-select ${errors.genero ? 'error' : ''}`}
        >
          <option value="">Selecciona tu género</option>
          <option value="MASCULINO">Masculino</option>
          <option value="FEMENINO">Femenino</option>
          <option value="OTRO">Otro</option>
        </select>
        {errors.genero && <span className="error-message">{errors.genero}</span>}
      </div>

      <div className="form-section">
        <h4 className="section-title">Información Académica</h4>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="materiasAprobadas" className="form-label">
              Materias Aprobadas
            </label>
            <input
              type="number"
              id="materiasAprobadas"
              name="semaforo.materiasAprobadas"
              value={formData.semaforo.materiasAprobadas}
              onChange={handleInputChange}
              min="0"
              className={`form-input ${errors.materiasAprobadas ? 'error' : ''}`}
            />
            {errors.materiasAprobadas && <span className="error-message">{errors.materiasAprobadas}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="materiasEnProgreso" className="form-label">
              Materias en Progreso
            </label>
            <input
              type="number"
              id="materiasEnProgreso"
              name="semaforo.materiasEnProgreso"
              value={formData.semaforo.materiasEnProgreso}
              onChange={handleInputChange}
              min="0"
              className={`form-input ${errors.materiasEnProgreso ? 'error' : ''}`}
            />
            {errors.materiasEnProgreso && <span className="error-message">{errors.materiasEnProgreso}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="materiasPerdidas" className="form-label">
              Materias Perdidas
            </label>
            <input
              type="number"
              id="materiasPerdidas"
              name="semaforo.materiasPerdidas"
              value={formData.semaforo.materiasPerdidas}
              onChange={handleInputChange}
              min="0"
              className={`form-input ${errors.materiasPerdidas ? 'error' : ''}`}
            />
            {errors.materiasPerdidas && <span className="error-message">{errors.materiasPerdidas}</span>}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="user-registration-form">
      <div className="form-header">
        <h2 className="form-title">Registro de Usuario</h2>
        <p className="form-description">
          Crea una cuenta para el sistema SIRHA
        </p>
      </div>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {error && (
        <ErrorMessage
          type="general"
          message={error}
        />
      )}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-section">
          <h4 className="section-title">Información Básica</h4>

          <div className="form-group">
            <label htmlFor="rol" className="form-label">
              Tipo de Usuario *
            </label>
            <select
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="ESTUDIANTE">Estudiante</option>
              <option value="DOCENTE">Docente</option>
              <option value="COORDINADOR">Coordinador</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre completo"
              className={`form-input ${errors.nombre ? 'error' : ''}`}
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={
                formData.rol === 'ESTUDIANTE'
                  ? 'tu.nombre@mail.escuelaing.edu.co'
                  : 'tu.nombre@escuelaing.edu.co'
              }
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contraseña *
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Crea una contraseña segura"
                className={`form-input ${errors.password ? 'error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
            <small className="form-hint">
              Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña *
            </label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Repite tu contraseña"
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
        </div>

        {formData.rol === 'ESTUDIANTE' && renderStudentFields()}

        <div className="form-actions">
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary"
            disabled={isLoading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading || Object.keys(errors).length > 0}
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="small" />
                Registrando...
              </>
            ) : (
              'Registrar Usuario'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

UserRegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  initialData: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

export default UserRegistrationForm;