/**
 * Cliente HTTP centralizado con Axios
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Características:
 * - Interceptores para autenticación automática
 * - Manejo centralizado de errores
 * - Logs de peticiones en desarrollo
 */

import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

// Crear instancia de Axios
const httpClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.DEFAULT_HEADERS,
});

/**
 * Interceptor de Request
 * Agrega el token JWT automáticamente si existe
 */
httpClient.interceptors.request.use(
  (config) => {
    // Obtener token del localStorage
    const token = localStorage.getItem('authToken');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`📤 [${config.method.toUpperCase()}] ${config.url}`, {
        data: config.data,
        params: config.params,
      });
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Error en la configuración de la petición:', error);
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Response
 * Maneja errores HTTP de forma centralizada
 */
httpClient.interceptors.response.use(
  (response) => {
    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ [${response.status}] ${response.config.url}`, response.data);
    }
    
    return response;
  },
  (error) => {
    // Log del error
    console.error('❌ Error en la respuesta:', {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: error.config?.url,
    });
    
    // Manejo específico según código de estado
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          // Bad Request - Validación fallida
          console.error('⚠️ Datos inválidos:', data.validationErrors || data.message);
          break;
          
        case 401:
          // Unauthorized - Token inválido o expirado
          console.warn('🔒 No autorizado. Redirigiendo al login...');
          localStorage.removeItem('authToken');
          localStorage.removeItem('userRole');
          localStorage.removeItem('userName');
          
          // Redirigir al login si no estamos ya ahí
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          }
          break;
          
        case 403:
          // Forbidden - No tiene permisos
          console.error('🚫 No tienes permisos para realizar esta acción');
          break;
          
        case 404:
          // Not Found - Recurso no encontrado
          console.error('🔍 Recurso no encontrado');
          break;
          
        case 409:
          // Conflict - Email duplicado, etc.
          console.error('⚠️ Conflicto:', data.message);
          break;
          
        case 422:
          // Unprocessable Entity - Validación de negocio fallida
          console.error('⚠️ Error de validación:', data.message);
          break;
          
        case 500:
          // Internal Server Error
          console.error('💥 Error interno del servidor');
          break;
          
        default:
          console.error(`⚠️ Error ${status}:`, data.message || 'Error desconocido');
      }
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error('🌐 No hay respuesta del servidor. Verifica tu conexión a internet.');
    } else {
      // Error al configurar la petición
      console.error('⚠️ Error al configurar la petición:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default httpClient;
