import React, { useState } from 'react';
import { Home, ChevronLeft, Plus, Eye, EyeOff, UserPlus } from 'lucide-react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Usuario registrado exitosamente');
      setIsSubmitting(false);
      setFormData({ nombre: '', email: '', password: '', confirmPassword: '', rol: 'ESTUDIANTE', genero: '' });
    }, 1000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
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
          <select name="rol" value={formData.rol} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}>
            <option value="ESTUDIANTE">Estudiante</option>
            <option value="DOCENTE">Docente</option>
            <option value="COORDINADOR">Coordinador</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Nombre Completo *
          </label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Ej: Juan Pérez García" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }} required />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Correo Institucional *
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="nombre@escuelaing.edu.co" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }} required />
        </div>

        {formData.rol === 'ESTUDIANTE' && (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Género *
            </label>
            <select name="genero" value={formData.genero} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }} required>
              <option value="">Seleccione una opción</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMENINO">Femenino</option>
              <option value="OTRO">Otro</option>
            </select>
          </div>
        )}

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Contraseña *
          </label>
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} placeholder="Mínimo 8 caracteres" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }} required />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Confirmar Contraseña *
          </label>
          <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Repite la contraseña" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }} required />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="button" onClick={() => setFormData({ nombre: '', email: '', password: '', confirmPassword: '', rol: 'ESTUDIANTE', genero: '' })} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem' }}>
            Cancelar
          </button>
          <button type="submit" disabled={isSubmitting} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#991b1b', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem', flex: 1 }}>
            {isSubmitting ? 'Registrando...' : 'Registrar Usuario'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
