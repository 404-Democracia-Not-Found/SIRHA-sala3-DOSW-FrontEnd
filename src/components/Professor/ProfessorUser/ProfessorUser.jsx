import React, { useState } from 'react';
import { Home, Bell } from 'lucide-react';
import './ProfessorUser.css';

const ProfessorUser = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('direcciones');

  // Datos de ejemplo del profesor
  const professorData = {
    name: 'IGNACIO ANDRÉS CASTILLO RENDÓN',
    id: '1000099728',
    gender: 'Masculino',
    birthDate: '14/09/2005',
    birthCountry: 'Venezuela',
    birthState: 'Aragua',
    civilStatus: 'Soltero',
    militaryService: '',
    photo: 'https://via.placeholder.com/200' // URL de la foto del profesor
  };

  const addresses = [
    {
      type: 'Domicilio',
      address: 'CALLE 160 #60-07 TORRE 12 APARTAMENTO 801\nCOL'
    }
  ];

  const phones = [
    { type: 'Móvil', number: '319/618-7280', preferred: true },
    { type: 'Ppal', number: '313/867-8669', preferred: false },
    { type: 'Otro', number: '319/618-7280', preferred: false }
  ];

  const emails = [
    { type: 'Campus', email: 'ignacio.castillo-r@mail.escuelaing.edu.co', preferred: true },
    { type: 'Casa', email: 'ignacio14.castillor@gmail.com', preferred: false },
    { type: 'Otro', email: 'joseg.castillo@gmail.com', preferred: false }
  ];

  return (
    <div className="professor-user-container">
      {/* Header */}
      <header className="professor-user-header">
        <div className="professor-user-header-content">
          <div className="professor-user-logo-section">
            <h1 className="professor-user-title">SIRHA</h1>
            <div className="professor-user-logo-box"></div>
          </div>

          <div className="professor-user-nav">
            <button
              onClick={() => setCurrentView('professor-dashboard')}
              className="professor-user-nav-button"
            >
              <Home size={24} />
            </button>
            <button
              onClick={() => setCurrentView('messages-professor')}
              className="professor-user-nav-button"
            >
              <Bell size={24} />
              <span className="professor-user-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="professor-user-main">
        <div className="professor-user-content">
          {/* Photo and Basic Info */}
          <div className="professor-user-photo-section">
            <div className="professor-user-photo-card">
              <div className="professor-user-photo-wrapper">
                <img
                  src={professorData.photo}
                  alt="Foto del profesor"
                  className="professor-user-photo"
                />
              </div>
              <h2 className="professor-user-name">{professorData.name}</h2>
              <p className="professor-user-id">ID: {professorData.id}</p>
              <p className="professor-user-role">Profesor</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="professor-user-info-section">
            {/* Tabs */}
            <div className="professor-user-tabs">
              <button
                onClick={() => setActiveTab('direcciones')}
                className={`professor-user-tab ${
                  activeTab === 'direcciones' ? 'professor-user-tab-active' : ''
                }`}
              >
                Direcciones
              </button>
              <button
                onClick={() => setActiveTab('telefonos')}
                className={`professor-user-tab ${
                  activeTab === 'telefonos' ? 'professor-user-tab-active' : ''
                }`}
              >
                Números Teléfono
              </button>
              <button
                onClick={() => setActiveTab('correos')}
                className={`professor-user-tab ${
                  activeTab === 'correos' ? 'professor-user-tab-active' : ''
                }`}
              >
                Direcciones Correo-E
              </button>
              <button
                onClick={() => setActiveTab('demografica')}
                className={`professor-user-tab ${
                  activeTab === 'demografica' ? 'professor-user-tab-active' : ''
                }`}
              >
                Información Demográfica
              </button>
            </div>

            {/* Tab Content */}
            <div className="professor-user-tab-content">
              {/* Direcciones */}
              {activeTab === 'direcciones' && (
                <div className="professor-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Direcciones
                  </h3>
                  {addresses.map((addr, index) => (
                    <div key={index} className="professor-user-contact-item">
                      <p className="professor-user-contact-type">{addr.type}</p>
                      <div className="professor-user-address">{addr.address}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Teléfonos */}
              {activeTab === 'telefonos' && (
                <div className="professor-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Números Teléfono
                  </h3>
                  {phones.map((phone, index) => (
                    <div key={index} className="professor-user-contact-item">
                      <p className="professor-user-contact-type">{phone.type}</p>
                      <p className="professor-user-contact-value">
                        {phone.number}
                        {phone.preferred && (
                          <span className="professor-user-contact-preferred">
                            ✓ Preferido
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Correos */}
              {activeTab === 'correos' && (
                <div className="professor-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Direcciones Correo-E
                  </h3>
                  {emails.map((email, index) => (
                    <div key={index} className="professor-user-contact-item">
                      <p className="professor-user-contact-type">{email.type}</p>
                      <p className="professor-user-contact-value">
                        {email.email}
                        {email.preferred && (
                          <span className="professor-user-contact-preferred">
                            ✓ Preferido
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Información Demográfica */}
              {activeTab === 'demografica' && (
                <div className="professor-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Información Demográfica
                  </h3>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">ID</span>
                    <span className="professor-user-info-value">{professorData.id}</span>
                  </div>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">Género</span>
                    <span className="professor-user-info-value">{professorData.gender}</span>
                  </div>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">Fecha Nacimiento</span>
                    <span className="professor-user-info-value">{professorData.birthDate}</span>
                  </div>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">País Nacimiento</span>
                    <span className="professor-user-info-value">{professorData.birthCountry}</span>
                  </div>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">Estado Nacim</span>
                    <span className="professor-user-info-value">{professorData.birthState}</span>
                  </div>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">Estado Civil</span>
                    <span className="professor-user-info-value">{professorData.civilStatus}</span>
                  </div>
                  <div className="professor-user-info-row">
                    <span className="professor-user-info-label">Servicio Militar</span>
                    <span className="professor-user-info-value">
                      {professorData.militaryService || '-'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessorUser;