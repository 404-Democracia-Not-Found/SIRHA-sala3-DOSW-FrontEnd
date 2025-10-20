import React, { useState } from 'react';
import './ClassManagement.css';

import MyClasses from './MyClasses';
import ShoppingCart from './ShoppingCart';
import SearchInscription from './SearchInscription';
import ModificationRequest from './ModificationRequest';
import SeccionEnDesarrollo from './SeccionEnDesarrollo';

import {
  BookOpen,
  ShoppingCart as CartIcon,
  Search,
  FileText,
  RefreshCw,
  Shuffle,
  BookMarked,
  Edit3,
} from 'lucide-react';

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
  ];

  const requests = [
    { id: 1, type: 'Adición', catalogNumber: 'ISIS2002', status: 'Aprobada' },
  ];

  return (
    <div className="class-management-container">
      {/* 🧭 Menú lateral */}
      <aside className="class-management-sidebar">
        <h2 className="class-management-sidebar-title">Alumnos</h2>

        <button
          className={`class-management-menu-item ${
            activeTab === 'mis-clases' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('mis-clases')}
        >
          <BookOpen size={18} /> Mis Clases
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'carrito' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('carrito')}
        >
          <CartIcon size={18} /> Carrito de Compras
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'busqueda' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('busqueda')}
        >
          <Search size={18} /> Búsqueda e Inscripción Clases
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'baja' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('baja')}
        >
          <FileText size={18} /> Baja de Clases
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'actualizacion' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('actualizacion')}
        >
          <RefreshCw size={18} /> Actualización de Clases
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'cambio' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('cambio')}
        >
          <Shuffle size={18} /> Cambio de Clases
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'catalogo' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('catalogo')}
        >
          <BookMarked size={18} /> Búsqueda en Catálogo de Cursos
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'inscribir' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('inscribir')}
        >
          <Edit3 size={18} /> Inscribir p/Mis Cond Acad
        </button>

        <button
          className={`class-management-menu-item ${
            activeTab === 'solicitud' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('solicitud')}
        >
          <FileText size={18} /> Sol. Modificación Inscripción
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
