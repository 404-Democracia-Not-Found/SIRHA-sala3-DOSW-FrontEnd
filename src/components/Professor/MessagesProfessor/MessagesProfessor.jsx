import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical } from 'lucide-react';
import './MessagesProfessor.css';

const MessagesProfessor = ({ setCurrentView }) => {
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
  <div className="prof-messages-container">
      {/* Header */}
      <header className="prof-messages-header">
        <div className="prof-messages-header-content">
          {/* Botón atrás y título */}
          <div className="prof-messages-header-left">
            <button 
              onClick={() => setCurrentView('professor-dashboard')}
              className="prof-messages-back-button"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="prof-messages-title">Mensajes</h1>
          </div>

          {/* Botón de opciones */}
          <button className="prof-messages-options-button">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="prof-messages-search-section">
        <div className="prof-messages-search-wrapper">
          <Search className="prof-messages-search-icon" size={20} />
          <input
            type="text"
            placeholder="Buscar mensajes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="prof-messages-search-input"
          />
        </div>
      </div>

      {/* Messages List */}
      <main className="prof-messages-main">
        <div className="prof-messages-list-card">
          {filteredMessages.length === 0 ? (
            <div className="prof-messages-empty-state">
              <p>No se encontraron mensajes</p>
            </div>
          ) : (
            <div className="prof-messages-divider">
              {filteredMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`prof-messages-item ${
                    !message.isRead ? 'prof-messages-item-unread' : ''
                  }`}
                >
                  <div className="prof-messages-item-content">
                    <div className="prof-messages-item-main">
                      {/* Sender and Time */}
                      <div className="prof-messages-item-header">
                        <p className={`prof-messages-item-sender ${
                          !message.isRead ? 'prof-messages-item-sender-unread' : ''
                        }`}>
                          {message.sender}
                        </p>
                        <p className="prof-messages-item-time">
                          {message.time}
                        </p>
                      </div>
                      
                      {/* Subject */}
                      <p className={`prof-messages-item-subject ${
                        !message.isRead ? 'prof-messages-item-subject-unread' : ''
                      }`}>
                        {message.subject}
                      </p>
                      
                      {/* Preview */}
                      <p className="prof-messages-item-preview">
                        {message.preview}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {!message.isRead && (
                      <div className="prof-messages-item-unread-indicator"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Empty state for no messages */}
        {messages.length === 0 && (
          <div className="prof-messages-no-results">
            <div className="prof-messages-no-results-icon-wrapper">
              <Search className="prof-messages-no-results-icon" size={32} />
            </div>
            <h3 className="prof-messages-no-results-title">No hay mensajes</h3>
            <p className="prof-messages-no-results-text">Cuando recibas mensajes, aparecerán aquí.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MessagesProfessor;