import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './ClassManagement.css';

const CarritoCompras = () => (
  <div className="class-management-empty-state">
    <div className="class-management-empty-icon">
      <ShoppingCart size={32} style={{ color: '#9ca3af' }} />
    </div>
    <h3 className="class-management-empty-title">Carrito Vacío</h3>
    <p className="class-management-empty-text">
      No tiene acceso a su carrito de compras o el carrito está vacío.
    </p>
  </div>
);

export default CarritoCompras;
