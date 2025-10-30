/**
 * Servicio de Autenticación
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Endpoints:
 * - POST /api/auth/register - Registro de usuarios
 * - POST /api/auth/login - Inicio de sesión
 * - POST /api/auth/refresh - Renovar token
 */

import httpClient from './httpClient';
import API_CONFIG from '../config/apiConfig';

const authService = {
  /**
   * Registrar nuevo usuario
   * @param {Object} userData - Datos del usuario
   * @param {string} userData.nombre - Nombre completo
   * @param {string} userData.email - Email institucional
   * @param {string} userData.password - Contraseña (8-128 caracteres)
   * @param {string} userData.rol - Rol (ESTUDIANTE|DOCENTE|COORDINADOR)
   * @param {string} [userData.genero] - Género (MASCULINO|FEMENINO|OTRO) - Solo para estudiantes
   * @returns {Promise<Object>} AuthResponse {token, expiresAt, user: {id, nombre, email, rol}}
   */
  async register(userData) {
    try {
      // Validar que los campos requeridos estén presentes
      if (!userData.nombre || !userData.email || !userData.password || !userData.rol) {
        throw new Error('Todos los campos obligatorios deben estar completos');
      }

      // Construir payload según la estructura del backend
      const payload = {
        nombre: userData.nombre,
        email: userData.email,
        password: userData.password,
        rol: userData.rol,
        // Enviar género solo para estudiantes, null en caso contrario
        genero: userData.rol === 'ESTUDIANTE' && userData.genero ? userData.genero : null,
      };

      console.log('📝 Registrando usuario:', {
        nombre: payload.nombre,
        email: payload.email,
        rol: payload.rol,
        genero: payload.genero,
      });

      const response = await httpClient.post(API_CONFIG.ENDPOINTS.AUTH.REGISTER, payload);

      // Si el registro es exitoso, guardar token y datos del usuario
      if (response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userRole', response.data.user.rol);
        localStorage.setItem('userName', response.data.user.nombre);
        localStorage.setItem('userEmail', response.data.user.email);
        
        console.log('✅ Usuario registrado exitosamente');
      }

      return response.data;
    } catch (error) {
      console.error('❌ Error en registro:', error.response?.data || error.message);
      
      // Extraer mensaje de error del backend
      const errorMessage = error.response?.data?.message || 'Error al registrar usuario';
      const errorCode = error.response?.data?.errorCode;
      const validationErrors = error.response?.data?.validationErrors;

      throw {
        message: errorMessage,
        errorCode: errorCode,
        validationErrors: validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Iniciar sesión
   * @param {Object} credentials - Credenciales de acceso
   * @param {string} credentials.email - Email institucional
   * @param {string} credentials.password - Contraseña
   * @returns {Promise<Object>} AuthResponse {token, expiresAt, user: {id, nombre, email, rol}}
   */
  async login(credentials) {
    try {
      if (!credentials.email || !credentials.password) {
        throw new Error('Email y contraseña son obligatorios');
      }

      const payload = {
        email: credentials.email,
        password: credentials.password,
      };

      console.log('🔐 Iniciando sesión para:', credentials.email);

      // Intentar endpoint principal primero (con acento). Si falla por CORS/403/404, intentar alias sin acento.
      let response;
      try {
        response = await httpClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, payload);
      } catch (err) {
        // Si el error es por CORS/Forbidden o Not Found, intentar la ruta alternativa sin acento
        const status = err.response?.status;
        const isCorsOrNotFound = status === 403 || status === 404 || !err.response;
        if (isCorsOrNotFound) {
          console.warn('Primary auth endpoint failed, trying alternate path without accent...', err.response?.status);
          try {
            response = await httpClient.post(API_CONFIG.AUTH_ALIASES.LOGIN, payload);
          } catch (err2) {
            // rethrow the original error if second attempt also fails
            throw err2 || err;
          }
        } else {
          throw err;
        }
      }

      // Guardar token y datos del usuario
      if (response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userRole', response.data.user.rol);
        localStorage.setItem('userName', response.data.user.nombre);
        localStorage.setItem('userEmail', response.data.user.email);
        
        console.log('✅ Sesión iniciada exitosamente');
      }

      return response.data;
    } catch (error) {
      console.error('❌ Error en login:', error.response?.data || error.message);
      
      const errorMessage = error.response?.data?.message || 'Error al iniciar sesión';
      const errorCode = error.response?.data?.errorCode;

      throw {
        message: errorMessage,
        errorCode: errorCode,
        status: error.response?.status,
      };
    }
  },

  /**
   * Renovar token de acceso
   * @returns {Promise<Object>} AuthResponse actualizado
   */
  async refreshToken() {
    try {
      // Refresh token: intentar alias si el primero falla
      let response;
      try {
        response = await httpClient.post(API_CONFIG.ENDPOINTS.AUTH.REFRESH);
      } catch (err) {
        const status = err.response?.status;
        const isCorsOrNotFound = status === 403 || status === 404 || !err.response;
        if (isCorsOrNotFound) {
          console.warn('Primary refresh endpoint failed, trying alternate path without accent...', err.response?.status);
          response = await httpClient.post(API_CONFIG.AUTH_ALIASES.REFRESH);
        } else {
          throw err;
        }
      }

      // Actualizar token en localStorage
      if (response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        console.log('✅ Token renovado exitosamente');
      }

      return response.data;
    } catch (error) {
      console.error('❌ Error al renovar token:', error.response?.data || error.message);
      
      // Si falla la renovación, cerrar sesión
      this.logout();
      
      throw {
        message: 'Sesión expirada. Por favor, inicia sesión nuevamente.',
        status: error.response?.status,
      };
    }
  },

  /**
   * Cerrar sesión
   * Limpia todos los datos del usuario del localStorage
   */
  logout() {
    console.log('👋 Cerrando sesión...');
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    
    console.log('✅ Sesión cerrada exitosamente');
  },

  /**
   * Verificar si el usuario está autenticado
   * @returns {boolean} true si hay token válido
   */
  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token;
  },

  /**
   * Obtener rol del usuario actual
   * @returns {string|null} Rol del usuario (ESTUDIANTE|DOCENTE|COORDINADOR)
   */
  getUserRole() {
    return localStorage.getItem('userRole');
  },

  /**
   * Obtener nombre del usuario actual
   * @returns {string|null} Nombre del usuario
   */
  getUserName() {
    return localStorage.getItem('userName');
  },

  /**
   * Obtener email del usuario actual
   * @returns {string|null} Email del usuario
   */
  getUserEmail() {
    return localStorage.getItem('userEmail');
  },
};

export default authService;
