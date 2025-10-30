/**
 * Exportación centralizada de servicios
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Uso:
 * import { authService, solicitudService, ... } from './services';
 */

export { default as authService } from './authService';
export { default as facultadService } from './facultadService';
export { default as materiaService } from './materiaService';
export { default as periodoService } from './periodoService';
export { default as solicitudService } from './solicitudService';
export { default as conflictService } from './conflictService';
export { default as httpClient } from './httpClient';
