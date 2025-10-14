import React, { useState } from 'react';
import { Home, Bell, ChevronLeft } from 'lucide-react';
import './AdministrativeUser.css';

const AdministrativeUser = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('direcciones');

  // Datos de ejemplo del administrativo
  const administrativeData = {
    name: 'IGNACIO ANDRÉS CASTILLO RENDÓN',
    id: '1000099728',
    gender: 'Masculino',
    birthDate: '14/09/2005',
    birthCountry: 'Venezuela',
    birthState: 'Aragua',
    civilStatus: 'Soltero',
    militaryService: '',
    photo: 'https://via.placeholder.com/200' // URL de la foto del administrativo
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
    <div className="administrative-user-container">
      {/* Header */}
      <header className="administrative-user-header">
        <div className="administrative-user-header-content">
          <button
            onClick={() => setCurrentView('administrative-dashboard')}
            className="administrative-user-back-button"
          >
            <ChevronLeft size={20} />
            <span className="administrative-user-back-text">Administrativo</span>
          </button>

          <h1 className="administrative-user-title">Mi Perfil</h1>

          <div className="administrative-user-nav">
            <button
              onClick={() => setCurrentView('administrative-dashboard')}
              className="administrative-user-nav-button"
            >
              <Home size={24} />
            </button>
            <button
              onClick={() => setCurrentView('messages-administrative')}
              className="administrative-user-nav-button"
            >
              <Bell size={24} />
              <span className="administrative-user-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="administrative-user-main">
        <div className="administrative-user-content">
          {/* Photo and Basic Info */}
          <div className="administrative-user-photo-section">
            <div className="administrative-user-photo-card">
              <div className="administrative-user-photo-wrapper">
                <img
                  src={administrativeData.photo}
                  alt="Foto del administrativo"
                  className="administrative-user-photo"
                />
              </div>
              <h2 className="administrative-user-name">{administrativeData.name}</h2>
              <p className="administrative-user-id">ID: {administrativeData.id}</p>
              <p className="administrative-user-role">Administrativo</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="administrative-user-info-section">
            {/* Tabs */}
            <div className="administrative-user-tabs">
              <button
                onClick={() => setActiveTab('direcciones')}
                className={`administrative-user-tab ${
                  activeTab === 'direcciones' ? 'administrative-user-tab-active' : ''
                }`}
              >
                Direcciones
              </button>
              <button
                onClick={() => setActiveTab('telefonos')}
                className={`administrative-user-tab ${
                  activeTab === 'telefonos' ? 'administrative-user-tab-active' : ''
                }`}
              >
                Números Teléfono
              </button>
              <button
                onClick={() => setActiveTab('correos')}
                className={`administrative-user-tab ${
                  activeTab === 'correos' ? 'administrative-user-tab-active' : ''
                }`}
              >
                Direcciones Correo-E
              </button>
              <button
                onClick={() => setActiveTab('demografica')}
                className={`administrative-user-tab ${
                  activeTab === 'demografica' ? 'administrative-user-tab-active' : ''
                }`}
              >
                Información Demográfica
              </button>
            </div>

            {/* Tab Content */}
            <div className="administrative-user-tab-content">
              {/* Direcciones */}
              {activeTab === 'direcciones' && (
                <div className="administrative-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Direcciones
                  </h3>
                  {addresses.map((addr, index) => (
                    <div key={index} className="administrative-user-contact-item">
                      <p className="administrative-user-contact-type">{addr.type}</p>
                      <div className="administrative-user-address">{addr.address}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Teléfonos */}
              {activeTab === 'telefonos' && (
                <div className="administrative-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Números Teléfono
                  </h3>
                  {phones.map((phone, index) => (
                    <div key={index} className="administrative-user-contact-item">
                      <p className="administrative-user-contact-type">{phone.type}</p>
                      <p className="administrative-user-contact-value">
                        {phone.number}
                        {phone.preferred && (
                          <span className="administrative-user-contact-preferred">
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
                <div className="administrative-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Direcciones Correo-E
                  </h3>
                  {emails.map((email, index) => (
                    <div key={index} className="administrative-user-contact-item">
                      <p className="administrative-user-contact-type">{email.type}</p>
                      <p className="administrative-user-contact-value">
                        {email.email}
                        {email.preferred && (
                          <span className="administrative-user-contact-preferred">
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
                <div className="administrative-user-info-grid">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Información Demográfica
                  </h3>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">ID</span>
                    <span className="administrative-user-info-value">{administrativeData.id}</span>
                  </div>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">Género</span>
                    <span className="administrative-user-info-value">{administrativeData.gender}</span>
                  </div>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">Fecha Nacimiento</span>
                    <span className="administrative-user-info-value">{administrativeData.birthDate}</span>
                  </div>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">País Nacimiento</span>
                    <span className="administrative-user-info-value">{administrativeData.birthCountry}</span>
                  </div>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">Estado Nacim</span>
                    <span className="administrative-user-info-value">{administrativeData.birthState}</span>
                  </div>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">Estado Civil</span>
                    <span className="administrative-user-info-value">{administrativeData.civilStatus}</span>
                  </div>
                  <div className="administrative-user-info-row">
                    <span className="administrative-user-info-label">Servicio Militar</span>
                    <span className="administrative-user-info-value">
                      {administrativeData.militaryService || '-'}
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

export default AdministrativeUser;