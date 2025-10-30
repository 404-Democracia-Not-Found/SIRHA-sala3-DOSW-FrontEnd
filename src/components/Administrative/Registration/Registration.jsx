import React, { useState } from 'react';
import { Home, ChevronLeft, Plus, Eye, EyeOff, UserPlus, CheckCircle, XCircle } from 'lucide-react';
import { authService } from '../../../services';

const Registration = ({ setCurrentView }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    rol: 'ESTUDIANTE',
    genero: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar errores al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'El formato del correo no es válido';
      } else {
        // Validar dominio según rol
        const domain = formData.email.split('@')[1];
        if (formData.rol === 'ESTUDIANTE') {
          if (domain !== 'mail.escuelaing.edu.co') {
            newErrors.email = 'Los estudiantes deben usar el dominio @mail.escuelaing.edu.co';
          }
        } else {
          if (domain !== 'escuelaing.edu.co') {
            newErrors.email = 'Los docentes y coordinadores deben usar el dominio @escuelaing.edu.co';
          }
        }
      }
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (formData.password.length > 128) {
      newErrors.password = 'La contraseña no debe exceder 128 caracteres';
    }

    // Validar confirmación de contraseña
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Validar género para estudiantes
    if (formData.rol === 'ESTUDIANTE' && !formData.genero) {
      newErrors.genero = 'El género es obligatorio para estudiantes';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario
    if (!validateForm()) {
      showNotification('Por favor, corrige los errores en el formulario', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Preparar datos para enviar al backend
      const userData = {
        nombre: formData.nombre.trim(),
        email: formData.email.trim(),
        password: formData.password,
        rol: formData.rol,
        genero: formData.rol === 'ESTUDIANTE' ? formData.genero : null,
      };

      // Llamar al servicio de registro
      const response = await authService.register(userData);

      console.log('✅ Registro exitoso:', response);

      // Mostrar notificación de éxito
      showNotification('Usuario registrado exitosamente', 'success');

      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
        rol: 'ESTUDIANTE',
        genero: ''
      });

      // Redirigir después de 2 segundos
      setTimeout(() => {
        setCurrentView('administrative-dashboard');
      }, 2000);

    } catch (error) {
      console.error('❌ Error en registro:', error);

      // Manejar errores específicos del backend
      if (error.status === 400 && error.validationErrors) {
        // Errores de validación
        const backendErrors = {};
        error.validationErrors.forEach(err => {
          backendErrors[err.field] = err.message;
        });
        setErrors(backendErrors);
        showNotification('Errores de validación en el formulario', 'error');
      } else if (error.status === 409) {
        // Email duplicado
        setErrors({ email: 'Este correo ya está registrado' });
        showNotification('El correo electrónico ya está registrado', 'error');
      } else if (error.status === 422) {
        // Error de dominio
        showNotification(error.message || 'Dominio de correo no válido', 'error');
      } else {
        // Error genérico
        showNotification(
          error.message || 'Error al registrar usuario. Intenta nuevamente.',
          'error'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Notificación flotante */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: notification.type === 'success' ? '#10b981' : '#ef4444',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 1000,
          maxWidth: '400px',
        }}>
          {notification.type === 'success' ? (
            <CheckCircle size={24} />
          ) : (
            <XCircle size={24} />
          )}
          <span style={{ fontSize: '0.95rem' }}>{notification.message}</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
        <button onClick={() => setCurrentView('administrative-dashboard')} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          ← Volver
        </button>
        <h1 style={{ margin: 0 }}>Registro de Usuarios</h1>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Tipo de Usuario *
          </label>
          <select name="rol" value={formData.rol} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderColor: errors.rol ? '#ef4444' : '#d1d5db' }}>
            <option value="ESTUDIANTE">Estudiante</option>
            <option value="DOCENTE">Docente</option>
            <option value="COORDINADOR">Coordinador</option>
          </select>
          {errors.rol && <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.rol}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Nombre Completo *
          </label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Ej: Juan Pérez García" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderColor: errors.nombre ? '#ef4444' : '#d1d5db', border: '1px solid' }} />
          {errors.nombre && <span style={{ color: '#ef4444', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.nombre}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Correo Institucional *
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="nombre@escuelaing.edu.co" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderColor: errors.email ? '#ef4444' : '#d1d5db', border: '1px solid' }} />
          {errors.email && <span style={{ color: '#ef4444', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.email}</span>}
        </div>

        {formData.rol === 'ESTUDIANTE' && (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Género *
            </label>
            <select name="genero" value={formData.genero} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderColor: errors.genero ? '#ef4444' : '#d1d5db' }}>
              <option value="">Seleccione una opción</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMENINO">Femenino</option>
              <option value="OTRO">Otro</option>
            </select>
            {errors.genero && <span style={{ color: '#ef4444', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.genero}</span>}
          </div>
        )}

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Contraseña *
          </label>
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} placeholder="Mínimo 8 caracteres" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderColor: errors.password ? '#ef4444' : '#d1d5db', border: '1px solid' }} />
          {errors.password && <span style={{ color: '#ef4444', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.password}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Confirmar Contraseña *
          </label>
          <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Repite la contraseña" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderColor: errors.confirmPassword ? '#ef4444' : '#d1d5db', border: '1px solid' }} />
          {errors.confirmPassword && <span style={{ color: '#ef4444', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.confirmPassword}</span>}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="button" onClick={() => setFormData({ nombre: '', email: '', password: '', confirmPassword: '', rol: 'ESTUDIANTE', genero: '' })} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem' }} disabled={isSubmitting}>
            Cancelar
          </button>
          <button type="submit" disabled={isSubmitting} style={{ padding: '0.75rem 1.5rem', backgroundColor: isSubmitting ? '#9ca3af' : '#991b1b', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '1rem', flex: 1 }}>
            {isSubmitting ? 'Registrando...' : 'Registrar Usuario'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
