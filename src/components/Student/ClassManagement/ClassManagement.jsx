import React, { useState } from 'react';
import './ClassManagement.css';

import MyClasses from './MyClasses';
import ShoppingCart from './ShoppingCart';
import SearchInscription from './SearchInscription';
import ModificationRequest from './ModificationRequest';
import SeccionEnDesarrollo from './SeccionEnDesarrollo';

// Usamos emojis a color para los íconos del menú lateral

const ClassManagement = () => {
  // 📌 Estado para controlar qué pestaña está activa
  const [activeTab, setActiveTab] = useState('mis-clases'); // ← inicia en "Mis Clases"

  // 📚 Datos de ejemplo para las clases (puedes reemplazar con datos reales)
  const myClasses = [
    {
      id: 1,
      code: 'CIENCBAS FUCE',
      name: 'Fundamentos de Ciencias del Espacio',
      status: 'Inscrito',
      units: 2,
      program: 'Ingeniería de Sistemas',
      gradingSystem: 'Plan de Calificación Pregrado Numérico 3,0',
      schedules: [
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Martes',
          hours: '11:30AM A 1:00PM',
          room: 'H-303',
        },
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Miércoles',
          hours: '2:30PM A 4:00PM',
          room: 'H-303',
        },
      ],
    },
    {
      id: 2,
      code: 'ECOADPR FCFI',
      name: 'Fundamentos contables y financieros',
      status: 'Inscrito',
      units: 3,
      program: 'Ingeniería de Sistemas',
      gradingSystem: 'Plan de Calificación Pregrado Numérico 3,0',
      schedules: [
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Lunes',
          hours: '9:00AM A 11:00AM',
          room: 'A-201',
        },
        {
          dates: '11/08/2025 - 17/12/2025',
          days: 'Jueves',
          hours: '1:00PM A 3:00PM',
          room: 'A-201',
        },
      ],
    },
  ];

  const requests = [
    { id: 1, type: 'Adición', catalogNumber: 'ISIS2002', status: 'Aprobada' },
  ];

  return (
    <div className="class-management-container">
      {/* 🧭 Menú lateral */}
      <aside className="class-management-sidebar">
        <div className="class-management-sidebar-header">
          <span className="class-management-back-arrow">‹</span>
          <h2 className="class-management-sidebar-title">Alumnos</h2>
        </div>

        <button
          className={`class-management-menu-item ${
            activeTab === 'mis-clases' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('mis-clases')}
        >
          <span className="class-management-emoji" aria-hidden>📚</span>
          <span>Mis Clases</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'carrito' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('carrito')}
        >
          <span className="class-management-emoji" aria-hidden>🛒</span>
          <span>Carrito de Compras</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'busqueda' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('busqueda')}
        >
          <span className="class-management-emoji" aria-hidden>🔎</span>
          <span>Búsqueda e Inscripción Clases</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'baja' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('baja')}
        >
          <span className="class-management-emoji" aria-hidden>🧾</span>
          <span>Baja de Clases</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'actualizacion' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('actualizacion')}
        >
          <span className="class-management-emoji" aria-hidden>🔄</span>
          <span>Actualización de Clases</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'cambio' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('cambio')}
        >
          <span className="class-management-emoji" aria-hidden>🔁</span>
          <span>Cambio de Clases</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'catalogo' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('catalogo')}
        >
          <span className="class-management-emoji" aria-hidden>📘</span>
          <span>Búsqueda en Catálogo de Cursos</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'inscribir' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('inscribir')}
        >
          <span className="class-management-emoji" aria-hidden>📝</span>
          <span>Inscribir p/Mis Cond Acad</span>
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'solicitud' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('solicitud')}
        >
          <span className="class-management-emoji" aria-hidden>✏️</span>
          <span>Sol. Modificación Inscripción</span>
        </button>
      </aside>

      {/* 🧾 Contenido principal */}
      <main className="class-management-main">
        <div className="class-management-main-content">
          {activeTab === 'mis-clases' && <MyClasses myClasses={myClasses} />}
          {activeTab === 'carrito' && <ShoppingCart />}
          {activeTab === 'busqueda' && <SearchInscription />}
          {activeTab === 'solicitud' && (
            <ModificationRequest requests={requests} />
          )}
          {(activeTab === 'baja' ||
            activeTab === 'actualizacion' ||
            activeTab === 'cambio' ||
            activeTab === 'catalogo' ||
            activeTab === 'inscribir') && <SeccionEnDesarrollo />}
        </div>
      </main>
    </div>
  );
};

export default ClassManagement;
