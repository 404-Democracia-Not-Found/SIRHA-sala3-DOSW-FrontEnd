import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical } from 'lucide-react';
import './MessagesAdministrative.css';

const MessagesAdministrative = ({ setCurrentView }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'Coordinación Académica',
      subject: 'Cambio de horario - Programación II',
      preview: 'Se ha programado un cambio en el horario de la materia Programación II para el día viernes...',
      time: '10:30 AM',
      isRead: false
    },
    {
      id: 2,
      sender: 'Estudiante Ignacio Castillo',
      subject: 'Mensaje: Consulta sobre horario de clases',
      preview: 'Estimado profesor, quisiera saber si puedo cambiarme al grupo 2 de...',
      time: '9:15 AM',
      isRead: false
    },
    {
      id: 3,
      sender: 'Sistema SIRHA',
      subject: 'Confirmación de inscripción',
      preview: 'Su inscripción para el período académico 2025-1 ha sido confirmada exitosamente...',
      time: 'Ayer',
      isRead: true
    },
    {
      id: 4,
      sender: 'Decanatura',
      subject: 'Invitación: Conferencia de Ingeniería',
      preview: 'Tiene una invitación para asistir a la conferencia "Innovaciones en Ingeniería de Software"...',
      time: 'Ayer',
      isRead: true
    }
  ];

  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div className="admin-messages-container">
      {/* Header */}
      <header className="admin-messages-header">
        <div className="admin-messages-header-content">
          {/* Botón atrás y título */}
          <div className="admin-messages-header-left">
            <button 
              onClick={() => setCurrentView('administrative-dashboard')}
              className="admin-messages-back-button"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="admin-messages-title">Mensajes</h1>
          </div>

          {/* Botón de opciones */}
          <button className="admin-messages-options-button">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="admin-messages-search-section">
        <div className="admin-messages-search-wrapper">
          <Search className="admin-messages-search-icon" size={20} />
          <input
            type="text"
            placeholder="Buscar mensajes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-messages-search-input"
          />
        </div>
      </div>

      {/* Messages List */}
      <main className="admin-messages-main">
        <div className="admin-messages-list-card">
          {filteredMessages.length === 0 ? (
            <div className="admin-messages-empty-state">
              <p>No se encontraron mensajes</p>
            </div>
          ) : (
            <div className="admin-messages-divider">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`admin-messages-item ${
                    !message.isRead ? 'admin-messages-item-unread' : ''
                  }`}
                >
                  <div className="admin-messages-item-content">
                    <div className="admin-messages-item-main">
                      {/* Sender and Time */}
                      <div className="admin-messages-item-header">
                        <p className={`admin-messages-item-sender ${
                          !message.isRead ? 'admin-messages-item-sender-unread' : ''
                        }`}>
                          {message.sender}
                        </p>
                        <p className="admin-messages-item-time">
                          {message.time}
                        </p>
                      </div>
                      
                      {/* Subject */}
                      <p className={`admin-messages-item-subject ${
                        !message.isRead ? 'admin-messages-item-subject-unread' : ''
                      }`}>
                        {message.subject}
                      </p>
                      
                      {/* Preview */}
                      <p className="admin-messages-item-preview">
                        {message.preview}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {!message.isRead && (
                      <div className="admin-messages-item-unread-indicator"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Empty state for no messages */}
        {messages.length === 0 && (
          <div className="admin-messages-no-results">
            <div className="admin-messages-no-results-icon-wrapper">
              <Search className="admin-messages-no-results-icon" size={32} />
            </div>
            <h3 className="admin-messages-no-results-title">No hay mensajes</h3>
            <p className="admin-messages-no-results-text">Cuando recibas mensajes, aparecerán aquí.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MessagesAdministrative;