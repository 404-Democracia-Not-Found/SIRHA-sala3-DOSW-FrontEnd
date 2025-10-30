/**
 * Servicio de Facultades y Programas
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Endpoints:
 * - GET /api/facultades - Listar todas las facultades
 * - GET /api/facultades/{id} - Obtener facultad por ID
 * - GET /api/facultades/{facultadId}/programas - Listar programas de una facultad
 */

import httpClient from './httpClient';
import API_CONFIG from '../config/apiConfig';

const facultadService = {
  /**
   * Obtener todas las facultades
   * @returns {Promise<Array>} Lista de facultades
   */
  async getAllFacultades() {
    try {
      console.log('📚 Obteniendo todas las facultades...');
      
      const response = await httpClient.get(API_CONFIG.ENDPOINTS.FACULTADES.BASE);
      
      console.log(`✅ Se obtuvieron ${response.data.length} facultades`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener facultades:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar las facultades',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener facultad por ID
   * @param {string} facultadId - ID de la facultad
   * @returns {Promise<Object>} Datos de la facultad
   */
  async getFacultadById(facultadId) {
    try {
      if (!facultadId) {
        throw new Error('ID de facultad es obligatorio');
      }

      console.log(`📚 Obteniendo facultad con ID: ${facultadId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.FACULTADES.BY_ID(facultadId)
      );
      
      console.log('✅ Facultad obtenida exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener facultad:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar la facultad',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener programas de una facultad
   * @param {string} facultadId - ID de la facultad
   * @returns {Promise<Array>} Lista de programas académicos
   */
  async getProgramasByFacultad(facultadId) {
    try {
      if (!facultadId) {
        throw new Error('ID de facultad es obligatorio');
      }

      console.log(`🎓 Obteniendo programas de la facultad: ${facultadId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.FACULTADES.PROGRAMAS(facultadId)
      );
      
      console.log(`✅ Se obtuvieron ${response.data.length} programas`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener programas:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar los programas',
        status: error.response?.status,
      };
    }
  },
};

export default facultadService;
