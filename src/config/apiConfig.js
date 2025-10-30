/**
 * Configuración centralizada de la API
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 */

const API_CONFIG = {
  // URL base del backend (ajustar según ambiente)
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8081/api',
  
  // Timeout de peticiones (15 segundos)
  TIMEOUT: 15000,
  
  // Headers por defecto
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  // Endpoints de autenticación
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    REFRESH: '/auth/refresh',
  },
  
  // Endpoints de facultades
  FACULTADES: {
    BASE: '/facultades',
    BY_ID: (id) => `/facultades/${id}`,
    PROGRAMAS: (facultadId) => `/facultades/${facultadId}/programas`,
  },
  
  // Endpoints de materias
  MATERIAS: {
    BASE: '/materias',
    BY_ID: (id) => `/materias/${id}`,
    BY_PROGRAMA: (programaId) => `/materias/programa/${programaId}`,
  },
  
  // Endpoints de periodos
  PERIODOS: {
    BASE: '/periodos',
    BY_ID: (id) => `/periodos/${id}`,
    ACTIVO: '/periodos/activo',
  },
  
  // Endpoints de solicitudes
  SOLICITUDES: {
    BASE: '/solicitudes',
    BY_ID: (id) => `/solicitudes/${id}`,
    BY_ESTUDIANTE: (estudianteId) => `/solicitudes/estudiante/${estudianteId}`,
    BY_ESTADO: (estado) => `/solicitudes/estado/${estado}`,
    CAMBIAR_ESTADO: (id) => `/solicitudes/${id}/estado`,
  },
  
  // Endpoints de detección de conflictos
  CONFLICTS: {
    DETECT: '/conflicts/detect',
  },
};

export default API_CONFIG;
