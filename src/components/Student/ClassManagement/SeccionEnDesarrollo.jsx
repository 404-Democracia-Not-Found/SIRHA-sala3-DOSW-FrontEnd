import React from 'react';
import { FileText } from 'lucide-react';
import './ClassManagement.css';

const SeccionEnDesarrollo = () => (
  <div className="class-management-empty-state">
    <div className="class-management-empty-icon">
      <FileText size={32} style={{ color: '#9ca3af' }} />
    </div>
    <h3 className="class-management-empty-title">Sección en Desarrollo</h3>
    <p className="class-management-empty-text">
      Esta funcionalidad estará disponible próximamente.
    </p>
  </div>
);

export default SeccionEnDesarrollo;
