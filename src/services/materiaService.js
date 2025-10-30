/**
 * Servicio de Materias
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Endpoints:
 * - GET /api/materias - Listar todas las materias
 * - GET /api/materias/{id} - Obtener materia por ID
 * - GET /api/materias/programa/{programaId} - Listar materias de un programa
 * - POST /api/materias - Crear nueva materia
 * - PUT /api/materias/{id} - Actualizar materia
 * - DELETE /api/materias/{id} - Eliminar materia
 */

import httpClient from './httpClient';
import API_CONFIG from '../config/apiConfig';

const materiaService = {
  /**
   * Obtener todas las materias
   * @returns {Promise<Array>} Lista de materias
   */
  async getAllMaterias() {
    try {
      console.log('📖 Obteniendo todas las materias...');
      
      const response = await httpClient.get(API_CONFIG.ENDPOINTS.MATERIAS.BASE);
      
      console.log(`✅ Se obtuvieron ${response.data.length} materias`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener materias:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar las materias',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener materia por ID
   * @param {string} materiaId - ID de la materia
   * @returns {Promise<Object>} Datos de la materia
   */
  async getMateriaById(materiaId) {
    try {
      if (!materiaId) {
        throw new Error('ID de materia es obligatorio');
      }

      console.log(`📖 Obteniendo materia con ID: ${materiaId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.MATERIAS.BY_ID(materiaId)
      );
      
      console.log('✅ Materia obtenida exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener materia:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar la materia',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener materias de un programa académico
   * @param {string} programaId - ID del programa
   * @returns {Promise<Array>} Lista de materias del programa
   */
  async getMateriasByPrograma(programaId) {
    try {
      if (!programaId) {
        throw new Error('ID de programa es obligatorio');
      }

      console.log(`📖 Obteniendo materias del programa: ${programaId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.MATERIAS.BY_PROGRAMA(programaId)
      );
      
      console.log(`✅ Se obtuvieron ${response.data.length} materias`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener materias:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar las materias del programa',
        status: error.response?.status,
      };
    }
  },

  /**
   * Crear nueva materia
   * @param {Object} materiaData - Datos de la materia
   * @param {string} materiaData.codigo - Código de la materia
   * @param {string} materiaData.nombre - Nombre de la materia
   * @param {number} materiaData.creditos - Número de créditos
   * @param {string} materiaData.programaId - ID del programa académico
   * @param {number} [materiaData.horasSemanales] - Horas semanales (opcional)
   * @returns {Promise<Object>} Materia creada
   */
  async createMateria(materiaData) {
    try {
      if (!materiaData.codigo || !materiaData.nombre || !materiaData.creditos || !materiaData.programaId) {
        throw new Error('Todos los campos obligatorios deben estar completos');
      }

      const payload = {
        codigo: materiaData.codigo,
        nombre: materiaData.nombre,
        creditos: materiaData.creditos,
        programaId: materiaData.programaId,
        horasSemanales: materiaData.horasSemanales || null,
      };

      console.log('📝 Creando materia:', payload);
      
      const response = await httpClient.post(
        API_CONFIG.ENDPOINTS.MATERIAS.BASE,
        payload
      );
      
      console.log('✅ Materia creada exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al crear materia:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al crear la materia',
        errorCode: error.response?.data?.errorCode,
        validationErrors: error.response?.data?.validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Actualizar materia existente
   * @param {string} materiaId - ID de la materia
   * @param {Object} materiaData - Datos actualizados
   * @returns {Promise<Object>} Materia actualizada
   */
  async updateMateria(materiaId, materiaData) {
    try {
      if (!materiaId) {
        throw new Error('ID de materia es obligatorio');
      }

      const payload = {
        codigo: materiaData.codigo || null,
        nombre: materiaData.nombre || null,
        creditos: materiaData.creditos || null,
        programaId: materiaData.programaId || null,
        horasSemanales: materiaData.horasSemanales || null,
      };

      console.log(`📝 Actualizando materia ${materiaId}:`, payload);
      
      const response = await httpClient.put(
        API_CONFIG.ENDPOINTS.MATERIAS.BY_ID(materiaId),
        payload
      );
      
      console.log('✅ Materia actualizada exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al actualizar materia:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al actualizar la materia',
        errorCode: error.response?.data?.errorCode,
        validationErrors: error.response?.data?.validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Eliminar materia
   * @param {string} materiaId - ID de la materia
   * @returns {Promise<void>}
   */
  async deleteMateria(materiaId) {
    try {
      if (!materiaId) {
        throw new Error('ID de materia es obligatorio');
      }

      console.log(`🗑️ Eliminando materia: ${materiaId}`);
      
      await httpClient.delete(API_CONFIG.ENDPOINTS.MATERIAS.BY_ID(materiaId));
      
      console.log('✅ Materia eliminada exitosamente');
    } catch (error) {
      console.error('❌ Error al eliminar materia:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al eliminar la materia',
        status: error.response?.status,
      };
    }
  },
};

export default materiaService;
