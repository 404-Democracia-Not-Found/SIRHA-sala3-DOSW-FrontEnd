/**
 * Configuración centralizada de la API
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 */

const API_CONFIG = {
  // URL base del backend (ajustar según ambiente)
  // Producción: https://sirha-sala3-dosw-backend-4.onrender.com
  // Desarrollo local: http://localhost:8081
  BASE_URL: process.env.REACT_APP_API_URL || 'https://sirha-sala3-dosw-backend-4.onrender.com',
  
  // Timeout de peticiones (15 segundos)
  TIMEOUT: 15000,
  
  // Headers por defecto
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  // Endpoints de autenticación
  // Nota: El backend expone estos en /Autenticación (con acento), no /api/auth
  AUTH: {
    REGISTER: '/Autenticación/register',
    LOGIN: '/Autenticación/login',
    REFRESH: '/Autenticación/refresh',
  },
  
  // Endpoints de facultades
  FACULTADES: {
    BASE: '/api/facultades',
    BY_ID: (id) => `/api/facultades/${id}`,
    PROGRAMAS: (facultadId) => `/api/facultades/${facultadId}/programas`,
  },
  
  // Endpoints de materias
  MATERIAS: {
    BASE: '/api/materias',
    BY_ID: (id) => `/api/materias/${id}`,
    BY_PROGRAMA: (programaId) => `/api/materias/programa/${programaId}`,
  },
  
  // Endpoints de periodos
  PERIODOS: {
    BASE: '/api/periodos',
    BY_ID: (id) => `/api/periodos/${id}`,
    ACTIVO: '/api/periodos/activo',
  },
  
  // Endpoints de solicitudes
  SOLICITUDES: {
    BASE: '/api/solicitudes',
    BY_ID: (id) => `/api/solicitudes/${id}`,
    BY_ESTUDIANTE: (estudianteId) => `/api/solicitudes/estudiante/${estudianteId}`,
    BY_ESTADO: (estado) => `/api/solicitudes/estado/${estado}`,
    CAMBIAR_ESTADO: (id) => `/api/solicitudes/${id}/estado`,
  },
  
  // Endpoints de detección de conflictos
  CONFLICTS: {
    DETECT: '/api/conflicts/detect',
  },
};

// Añadir alias de compatibilidad después de crear el objeto
API_CONFIG.ENDPOINTS = {
  AUTH: API_CONFIG.AUTH,
  FACULTADES: API_CONFIG.FACULTADES,
  MATERIAS: API_CONFIG.MATERIAS,
  PERIODOS: API_CONFIG.PERIODOS,
  SOLICITUDES: API_CONFIG.SOLICITUDES,
  CONFLICTS: API_CONFIG.CONFLICTS,
};

export default API_CONFIG;
