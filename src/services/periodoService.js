/**
 * Servicio de Períodos Académicos
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Endpoints:
 * - GET /api/periodos - Listar todos los períodos
 * - GET /api/periodos/{id} - Obtener período por ID
 * - GET /api/periodos/activo - Obtener período académico activo
 * - POST /api/periodos - Crear nuevo período
 * - PUT /api/periodos/{id} - Actualizar período
 * - DELETE /api/periodos/{id} - Eliminar período
 */

import httpClient from './httpClient';
import API_CONFIG from '../config/apiConfig';

const periodoService = {
  /**
   * Obtener todos los períodos académicos
   * @returns {Promise<Array>} Lista de períodos
   */
  async getAllPeriodos() {
    try {
      console.log('📅 Obteniendo todos los períodos académicos...');
      
      const response = await httpClient.get(API_CONFIG.ENDPOINTS.PERIODOS.BASE);
      
      console.log(`✅ Se obtuvieron ${response.data.length} períodos`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener períodos:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar los períodos académicos',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener período por ID
   * @param {string} periodoId - ID del período
   * @returns {Promise<Object>} Datos del período
   */
  async getPeriodoById(periodoId) {
    try {
      if (!periodoId) {
        throw new Error('ID de período es obligatorio');
      }

      console.log(`📅 Obteniendo período con ID: ${periodoId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.PERIODOS.BY_ID(periodoId)
      );
      
      console.log('✅ Período obtenido exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener período:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar el período',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener período académico activo
   * @returns {Promise<Object>} Período activo
   */
  async getPeriodoActivo() {
    try {
      console.log('📅 Obteniendo período académico activo...');
      
      const response = await httpClient.get(API_CONFIG.ENDPOINTS.PERIODOS.ACTIVO);
      
      console.log('✅ Período activo obtenido exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener período activo:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar el período activo',
        status: error.response?.status,
      };
    }
  },

  /**
   * Crear nuevo período académico
   * @param {Object} periodoData - Datos del período
   * @param {string} periodoData.nombre - Nombre del período (ej: "2024-1")
   * @param {string} periodoData.fechaInicio - Fecha de inicio (ISO 8601)
   * @param {string} periodoData.fechaFin - Fecha de fin (ISO 8601)
   * @param {boolean} [periodoData.activo] - Si es el período activo (opcional)
   * @returns {Promise<Object>} Período creado
   */
  async createPeriodo(periodoData) {
    try {
      if (!periodoData.nombre || !periodoData.fechaInicio || !periodoData.fechaFin) {
        throw new Error('Todos los campos obligatorios deben estar completos');
      }

      const payload = {
        nombre: periodoData.nombre,
        fechaInicio: periodoData.fechaInicio,
        fechaFin: periodoData.fechaFin,
        activo: periodoData.activo !== undefined ? periodoData.activo : null,
      };

      console.log('📝 Creando período académico:', payload);
      
      const response = await httpClient.post(
        API_CONFIG.ENDPOINTS.PERIODOS.BASE,
        payload
      );
      
      console.log('✅ Período creado exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al crear período:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al crear el período académico',
        errorCode: error.response?.data?.errorCode,
        validationErrors: error.response?.data?.validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Actualizar período existente
   * @param {string} periodoId - ID del período
   * @param {Object} periodoData - Datos actualizados
   * @returns {Promise<Object>} Período actualizado
   */
  async updatePeriodo(periodoId, periodoData) {
    try {
      if (!periodoId) {
        throw new Error('ID de período es obligatorio');
      }

      const payload = {
        nombre: periodoData.nombre || null,
        fechaInicio: periodoData.fechaInicio || null,
        fechaFin: periodoData.fechaFin || null,
        activo: periodoData.activo !== undefined ? periodoData.activo : null,
      };

      console.log(`📝 Actualizando período ${periodoId}:`, payload);
      
      const response = await httpClient.put(
        API_CONFIG.ENDPOINTS.PERIODOS.BY_ID(periodoId),
        payload
      );
      
      console.log('✅ Período actualizado exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al actualizar período:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al actualizar el período',
        errorCode: error.response?.data?.errorCode,
        validationErrors: error.response?.data?.validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Eliminar período
   * @param {string} periodoId - ID del período
   * @returns {Promise<void>}
   */
  async deletePeriodo(periodoId) {
    try {
      if (!periodoId) {
        throw new Error('ID de período es obligatorio');
      }

      console.log(`🗑️ Eliminando período: ${periodoId}`);
      
      await httpClient.delete(API_CONFIG.ENDPOINTS.PERIODOS.BY_ID(periodoId));
      
      console.log('✅ Período eliminado exitosamente');
    } catch (error) {
      console.error('❌ Error al eliminar período:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al eliminar el período',
        status: error.response?.status,
      };
    }
  },
};

export default periodoService;
