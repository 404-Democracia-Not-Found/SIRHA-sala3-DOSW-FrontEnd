import React, { useState } from 'react';
import { Home, Bell, User } from 'lucide-react';
import './StudentUser.css';

const StudentUser = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('demografica');

  // Datos del estudiante
  const studentData = {
    id: '1000099728',
    nombre: 'IGNACIO ANDRÉS CASTILLO RENDÓN',
    genero: 'Masculino',
    fechaNacimiento: '14/06/2005',
    paisNacimiento: 'Venezuela',
    estadoNacimiento: 'Aragua',
    estadoCivil: 'Soltero',
    servicioMilitar: '',
    phones: [
      { type: 'Móvil', number: '3190315-7280', ext: '', country: '', preferred: true },
      { type: 'Fijo', number: '3123057-0950', ext: '', country: '', preferred: false },
      { type: 'Otro', number: '3190318-7280', ext: '', country: '', preferred: false }
    ],
    emails: [
      { type: 'Correo-E', address: 'ignacio.castillo-@mail.escuelaing.edu.co', preferred: true },
      { type: 'Casa', address: 'ignacio14.castillo@gmail.com', preferred: false },
      { type: 'Otro', address: 'joseg.castillo@umail.com', preferred: false }
    ],
    addresses: [
      {
        type: 'Domicilio',
        address: 'CALLE 190 #60-07 TORRE 12 APARTAMENTO 801\nCALLE 190 #60-07 TORRE 12 APARTAMENTO 801\nBOG\nCOL'
      }
    ]
  };

  const handleNotificationClick = () => {
    setCurrentView('messages');
  };

  const renderDemograficaTab = () => (
    <div className="student-user-profile-section">
      <div className="student-user-photo-section">
        <div className="student-user-photo-placeholder">
          <User className="student-user-photo-icon" size={64} />
        </div>
        <div className="student-user-student-id">
          ID: {studentData.id}
        </div>
      </div>

      <div className="student-user-info-grid">
        <div className="student-user-info-item">
          <span className="student-user-info-label">ID</span>
          <span className="student-user-info-value">{studentData.id}</span>
        </div>
        <div className="student-user-info-item">
          <span className="student-user-info-label">Género</span>
          <span className="student-user-info-value">{studentData.genero}</span>
        </div>
        <div className="student-user-info-item">
          <span className="student-user-info-label">Fecha Nacimiento</span>
          <span className="student-user-info-value">{studentData.fechaNacimiento}</span>
        </div>
        <div className="student-user-info-item">
          <span className="student-user-info-label">País Nacimiento</span>
          <span className="student-user-info-value">{studentData.paisNacimiento}</span>
        </div>
        <div className="student-user-info-item">
          <span className="student-user-info-label">Estado Nacim</span>
          <span className="student-user-info-value">{studentData.estadoNacimiento}</span>
        </div>
        <div className="student-user-info-item">
          <span className="student-user-info-label">Estado Civil</span>
          <span className="student-user-info-value">{studentData.estadoCivil}</span>
        </div>
        <div className="student-user-info-item">
          <span className="student-user-info-label">Servicio Militar</span>
          <span className="student-user-info-value">{studentData.servicioMilitar || '-'}</span>
        </div>
      </div>
    </div>
  );

  const renderTelefonosTab = () => (
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>
        Números Teléfono
      </h3>
      <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
        Actualice sus números de teléfono a continuación.
      </p>
      <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
        Si introduce varios números, debe especificar su teléfono de contacto principal 
        activando la casilla correspondiente.
      </p>

      <div className="student-user-phone-list">
        {studentData.phones.map((phone, index) => (
          <div key={index} className="student-user-phone-item">
            <span className="student-user-phone-type">{phone.type}</span>
            <span className="student-user-phone-number">{phone.number}</span>
            <span className="student-user-phone-ext">{phone.ext}</span>
            <span className="student-user-phone-country">{phone.country}</span>
            <input 
              type="checkbox" 
              checked={phone.preferred} 
              readOnly
              className="student-user-phone-preferred"
            />
          </div>
        ))}
      </div>

      <button className="student-user-add-phone-button">
        Añadir Nº Teléfono
      </button>

      <button className="student-user-save-button">
        Guardar
      </button>
    </div>
  );

  const renderCorreosTab = () => (
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>
        Direcciones Correo-E
      </h3>
      <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
        Introduzca sus direcciones de correo-e a continuación.
      </p>
      <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
        Si introduce varias direcciones de correo, debe especificar su dirección principal 
        mediante la casilla de selección correspondiente.
      </p>

      <div className="student-user-email-list">
        {studentData.emails.map((email, index) => (
          <div key={index} className="student-user-email-item">
            <span className="student-user-email-type">{email.type}</span>
            <span className="student-user-email-address">{email.address}</span>
            <input 
              type="checkbox" 
              checked={email.preferred} 
              readOnly
              className="student-user-email-preferred"
            />
          </div>
        ))}
      </div>

      <button className="student-user-add-email-button">
        Añadir Correo-E
      </button>

      <button className="student-user-save-button">
        Guardar
      </button>
    </div>
  );

  const renderDireccionesTab = () => (
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>
        Direcciones
      </h3>
      <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
        Consulte, añada, cambie o elimine una dirección.
      </p>

      <div className="student-user-address-list">
        {studentData.addresses.map((address, index) => (
          <div key={index} className="student-user-address-item">
            <div className="student-user-address-type">{address.type}</div>
            <div className="student-user-address-text">
              {address.address.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="student-user-add-address-button">
        Añadir Nueva Dirección
      </button>
    </div>
  );

  return (
    <div className="student-user-container">
      {/* Header */}
      <header className="student-user-header">
        <div className="student-user-header-content">
          <div className="student-user-logo-section">
            <h1 className="student-user-title">SIRHA</h1>
            <div className="student-user-logo-box"></div>
          </div>

          <div className="student-user-nav">
            <button 
              onClick={() => setCurrentView('student-dashboard')}
              className="student-user-nav-button"
            >
              <Home size={24} />
            </button>
            <button 
              onClick={handleNotificationClick}
              className="student-user-nav-button"
            >
              <Bell size={24} />
              <span className="student-user-notification-badge"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="student-user-main">
        <div className="student-user-tabs">
          <button
            className={`student-user-tab-button ${
              activeTab === 'demografica' ? 'student-user-tab-button-active' : ''
            }`}
            onClick={() => setActiveTab('demografica')}
          >
            Información Demográfica
          </button>
          <button
            className={`student-user-tab-button ${
              activeTab === 'telefonos' ? 'student-user-tab-button-active' : ''
            }`}
            onClick={() => setActiveTab('telefonos')}
          >
            Números Teléfono
          </button>
          <button
            className={`student-user-tab-button ${
              activeTab === 'correos' ? 'student-user-tab-button-active' : ''
            }`}
            onClick={() => setActiveTab('correos')}
          >
            Direcciones Correo-E
          </button>
          <button
            className={`student-user-tab-button ${
              activeTab === 'direcciones' ? 'student-user-tab-button-active' : ''
            }`}
            onClick={() => setActiveTab('direcciones')}
          >
            Direcciones
          </button>
        </div>

        <div className="student-user-content">
          {activeTab === 'demografica' && renderDemograficaTab()}
          {activeTab === 'telefonos' && renderTelefonosTab()}
          {activeTab === 'correos' && renderCorreosTab()}
          {activeTab === 'direcciones' && renderDireccionesTab()}
        </div>
      </main>
    </div>
  );
};

export default StudentUser;