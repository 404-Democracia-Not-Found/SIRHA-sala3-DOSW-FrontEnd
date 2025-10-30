/**
 * Servicio de Solicitudes de Reasignación
 * SIRHA - Sistema de Reasignación de Horarios Académicos
 * 
 * Endpoints:
 * - GET /api/solicitudes - Listar todas las solicitudes
 * - GET /api/solicitudes/{id} - Obtener solicitud por ID
 * - GET /api/solicitudes/estudiante/{estudianteId} - Listar solicitudes de un estudiante
 * - GET /api/solicitudes/estado/{estado} - Listar solicitudes por estado
 * - POST /api/solicitudes - Crear nueva solicitud
 * - PATCH /api/solicitudes/{id}/estado - Cambiar estado de solicitud
 * - DELETE /api/solicitudes/{id} - Eliminar solicitud
 */

import httpClient from './httpClient';
import API_CONFIG from '../config/apiConfig';

const solicitudService = {
  /**
   * Obtener todas las solicitudes
   * @returns {Promise<Array>} Lista de solicitudes
   */
  async getAllSolicitudes() {
    try {
      console.log('📋 Obteniendo todas las solicitudes...');
      
      const response = await httpClient.get(API_CONFIG.ENDPOINTS.SOLICITUDES.BASE);
      
      console.log(`✅ Se obtuvieron ${response.data.length} solicitudes`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener solicitudes:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar las solicitudes',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener solicitud por ID
   * @param {string} solicitudId - ID de la solicitud
   * @returns {Promise<Object>} Datos de la solicitud
   */
  async getSolicitudById(solicitudId) {
    try {
      if (!solicitudId) {
        throw new Error('ID de solicitud es obligatorio');
      }

      console.log(`📋 Obteniendo solicitud con ID: ${solicitudId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.SOLICITUDES.BY_ID(solicitudId)
      );
      
      console.log('✅ Solicitud obtenida exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener solicitud:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar la solicitud',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener solicitudes de un estudiante
   * @param {string} estudianteId - ID del estudiante
   * @returns {Promise<Array>} Lista de solicitudes del estudiante
   */
  async getSolicitudesByEstudiante(estudianteId) {
    try {
      if (!estudianteId) {
        throw new Error('ID de estudiante es obligatorio');
      }

      console.log(`📋 Obteniendo solicitudes del estudiante: ${estudianteId}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.SOLICITUDES.BY_ESTUDIANTE(estudianteId)
      );
      
      console.log(`✅ Se obtuvieron ${response.data.length} solicitudes`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener solicitudes:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar las solicitudes del estudiante',
        status: error.response?.status,
      };
    }
  },

  /**
   * Obtener solicitudes por estado
   * @param {string} estado - Estado de la solicitud (PENDIENTE|APROBADA|RECHAZADA)
   * @returns {Promise<Array>} Lista de solicitudes con el estado especificado
   */
  async getSolicitudesByEstado(estado) {
    try {
      if (!estado) {
        throw new Error('Estado es obligatorio');
      }

      console.log(`📋 Obteniendo solicitudes con estado: ${estado}`);
      
      const response = await httpClient.get(
        API_CONFIG.ENDPOINTS.SOLICITUDES.BY_ESTADO(estado)
      );
      
      console.log(`✅ Se obtuvieron ${response.data.length} solicitudes`);
      return response.data;
    } catch (error) {
      console.error('❌ Error al obtener solicitudes:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cargar las solicitudes por estado',
        status: error.response?.status,
      };
    }
  },

  /**
   * Crear nueva solicitud de reasignación
   * @param {Object} solicitudData - Datos de la solicitud
   * @param {string} solicitudData.estudianteId - ID del estudiante
   * @param {string} solicitudData.materiaId - ID de la materia
   * @param {string} solicitudData.periodoId - ID del período académico
   * @param {string} solicitudData.grupoActualId - ID del grupo actual
   * @param {string} solicitudData.grupoDeseadoId - ID del grupo deseado
   * @param {string} solicitudData.motivo - Motivo de la solicitud
   * @param {string} [solicitudData.observaciones] - Observaciones adicionales (opcional)
   * @returns {Promise<Object>} Solicitud creada
   */
  async createSolicitud(solicitudData) {
    try {
      if (!solicitudData.estudianteId || !solicitudData.materiaId || 
          !solicitudData.periodoId || !solicitudData.grupoActualId || 
          !solicitudData.grupoDeseadoId || !solicitudData.motivo) {
        throw new Error('Todos los campos obligatorios deben estar completos');
      }

      const payload = {
        estudianteId: solicitudData.estudianteId,
        materiaId: solicitudData.materiaId,
        periodoId: solicitudData.periodoId,
        grupoActualId: solicitudData.grupoActualId,
        grupoDeseadoId: solicitudData.grupoDeseadoId,
        motivo: solicitudData.motivo,
        observaciones: solicitudData.observaciones || null,
      };

      console.log('📝 Creando solicitud de reasignación:', payload);
      
      const response = await httpClient.post(
        API_CONFIG.ENDPOINTS.SOLICITUDES.BASE,
        payload
      );
      
      console.log('✅ Solicitud creada exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al crear solicitud:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al crear la solicitud',
        errorCode: error.response?.data?.errorCode,
        validationErrors: error.response?.data?.validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Cambiar estado de una solicitud
   * @param {string} solicitudId - ID de la solicitud
   * @param {Object} estadoData - Datos del cambio de estado
   * @param {string} estadoData.nuevoEstado - Nuevo estado (PENDIENTE|APROBADA|RECHAZADA)
   * @param {string} [estadoData.motivoRechazo] - Motivo del rechazo (obligatorio si estado es RECHAZADA)
   * @param {string} [estadoData.comentarios] - Comentarios adicionales (opcional)
   * @returns {Promise<Object>} Solicitud actualizada
   */
  async cambiarEstadoSolicitud(solicitudId, estadoData) {
    try {
      if (!solicitudId || !estadoData.nuevoEstado) {
        throw new Error('ID de solicitud y nuevo estado son obligatorios');
      }

      // Si el nuevo estado es RECHAZADA, motivoRechazo es obligatorio
      if (estadoData.nuevoEstado === 'RECHAZADA' && !estadoData.motivoRechazo) {
        throw new Error('El motivo de rechazo es obligatorio para rechazar una solicitud');
      }

      const payload = {
        nuevoEstado: estadoData.nuevoEstado,
        motivoRechazo: estadoData.motivoRechazo || null,
        comentarios: estadoData.comentarios || null,
      };

      console.log(`📝 Cambiando estado de solicitud ${solicitudId}:`, payload);
      
      const response = await httpClient.patch(
        API_CONFIG.ENDPOINTS.SOLICITUDES.CAMBIAR_ESTADO(solicitudId),
        payload
      );
      
      console.log('✅ Estado de solicitud actualizado exitosamente');
      return response.data;
    } catch (error) {
      console.error('❌ Error al cambiar estado:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al cambiar el estado de la solicitud',
        errorCode: error.response?.data?.errorCode,
        validationErrors: error.response?.data?.validationErrors,
        status: error.response?.status,
      };
    }
  },

  /**
   * Aprobar solicitud
   * @param {string} solicitudId - ID de la solicitud
   * @param {string} [comentarios] - Comentarios opcionales
   * @returns {Promise<Object>} Solicitud aprobada
   */
  async aprobarSolicitud(solicitudId, comentarios = null) {
    return this.cambiarEstadoSolicitud(solicitudId, {
      nuevoEstado: 'APROBADA',
      comentarios: comentarios,
    });
  },

  /**
   * Rechazar solicitud
   * @param {string} solicitudId - ID de la solicitud
   * @param {string} motivoRechazo - Motivo del rechazo (obligatorio)
   * @param {string} [comentarios] - Comentarios opcionales
   * @returns {Promise<Object>} Solicitud rechazada
   */
  async rechazarSolicitud(solicitudId, motivoRechazo, comentarios = null) {
    if (!motivoRechazo) {
      throw new Error('El motivo de rechazo es obligatorio');
    }

    return this.cambiarEstadoSolicitud(solicitudId, {
      nuevoEstado: 'RECHAZADA',
      motivoRechazo: motivoRechazo,
      comentarios: comentarios,
    });
  },

  /**
   * Eliminar solicitud
   * @param {string} solicitudId - ID de la solicitud
   * @returns {Promise<void>}
   */
  async deleteSolicitud(solicitudId) {
    try {
      if (!solicitudId) {
        throw new Error('ID de solicitud es obligatorio');
      }

      console.log(`🗑️ Eliminando solicitud: ${solicitudId}`);
      
      await httpClient.delete(API_CONFIG.ENDPOINTS.SOLICITUDES.BY_ID(solicitudId));
      
      console.log('✅ Solicitud eliminada exitosamente');
    } catch (error) {
      console.error('❌ Error al eliminar solicitud:', error.response?.data || error.message);
      
      throw {
        message: error.response?.data?.message || 'Error al eliminar la solicitud',
        status: error.response?.status,
      };
    }
  },
};

export default solicitudService;
