/**
 * Servicio de Detección de Conflictos de Horarios
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Endpoints:
 * - POST /api/conflicts/detect - Detectar conflictos de horarios
 */

import httpClient from './httpClient';
import API_CONFIG from '../config/apiConfig';

const conflictService = {
  /**
   * Detectar conflictos de horarios
   * @param {Object} conflictData - Datos para detectar conflictos
   * @param {string} conflictData.estudianteId - ID del estudiante
   * @param {string} conflictData.grupoDeseadoId - ID del grupo al que se quiere cambiar
   * @param {string} conflictData.periodoId - ID del período académico
   * @returns {Promise<Object>} Resultado de la detección {tieneConflicto: boolean, conflictos: Array}
   */
  async detectarConflictos(conflictData) {
    try {
      if (!conflictData.estudianteId || !conflictData.grupoDeseadoId || !conflictData.periodoId) {
        throw new Error('Todos los campos son obligatorios para detectar conflictos');
      }

      const payload = {
        estudianteId: conflictData.estudianteId,
        grupoDeseadoId: conflictData.grupoDeseadoId,
        periodoId: conflictData.periodoId,
      };

      console.log('🔍 Detectando conflictos de horarios:', payload);
      
      const response = await httpClient.post(
        API_CONFIG.ENDPOINTS.CONFLICTS.DETECT,
        payload
      );
      
      const resultado = response.data;
      
      if (resultado.tieneConflicto) {
        console.log(`⚠️ Se detectaron ${resultado.conflictos.length} conflictos de horario`);
      } else {
        console.log('✅ No se detectaron conflictos de horario');
      }
      
      return resultado;
    } catch (error) {
      console.error('❌ Error al detectar conflictos:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al detectar conflictos de horario',
        errorCode: error.response?.data?.errorCode,
        status: error.response?.status,
      };
    }
  },

  /**
   * Verificar si un cambio de grupo es posible sin conflictos
   * @param {string} estudianteId - ID del estudiante
   * @param {string} grupoDeseadoId - ID del grupo deseado
   * @param {string} periodoId - ID del período académico
   * @returns {Promise<boolean>} true si no hay conflictos, false si los hay
   */
  async verificarDisponibilidad(estudianteId, grupoDeseadoId, periodoId) {
    try {
      const resultado = await this.detectarConflictos({
        estudianteId,
        grupoDeseadoId,
        periodoId,
      });

      return !resultado.tieneConflicto;
    } catch (error) {
      console.error('❌ Error al verificar disponibilidad:', error);
      throw error;
    }
  },

  /**
   * Obtener detalles de conflictos
   * @param {string} estudianteId - ID del estudiante
   * @param {string} grupoDeseadoId - ID del grupo deseado
   * @param {string} periodoId - ID del período académico
   * @returns {Promise<Array>} Lista de conflictos encontrados
   */
  async obtenerDetallesConflictos(estudianteId, grupoDeseadoId, periodoId) {
    try {
      const resultado = await this.detectarConflictos({
        estudianteId,
        grupoDeseadoId,
        periodoId,
      });

      return resultado.conflictos || [];
    } catch (error) {
      console.error('❌ Error al obtener detalles de conflictos:', error);
      throw error;
    }
  },
};

export default conflictService;
