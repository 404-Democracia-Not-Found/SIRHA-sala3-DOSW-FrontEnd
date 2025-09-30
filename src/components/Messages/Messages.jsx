import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical } from 'lucide-react';
import './Messages.css';

const Messages = ({ setCurrentView }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo para los mensajes
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
      sender: 'Prof. María González',
      subject: 'Recordatorio: Entrega de proyecto',
      preview: 'Recordamos que la fecha límite para la entrega del proyecto final es el próximo lunes...',
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
    <div className="messages-container">
      {/* Header */}
      <header className="messages-header">
        <div className="messages-header-content">
          {/* Botón atrás y título */}
          <div className="messages-header-left">
            <button 
              onClick={() => setCurrentView('student-dashboard')}
              className="messages-back-button"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="messages-title">Mensajes</h1>
          </div>

          {/* Botón de opciones */}
          <button className="messages-options-button">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="messages-search-section">
        <div className="messages-search-wrapper">
          <Search className="messages-search-icon" size={20} />
          <input
            type="text"
            placeholder="Buscar mensajes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="messages-search-input"
          />
        </div>
      </div>

      {/* Messages List */}
      <main className="messages-main">
        <div className="messages-list-card">
          {filteredMessages.length === 0 ? (
            <div className="messages-empty-state">
              <p>No se encontraron mensajes</p>
            </div>
          ) : (
            <div className="messages-divider">
              {filteredMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`messages-item ${
                    !message.isRead ? 'messages-item-unread' : ''
                  }`}
                >
                  <div className="messages-item-content">
                    <div className="messages-item-main">
                      {/* Sender and Time */}
                      <div className="messages-item-header">
                        <p className={`messages-item-sender ${
                          !message.isRead ? 'messages-item-sender-unread' : ''
                        }`}>
                          {message.sender}
                        </p>
                        <p className="messages-item-time">
                          {message.time}
                        </p>
                      </div>
                      
                      {/* Subject */}
                      <p className={`messages-item-subject ${
                        !message.isRead ? 'messages-item-subject-unread' : ''
                      }`}>
                        {message.subject}
                      </p>
                      
                      {/* Preview */}
                      <p className="messages-item-preview">
                        {message.preview}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {!message.isRead && (
                      <div className="messages-item-unread-indicator"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Empty state for no messages */}
        {messages.length === 0 && (
          <div className="messages-no-results">
            <div className="messages-no-results-icon-wrapper">
              <Search className="messages-no-results-icon" size={32} />
            </div>
            <h3 className="messages-no-results-title">No hay mensajes</h3>
            <p className="messages-no-results-text">Cuando recibas mensajes, aparecerán aquí.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Messages;